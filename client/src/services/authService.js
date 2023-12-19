import * as request from '../lib/request' 

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {

   
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });
    console.log(result)

    return result;
};

export const register = async (email,username, password) => await request.post(`${baseUrl}/register`, {
    email,
    password,
    username
});

export const logout = async () => request.get(`${baseUrl}/logout`);