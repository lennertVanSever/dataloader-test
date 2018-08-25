import { connection } from './Connection';
const Query = {
  authors(){
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from author";
      connection.query(sql, (error, results) => {
        if(error) reject(error);
        else {
          resolve(results);
        }
      });
    });
  }
}

const resolversTypes = {
  Author: {
    Posts({id: author_id}){
      return new Promise((resolve, reject) => {
        const sql = `SELECT * from post where author_id = ?`
        const values = [author_id];
        connection.query({sql, values}, (error, results) => {
          if(error) {
            console.log(error);
            reject(error)
          }
          else {
            resolve(results);
          }
        });
      });
    }
  }
}

module.exports = {
  Query,
  resolversTypes
}
