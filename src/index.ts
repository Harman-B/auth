import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/currentUser';
const app = express();
app.use(json());

app.use('/api/users/currentuser', currentUserRouter);

app.listen(3000, () => {
  console.log('Listenting on PORT 3000!!!!')
})
