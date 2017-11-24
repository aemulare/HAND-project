class Auth {
  /**
   * Authenticates a user
   * (saves a token in the local storage).
   * @param {string} token
   */
  static login(token) {
    localStorage.setItem('auth_token', token);
  }


  /**
   * Deauthenticates a user
   * (removes a token from the local storage).
   */
  static logout() {
    localStorage.removeItem('auth_token');
  }


  /**
   * Checks if a uses is authenticated
   * (checks if a token is saved in the local storage).
   *
   * @returns {boolean}
   */
  static isAuthenticated() {
    return Auth.token() !== null;
  }


  /**
   * Gets a token from the local storage.
   *
   * @returns {string}
   */
  static token() {
    return localStorage.getItem('auth_token');
  }
}

export default Auth;
