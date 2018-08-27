import { connection } from './Connection';
import loaders from './loaders';
import conversions from 'conversions';


const resolvers = {
  SearchResult: {
    __resolveType({type}){
      return type;
    }
  },
  Author: {
    __resolveType(obj, context){
      console.log(obj);
    },
    length({ length }, { unit }){
      return conversions(length, 'meters', unit.toLowerCase());
    },
    Posts({id: author_id}){
      return loaders.postLoader.load(author_id);
    }
  },
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
    search: (root, { query }) => {
      return new Promise((resolve, reject) => {
        const escapedQuery = `%${query}%`;
        const sql = `
          SELECT *, "Author" as type from author
          WHERE (
            first_name like ? or
            last_name like ? or
            email like ?
          )
          LIMIT 20;
          SELECT *, "Post" as type from post
          WHERE (
            title like ? or
            description like ? or
            content like ?
          )
          LIMIT 20;
        `;
        const values = [escapedQuery, escapedQuery, escapedQuery, escapedQuery, escapedQuery, escapedQuery];
        connection.query({sql, values}, (error, results) => {
          if(error) reject(error);
          else {
            const mergedArray = results[0].concat(results[1]);
            resolve(mergedArray);
          }
        });
      });
    }
  }
}

module.exports = {
  resolvers
}
