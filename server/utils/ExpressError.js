class ExpressError extends Error {
    constructor(statusCode, error, message, details) {
        super();
        this.statusCode = statusCode;
        this.error = error;
        this.message = message;
        this.details = details;
    }
}

module.exports = ExpressError;