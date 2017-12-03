// user credentials contain user id, email and token

class Auth {
  /**
   * Authenticates a user
   * (saves user credentials in the local storage).
   * @param {string} credentials
   */
  static login(credentials) {
    localStorage.setItem('auth_token', credentials.token);
    localStorage.setItem('email', credentials.user.email);
    localStorage.setItem('id', credentials.user.id);
  }


  /**
   * Deauthenticates a user
   * (removes user credentials from the local storage).
   */
  static logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
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


  /**
   * Returns a current authenticated user
  */
  static currentUserName() {
    return localStorage.getItem('email');
  }
}

export default Auth;
