var nodeValidator = require('validator');

nodeValidator.Validator.prototype.errors = function (returnMessages) {
    if (this._errors.length > 0) {
        return returnMessages ? this._errors : true;
    } else {
        return false;
    }
};

nodeValidator.Validator.prototype.error = function (msg) {
    this._errors.push(msg);
    return this;
};

module.exports = nodeValidator;
