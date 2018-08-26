import { connection } from './Connection';
import loaders from './loaders';

const resolvers = {
  Query: {
    authors: () => {
      return new Promise((resolve, reject) => {
        const sql = "SELECT * from author";
        connection.query(sql, (error, results) => {
          if(error) reject(error);
          else {
            resolve(results);
          }
        });
      });
    },
  },
  Author: {
    Posts({id: author_id}){
      return loaders.postLoader.load(author_id);
    }
  }
}

module.exports = {
  resolvers
}
