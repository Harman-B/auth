export class DatabaseConnectionError extends Error {
  reason = 'Database connection failed.'
  constructor () {
    super();
    
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}