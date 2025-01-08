// services/user.service.js
const users = [
    { id: 1, username: 'user1', password: 'pass1' }
  ];
  
  class UserService {
    static registerUser(username, password) {
      if (users.find(user => user.username === username)) {
        return { error: 'User already exists' };
      }
      const newUser = { id: users.length + 1, username, password };
      users.push(newUser);
      return newUser;
    }
  
    static loginUser(username, password) {
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        return { success: 'Login successful' };
      }
      return { error: 'Invalid credentials' };
    }
  }
  
  module.exports = UserService;
  