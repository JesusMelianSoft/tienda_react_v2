import axios from 'axios';
const API_URL = 'http://localhost:8002/api/v1';

const aGetTrabajadorForLogin = (name, pass) => {
    return axios.get(`${API_URL}/trabajador/${name}/${pass}`).then((response) => response.data);
}

const aGetTrabajadoresLogin = () => {
    return axios.get(`${API_URL}/trabajadores/`).then((response) => response.data);
}

const aGetClients = (cod_user) => {
    return axios.get(`${API_URL}/clients/${cod_user}`).then((response) => response.data);
}

const delClientByCod = (cod_client, cod_user) => {
    console.log("DEL CLIENTE: "+`${API_URL}/client/${cod_client}/${cod_user}`)
    return axios.delete(`${API_URL}/client/${cod_client}/${cod_user}`).then((response) => response.data);
}

const delPayByCod = (cod_pago, cod_user) => {
    console.log("DEL PAGO: "+`${API_URL}/client/${cod_pago}/${cod_user}`)
    return axios.delete(`${API_URL}/pay/${cod_pago}/${cod_user}`).then((response) => response.data);
}

const delBuyByCod = (cod_compra, cod_user) => {
    return axios.delete(`${API_URL}/buy/${cod_compra}/${cod_user}`).then((response) => response.data);
}

const aGetClientByCod = (cod_client, cod_user) => {
    console.log("aGetClientById: "+`${API_URL}/client/${cod_client}/${cod_user}`);
    return axios.get(`${API_URL}/client/${cod_client}/${cod_user}`).then((response) => response.data);
}

const aPutClient = (client) => {
    console.log('aPutClient'+`${API_URL}/client/${client.cod_cliente}`, client)
    return axios.put(`${API_URL}/client/${client.cod_cliente}`, client).then((response) => response.data);
}

const aGetDebeClients = (cod_user) => {
    console.log('aGetDebeClients'+`${API_URL}/totalDebeClient/${cod_user}`);
    return axios.get(`${API_URL}/totalDebeClient/${cod_user}`).then((response) => response.data);
}

const aInsertClient = (client) => {
    console.log(client)
    return axios.post(`${API_URL}/client/`, client).then((response) => response.data);
}

const aSearchClients = (cod_user, dato) => {
    return axios.get(`${API_URL}/clients/${cod_user}/${dato}`).then((response) => response.data);
}

const aInsertPay = (pay) => {
    console.log("aInsertPay: ",pay)
    return axios.post(`${API_URL}/pago/`, pay).then((response) => response.data);
}

const aGetPayByUser = (cod_user) => {
    console.log("aGetPayByUser: codUser: ",cod_user);
    return axios.get(`${API_URL}/pagos/${cod_user}`).then((response) => response.data);
}

const aGetBuyByUser = (cod_user) => {
    console.log("aGetBuyByUser: codUser: ",cod_user);
    return axios.get(`${API_URL}/compras/${cod_user}`).then((response) => response.data);
}

const aGetBuysWeek = (cod_user) => {
    console.log('aGetDebeClients'+`${API_URL}/totalDebeClient/${cod_user}`);
    return axios.get(`${API_URL}/comprasWeek/${cod_user}`).then((response) => response.data);
}

const aGetPaysWeek = (cod_user) => {
    console.log('aGetDebeClients'+`${API_URL}/totalDebeClient/${cod_user}`);
    return axios.get(`${API_URL}/pagosWeek/${cod_user}`).then((response) => response.data);
}

const aResetPays = (cod_user) => {
    return axios.get(`${API_URL}/resetPays/${cod_user}`).then((response) => response.data);
}

const aResetBuys = (cod_user) => {
    return axios.get(`${API_URL}/resetBuys/${cod_user}`).then((response) => response.data);
}

const aInsertBuy = (buy) => {
    console.log("aInsertBuy: ",buy)
    return axios.post(`${API_URL}/compra/`, buy).then((response) => response.data);
}

export default {aResetPays, aResetBuys, aGetBuysWeek, aGetPaysWeek, delBuyByCod, delPayByCod, aGetTrabajadorForLogin, aGetTrabajadoresLogin, aGetClients, delClientByCod, aGetClientByCod, aPutClient, aGetDebeClients, aInsertClient, aSearchClients, aInsertPay, aGetPayByUser, aGetBuyByUser, aInsertBuy};