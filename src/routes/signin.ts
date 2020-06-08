import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to sign in page.')
});

export { router as signInRouter}