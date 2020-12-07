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
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

async function set (table, key, value) {
    try {
        response = await axios.post('https://ldbc.cf/set', {
            table: table,
            key: key,
            value: value
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

async function get (table, key) {
    try {
        response = await axios.get('https://ldbc.cf/get', {
            params: {
                table: table,
                key: key
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    register,
    login,
    get,
    set
}