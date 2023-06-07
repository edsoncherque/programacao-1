//selecionando o elemento do formulário pelo id
telefone.onblur = function() {
    //onblur é um evento que ocorre quando o elemento perde o foco
    if(this.value.length < 11) {
        //this se refere ao elemento que está sendo executado (telefone)
        error1.innerHTML = '<p> Verifique o numero do telefone digitado </p>'
        this.style.backgroundColor = 'red' ;
    } else {
        error1.innerHTML = '';
        this.style.backgroundColor = 'white';
    }
};

//selecionando o elemento do formulário pelo id usando o querySelector
aperitivo = document.getElementById('aperitivo');
aperitivo.onchange = function() {
    //checando com o checked (checkbox e radio buttons)
    this.checked ? alert("Ok, vou providenciar!") : alert("Até a proxima my friend");
};

let sexo = document.getElementsByName('sexo');
let hobbies = document.getElementsByName('hobbies');

btSexo.onclick = function() {
    let msg = "";
    msg += 'Sexo:';
    sexo.forEach(s =>{
        s.checked ? msg += s.value + '\n': undefined;
    });
    msg += '\n Hobbies: \n';
    hobbies.forEach(h =>{
        msg += h.checked ? h.value + '\n': '';
    });
    mensagem.text = msg;
};

uf.onchange = function() {
    switch(this.value){
        case 'AC' : natural.innerHTML = 'Acreano'; break;
        case 'AL' : natural.innerHTML = 'Alagoano'; break;
        case 'AM' : natural.innerHTML = 'Amazonense'; break;
        case 'BA' : natural.innerHTML = 'Baiano'; break;
        default : natural.innerHTML = 'Outro';
    }
};