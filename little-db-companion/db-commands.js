const axios = require('axios').default;

async function register (name, pass) {
    try {
        response = await axios.post('https://ldbc.cf/register', {
            username: name,
            password: pass
        });
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

async function login (name, pass) {
    try {
        response = await axios.post('https://ldbc.cf/login', {
            username: name,
            password: pass
        });
        //console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

async function set (table, key, value, token) {
    try {
        response = await axios.post('https://ldbc.cf/set', {
            body: {
                table: table,
                key: key,
                value: value
            },
            headers: {
                'authorization' : token
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

async function get (table, key, token) {
    try {
        response = await axios.get('https://ldbc.cf/get', {
            params: {
                table: table,
                key: key
            },
            headers: {
                'authorization' : token
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}
/*
class login {
  constructor (name, password) {
    try {
        response = await axios.post('https://ldbc.cf/login', {
            username: name,
            password: pass
        });
        console.log(response.data);
        this.token = response.data;
    } catch (err) {
        console.log(err);
    }
  }
  get token() {
    return this.token;
  }
}
*/
module.exports = {
    register,
    login,
    get,
    set
}