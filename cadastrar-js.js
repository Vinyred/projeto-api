

const recurso = 'user';
const servico = 'new';
const url = 'https://todolist-api.edsonmelo.com.br/api/${recurso}/${servico}/';

const nome = prompt('Insira um nome: ');
const email = prompt('Insira um email: ');
const username = prompt('Insira um nome de usuário: ');
const password = prompt('Insira uma senha: ');

const pay_load = {
    'name': nome,
    'email': email,
    'username': username,
    'password': password
};

const headers = { 'Content-type': 'application/json' };

fetch(url, {
    method: 'POST',
    body: JSON.stringify(pay_load),
    headers: headers
})
    .then(response => response.json())
    .then(data => {
        if ('message' in data) {
            throw new Error(data['message']);
        } else {
            console.log(data);
            console.log('Id: ', data['id']);
            console.log('Nome: ', data['name']);
            console.log('Email: ', data['email']);
            console.log('Token: ', data['token']);
            console.log('imagem: ', data['picture']);
        }
    })
    .catch(error => console.log(error));