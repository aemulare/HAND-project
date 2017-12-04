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
    localStorage.setItem('userid', credentials.user.id);
    localStorage.setItem('username', credentials.user.fullName);
  }


  /**
   * Deauthenticates a user
   * (removes user credentials from the local storage).
   */
  static logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
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
   * Returns the email address of the current authenticated user.
  */
  static currentUserName() {
    const userName = localStorage.getItem('username');
    return userName.trim() || localStorage.getItem('email');
  }

  /**
   * Returns the current user ID.
   */
  static currentUserId() {
    return localStorage.getItem('userid');
  }
}

export default Auth;
