  
import axios from 'axios';

const url = process.env.REACT_APP_apiurl;

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const newMessages = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}


export const getGroups = async (users) => {
    try {
        let response = await axios.post(`${url}/group/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getGroups API ', error);
    }
}

export const setGroup = async (data) => {
    try {
        await axios.post(`${url}/group/add`, data);
    } catch (error) {
        console.log('Error while calling setGroup  API ', error);
    }
}


export const getGMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/gmessage/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const newGMessages = async (data) => {
    try {
        return await axios.post(`${url}/gmessage/add`, data);
    } catch (error) {
        console.log('Error while calling newGMessage API ', error);
    }
}
