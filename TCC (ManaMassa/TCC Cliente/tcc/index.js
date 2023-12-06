const form = document.querySelector('#form');
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let cep = document.querySelector('#cep');
let estado = document.querySelector('#estado');
let cidade = document.querySelector('#cidade');
let rua = document.querySelector('#rua');
let numero = document.querySelector('#numero');

form.addEventListener('submit', guardaUsuario);

function guardaUsuario (e) {
    let sNome = nome.value;
    let sEmail = email.value;
    let sCep = cep.value;
    let sEstado = estado.value;
    let sCidade = cidade.value;
    let sRua = rua.value;
    let sNumero = numero.value;


localStorage.setItem('nome', sNome);
localStorage.setItem('email', sEmail);
localStorage.setItem('cep', sCep);
localStorage.setItem('estado', sEstado);
localStorage.setItem('cidade', sCidade);
localStorage.setItem('rua', sRua);
localStorage.setItem('numero', sNumero); 


localStorage.getItem('nome');
localStorage.getItem('email');
localStorage.getItem('cep');
localStorage.getItem('estado');
localStorage.getItem('cidade');
localStorage.getItem('rua');
localStorage.getItem('numero');

}