import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to sign up page')
});

export { router as signUpRouter}