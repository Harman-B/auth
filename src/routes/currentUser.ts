import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome current user.')
});

export { router as currentUserRouter}