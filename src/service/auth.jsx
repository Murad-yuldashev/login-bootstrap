import axios from "./Api"

const AuthService = {
    async userRegister(user) {
        const response = await axios.post('/users', {user});
        return response;
    },
    async userLogin() {},
    async getUser() {},
}

export default AuthService;