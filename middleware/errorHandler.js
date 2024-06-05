class BadRequestError extends Error {
    constructor(message = 'Bad Request') {
      super(message);
      this.name = this.constructor.name;
      this.statusCode = 400;
    }
  }
  
const errorHandler = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ error: message });
};

module.exports = {errorHandler, BadRequestError};
