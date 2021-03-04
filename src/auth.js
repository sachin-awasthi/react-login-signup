class Auth {
    constructor() {
        this.autheticated = false;
    }

    login() {
        this.autheticated = true;
    }
    logout() {
        this.autheticated = false;
    }
    isAuthenticated() {
        return this.isAuthenticated;
    }
}

export default Auth;