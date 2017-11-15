import mongoose from 'mongoose';
const mongo = 'mongodb://localhost/minhas-series-rest';
mongoose
  .connect(mongo, {useMongoClient: true})
  .then(() => {
    console.log('[SERVER] DB ON');
  })
  .catch(e => {
    console.log('[SERVER] NOT WORKING');
  }
);

mongoose.Promise = global.Promise;