import express, {Request, Response} from 'express';
import { check, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { User } from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';

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
], async (req: Request, res: Response) => {
  
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
    // return res.status(422).json({ errors: errors.array() });
  }

  const {email, password} = req.body;
  
  const existingUser = await User.findOne({email});
  if (existingUser) {
    throw new BadRequestError('User already exists!');
  }
  
  const user = User.build({email, password});
  await user.save();

  res.status(201).send(user);
});

export { router as signUpRouter}