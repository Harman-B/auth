import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/currentUser';
import { signUpRouter } from './routes/signup';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';

const app = express();
app.use(json());

app.use('/api/users/currentuser', currentUserRouter);
app.use('/api/users/signup', signUpRouter);
app.use('/api/users/signin', signInRouter);
app.use('/api/users/signout', signOutRouter);

app.listen(3000, () => {
  console.log('Listenting on PORT 3000!!!!')
})
