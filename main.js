'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome : "judson",
    email: "judsonsantosdesouza@gmail.com",
    celular: "11123456788",
    cidade: "carapicuiba",
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

//CRUD - creatClient read update delete

//CRUD - CREATE
const creatClient = (client) => {
    const dbClient = getLocalStorage
    dbClient.push (client)
    setLocalStorage(dbClient)
}
 

//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document;getElementById('modalClose')
    .addEventListener('click', closeModal)