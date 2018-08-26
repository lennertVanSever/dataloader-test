import DataLoader from 'dataloader';
import { connection } from './Connection';
import _ from 'lodash';

const postLoader = new DataLoader(authorKeys => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * from post where author_id IN (?)`
    const values = [authorKeys];
    console.log(sql);
    connection.query({sql, values}, (error, results) => {
      if(error) {
        console.log(error);
        reject(error)
      }
      else {
        const groupedByAuthorKey = _.groupBy(results, "author_id");
        const mappedAuthorKey = authorKeys.map(authorKey => groupedByAuthorKey[authorKey]);
        resolve(mappedAuthorKey);
      }
    });
  });
});

module.exports = {
  postLoader
}
