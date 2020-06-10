import { Response, Request, NextFunction} from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

interface errors {
  message: string;
  field: string;
}[]

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

  console.log("Something went wrong")
  if ( err instanceof RequestValidationError) {
    const formattedErrors = err.errors.map(error => {
      return { message: error.msg, field: error.location}
    });
    res.status(400).send({errors: formattedErrors})
  }

  if ( err instanceof DatabaseConnectionError) {
    res.status(500).send({errors: [{message: err.reason}]})
  }

}