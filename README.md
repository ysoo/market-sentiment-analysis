# market-sentiment-analysis for MadHacks 2018

## Inspiration
We noticed that many news articles are somewhat biased. Depending on the sources of news, articles are written in a way where the opinion of the writer is apparent, which in turn affects the opinion of the reader. We also noticed that the public's sentiment towards certain companies affects the stock prices of the company. An instance of this is when Elon Musk tried marijuana on camera, causing Tesla's stock to fall. Hence, we thought that it would be interesting to find out how the public's opinions towards companies would affect their stock's performance.

## What it does
Headlines scrape the internet for articles and tweets that mention a certain company. Using that data, we run a sentiment analysis on the information and come up with a sentiment score. Our dynamic user interface plots the sentiment score on the same graph as it's stock charts for comparison.

## How we built it
We built it with React as our front-end framework, and Express as our back-end framework. We used PostgreSQL as our database. To scrape the internet, we ran python scripts using News API, Twitter API, and Google's Custom Search API to scrape those respective websites and populate our database with various articles. We then ran those articles through Google Cloud's Natural Language API to obtain a sentiment score of the company.

## Challenges we ran into
Finding a threshold that best represents the sentiment categories as a landslide of bad press will sour a company's sentiment score significantly.

## Accomplishments that we're proud of
Our user interface, it is dynamic and beautiful.

## What we learned
Most of us came into this project without knowing much about web development and we had to learn how to build a web application from scratch. We all had different experiences, hence we all came out of this with more knowledge about different things.

## What's next for headlines
We plan to improve the accuracy of the sentiment score by checking the relevancy of articles using text summarization through Tensorflow. We also plan look into entity-sentiment relationships especially for articles where more than one company is mentioned such as: "Amazon surpasses Microsoft in market value for the first time". We also intend to scrape more places like Reddit or Facebook as these social media websites are a more accurate representation of the public's sentiment.
