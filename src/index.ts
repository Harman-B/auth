import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import mongoose from 'mongoose';
import { currentUserRouter } from './routes/currentUser';
import { signUpRouter } from './routes/signup';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';
import { errorHandler } from './middleware/error-handler';

const app = express();
app.use(json());

app.use('/api/users/currentuser', currentUserRouter);
app.use('/api/users/signup', signUpRouter);
app.use('/api/users/signin', signInRouter);
app.use('/api/users/signout', signOutRouter);
app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('connected to mongo...')
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => {
    console.log('Listenting on PORT 3000!!!!')
  })
}

start();

