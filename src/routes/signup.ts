import express, {Request, Response} from 'express';
import { check, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

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
  console.log(errors);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
    // return res.status(422).json({ errors: errors.array() });
  }

  // res.send({"email": req.body.email, "password": req.body.password})
  throw new DatabaseConnectionError();
});

export { router as signUpRouter}