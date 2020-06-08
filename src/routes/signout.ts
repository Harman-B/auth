import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to sign out page');
});

export { router as signOutRouter}