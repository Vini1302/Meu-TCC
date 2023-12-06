
function limpa_formulario_cep() {
    //Limpa valores do dormulario de cep
    document.getElementById('bairro').value ='';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value ='';
}

const meu_callback = (conteudo) => {
   console.log(conteudo);
   if (!('erro' in conteudo)){
    //Atualiza os campos com os valores.
    document.getElementById('bairro').value = conteudo.bairro;
    document.getElementById('cidade').value = conteudo.localidade;
    document.getElementById('uf').value = conteudo.uf;
   } //end if.
   else {
    //cep não encontrado
    limpa_formulario_cep();
    alert('CEP não encotrado.');
   }
};

const pesquisaCEP = (valor) => {
    //Nova variável "cep" somente com digitos.
    let cep = valor.replace(/\D/g, '');

    //verifica se campo cep possui valor informado.
    if (cep != ''){
        //Expressão regular para validar o CEP.
        let validacep = /^[0-9]{8}$/;

        //Valida formato do CEP.
        if (validacep.test(cep)) {
            //Prenche os campos com "..." enquanto consulta webservice.
            document.getElementById('bairro').value = '...';
            document.getElementById('cidade').value = '...';
            document.getElementById('uf').value = '...';

            //Cria um elemento javazcript.
            let script = document.createElement ('script');

            //Sincroniza com o callback.
            script.src =
            'https://viacep.com.br/ws/' +
            cep +
            '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteudo.
            document.body.appendChild(script);
        } //end if.

        else{
            //cep é inválido
            limpa_formulario_cep();
            alert('Formato de CEP inválido.');
        }
    } //end if.
    else{
        //cep sem valor, limpa formulário.
        limpa_formulario_cep();
    }
};