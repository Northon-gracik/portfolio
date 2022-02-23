
import { api } from './api';

const getAllProducts = async () => await getDefault('findAllProduct');

const getProduct = async id => await getDefault(`findProductById/${id}`);

const getOrderByUser = async () => await getDefault(`findOrderByToken`);

const getItensByOrder = async () => await getDefault(`findItensByOrder`);

const getUserByToken = async () => await getDefault(`findByToken`);

const getOrdersData = async () => await getDefault(`getOrdersData`);

// const fun = async (...params) => await getDefault(`urlString`);

const getDefault = async url => {
    try {
        let { data } = await api.get(url);
        // console.log("[get]", url, data);
        return data;
    } catch (error) {
        console.log("[get]", error);
    }
}

export { getAllProducts, getProduct, getOrderByUser, getItensByOrder, getUserByToken, getOrdersData };