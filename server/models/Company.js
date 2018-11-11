const db = require('../db/db.js');

exports.getCompanyList = async () => {
    const query = `
        select * from company;
    `
    const {rows} = await db.query(query);
    return rows;
}