#Imports the Google Cloud client library
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import pprint
import requests
from datetime import datetime, timedelta
import psycopg2
import re

def connectToDatabase():
    try:
        conn = psycopg2.connect(database="secret", user="power_user", password="1234", host="ec2-34-230-43-107.compute-1.amazonaws.com", port="5432")
        return conn
    except:
        print("I am unable to connect to the database")

def getCompanyList(conn):
    cur = conn.cursor()
    cur.execute("SELECT id,name,code from company")
    rows = cur.fetchall()
    print(rows)
    return rows

def getCompanyArticles(conn,id, d_t):
    cur = conn.cursor()
    cur.execute("SELECT * from company_articles_news where id = %s and dob >= %s", (id, d_t))
    rows = cur.fetchall()
    print(rows)
    return rows

def getCompanyTweets(conn,id, d_t):
    cur = conn.cursor()
    cur.execute("SELECT * from company_tweets where id = %s and dob >= %s", (id, d_t))
    rows = cur.fetchall()
    print(rows)
    return rows

def updateSentinentToDatabase(conn,id, score, magnitude):
    cur = conn.cursor()
    try:
        cur.execute("INSERT INTO company_trends (cid, score, magnitude, dob) VALUES (%s, %s, %s, now())", (id, score, magnitude))
        conn.commit()
    except:
        # duplicated
        print("Error in update Sentinent")

def analyzeText(headlines):
    # Instantiates a client
    client = language.LanguageServiceClient()

    # The text to analyze
    text = headlines
    document = types.Document(
        content=text,
        type=enums.Document.Type.PLAIN_TEXT)

    # Detects the sentiment of the text
    sentiment = client.analyze_sentiment(document=document).document_sentiment

    print('Text: {}'.format(text))
    print('Sentiment: {}, {}'.format(sentiment.score, sentiment.magnitude))
    return sentiment.score, sentiment.magnitude

def main():
    conn = connectToDatabase()
    rows = getCompanyList(conn)
    t_now = datetime.now() - timedelta(seconds=60*500)
    for r in rows:
        arts = getCompanyArticles(conn, r[0], t_now)
        tweets = getCompanyTweets(conn, r[0],t_now) 
        company_score = 0
        company_mag = 0 

        print(len(arts))
        print(len(tweets))
        for a in arts:
            scoreHeadline, magnitudeHeadline = analyzeText(a["headline"])
            scoreContent, magnitudeContent = analyzeText(a["content"])
        
        for t in tweets:
            scoreTweet, magnitudeTweet = analyzeText(t["content"])
        # Calculate score 
        # Available to user : tweets["like_count"]
        # Uncomment update score later
        #updateSentinentToDatabase(conn, r[0], company_score, company_mag)


if __name__ == '__main__':
  main()