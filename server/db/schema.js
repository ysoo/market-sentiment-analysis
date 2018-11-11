const db = require('./db.js');

exports.reset = function () {
    const query = `
        DROP TABLE IF EXISTS company_trends;
        DROP TABLE IF EXISTS company_tweets;
        DROP TABLE IF EXISTS company_articles_news;
        DROP TABLE IF EXISTS company;
        
        CREATE TABLE IF NOT EXISTS company (
            id serial unique primary key,
            name text,
            code varchar(255)
        );
        CREATE TABLE IF NOT EXISTS company_articles_news (
            id serial unique primary key,
            cid int references company(id),
            dob timestamp,
            url text unique,
            headline text,
            content text
        );
        CREATE TABLE IF NOT EXISTS company_tweets (
            id serial unique primary key,
            cid int references company(id),
            username varchar(255),
            dob timestamp,
            content text,
            like_count bigint,
            tweet_id text unique not nulls
        );
        CREATE TABLE IF NOT EXISTS company_trends (
            id serial unique primary key,
            cid int references company(id),
            score numeric(14,5),
            magnitude numeric(14,5),
            dob timestamp
        );
        CREATE TABLE IF NOT EXISTS company_trends (
            id serial unique primary key,
            cid int references company(id),
            dob timestamp,
            score numeric(14,5),
            magnitude numeric(14,5),
            score_headline numeric(14,5),
            magnitude_headline numeric(14,5),
            score_content numeric(14,5),
            magnitude_content numeric(14,5),
            score_tweet numeric(14,5),
            magnitude_tweet numeric(14,5)
        );
    `
    db.query(query, function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('DB Reset Successful!');
      });
}