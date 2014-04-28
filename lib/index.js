/**
 * # Precondition Error
 * Thrown when a precondition fails.
 *
 * @param {String}   message The error message.
 * @param {Function} caller  The function that threw the error, used for cleaning stack traces.
 */
function PreconditionError(message, caller) {
  this.name = 'PreconditionError';
  this.message = message || 'Precondition failed';
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(this, caller || PreconditionError);
  }
}
PreconditionError.prototype = Object.create(Error.prototype);
PreconditionError.prototype.constructor = PreconditionError;

/**
 * # Postcondition Error
 * Thrown when a postcondition fails.
 *
 * @param {String} message   The error message.
 * @param {Function} caller  The function that threw the error, used for cleaning stack traces.
 */
function PostconditionError(message, caller) {
  this.name = 'PostconditionError';
  this.message = message || 'Postcondition failed';
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(this, caller || PreconditionError);
  }
}
PostconditionError.prototype = Object.create(Error.prototype);
PostconditionError.prototype.constructor = PreconditionError;


/**
 * # Invariant Error
 * Thrown when an invariant fails.
 *
 * @param {String} message   The error message.
 * @param {Function} caller  The function that threw the error, used for cleaning stack traces.
 */
function InvariantError(message, caller) {
  this.name = 'InvariantError';
  this.message = message || 'Invariant failed';
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(this, caller || InvariantError);
  }
}
InvariantError.prototype = Object.create(Error.prototype);
InvariantError.prototype.constructor = InvariantError;


/**
 * # Precondition
 * Asserts that a precondition is truthy.
 *
 * @param  {Mixed}              subject  The subject to assert.
 * @param  {String}             message  The optional message for the assertion.
 * @throws {PreconditionError}           If the subject is falsey.
 */
function precondition(subject, message) {
  if (!subject) {
    throw new PreconditionError(message, precondition);
  }
}

/**
 * # Postcondition
 * Asserts that a postcondition is truthy.
 *
 * @param  {Mixed}               subject  The subject to assert.
 * @param  {String}              message  The optional message for the assertion.
 * @throws {PostconditionError}           If the subject is falsey.
 */
function postcondition(subject, message) {
  if (!subject) {
    throw new PostconditionError(message, postcondition);
  }
}

/**
 * # Invariant
 * Asserts that an invariant is truthy.
 *
 * @param  {Mixed}              subject  The subject to assert.
 * @param  {String}             message  The optional message for the assertion.
 * @throws {PreconditionError}           If the subject is falsey.
 */
function invariant(subject, message) {
  if (!subject) {
    throw new InvariantError(message, invariant);
  }
}



exports.PreconditionError = PreconditionError;
exports.PostconditionError = PostconditionError;
exports.InvariantError = InvariantError;
exports.precondition = precondition;
exports.postcondition = postcondition;
exports.invariant = invariant;