const db = require('../db/db.js');

exports.getCompanyArticlesAt = async (company, time) => {
    const query = `
        select * from company_articles_news where cid = (select id from company where name=$1) and dob >= $2;
    `
    const {rows} = await db.query(query, [company, time]);
    return rows;
}