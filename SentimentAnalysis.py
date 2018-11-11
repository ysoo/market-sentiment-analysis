#Imports the Google Cloud client library
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import pprint
import requests
from datetime import datetime


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

def updateToDatabase(conn,data, id):
    cur = conn.cursor()
    for d in data:
        try:
            cur.execute("INSERT INTO company_articles_news (url, dob, headline, content,cid) VALUES (%s, %s, %s, %s, %s)", (d["url"], d["dob"],d["title"], d["content"], id))
            conn.commit()
        except:
            # duplicated
            continue

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

analyzeText("hello world")