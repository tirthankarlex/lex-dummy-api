const fs = require('fs');

module.exports = {
  development: {
    auth: {
      jwt_encryption: "MY_SECRET_CODE",
      jwt_expiration: 10000
    }
  },
  test: {
    auth: {
      jwt_encryption: "MY_SECRET_CODE",
      jwt_expiration: 10000
    }
  },
  production: {
    auth: {
      jwt_encryption: "MY_SECRET_CODE",
      jwt_expiration: 10000
    }
  }
};