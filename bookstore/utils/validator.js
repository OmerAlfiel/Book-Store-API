module.exports = {
    validateUsername(username) {
      return /^[a-zA-Z0-9_]+$/.test(username);
    },
  
    validatePassword(password) {
      return password.length >= 6;
    }
  };
  