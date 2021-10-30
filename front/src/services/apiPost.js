import { api } from './api';

const getOrderItensByOrder = async orderId => await postDefault( `findByOrder`, { orderId });

const authUser = async (email, password) => await postDefault(`authenticate`, { email, password });

const registerAccount = async (name, email, password) => await postDefault( `register`, { name, email, password });

const createOrder = async order => await postDefault(`createOrder`, { order })

const closeOrder = async ( id, payment ) => await postDefault(`closeOrder`, { id, payment });

// const fun = async (...params) => await postDefault( `urlString`, object )

const postDefault = async ( url, object ) => {
    try {
        let { data } = await api.post(url, object);
        // console.log('[post]',url, object);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export { getOrderItensByOrder, authUser, registerAccount, createOrder, closeOrder };