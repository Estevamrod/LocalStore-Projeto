let filaDeEspera = [];

function addFilaEspera(item){
    filaDeEspera.push(item);
};


function removerFilaEsperaPorSenha(nome){
    let indiceRemover=null; 
    //localiza item
    for(i=0; i<filaDeEspera.length ;i++){
        let item =  filaDeEspera[i]; 
        if(item.nome == nome){
            indiceRemover= i;
            break;
        }
    }
    //remove item 
    if(indiceRemover != null){
        filaDeEspera.splice(indiceRemover,1);
    }

}


addFilaEspera({
    nome: "João",
    telefone: "1122223333",
    senha: "001"
});

addFilaEspera({
    nome: "Maria",
    telefone: "4455556666",
    senha: "002"
});
var x = 'Maria'

console.log(filaDeEspera);
removerFilaEsperaPorSenha(x);
console.log(filaDeEspera);