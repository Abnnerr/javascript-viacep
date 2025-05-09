function buscarCep() {
    let cepValue = document.querySelector('#cep').value;
    let endereco = document.querySelector('#endere');


    fetch(`https://viacep.com.br/ws/${cepValue}/json/`).then(res => res.json()).then(res => { console.log(res) })
    
}