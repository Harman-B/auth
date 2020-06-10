import express, {Request, Response} from 'express';
import { check, validationResult } from 'express-validator';

const router = express.Router();

router.post('/', [
  check('email')
    .trim()
    .isEmail()
    .withMessage("Email must be valid"),
  check('password')
    .trim()
    .isString()
    .isLength({min: 5, max: 20})
    .withMessage("password must be between 5 to 20 characters")
], (req: Request, res: Response) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new Error("Invalid Email or Password!");
    // return res.status(422).json({ errors: errors.array() });
  }

  // res.send({"email": req.body.email, "password": req.body.password})
  throw new Error("Database connection failed!")
});

export { router as signUpRouter}