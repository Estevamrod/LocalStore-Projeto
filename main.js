//perguntar quantos alunos tem. Ter o nome dos alunos e as notas.

//inputs buttons
var btnAd = document.querySelector("#btn_adi");
var btnEx = document.querySelector("#btn_exc");

//alunos = linhas da array
let alunos_i;
//
//div do nome e as notas
var hide = document.querySelector(".notas_bimestre");
// var data_show = document.querySelector(".show_data");
//
//array
let mtr_alunos = []; 
//
//funcao para adicionar dados ao array
function Add_data () {
    var alunos = document.querySelector("#qntd_alunos").value;
    
    alunos_i = parseInt(alunos);
    if (isNaN(alunos_i)) {
        alert("Nao e aceitavel um valor vazio!");
        alert("Por Favor, digite um valor acima de 0!");
        document.querySelector("#show_more").disabled = true;
        cleanData();
    } else {
        console.log(alunos_i + " alunos ");
        document.querySelector("#show_more").disabled = false;
    }
}
//funcao de excluir dados do array
function Excluir_dados(nome){
    let indiceRemover=null; 
    for(var i=0; i < mtr_alunos.length ;i++){
        let item = mtr_alunos[i]; 
        if(item.nome == nome){
            indiceRemover= i;
            break;
        }
    }
    if(indiceRemover != null){
        mtr_alunos.splice(indiceRemover,1);
    }
}
//executa a acao de limpar
function cleanData () {
    var b1_valor = document.querySelector("#notas_b1").value = '';
    var b2_valor = document.querySelector("#notas_b2").value = '';
    var b3_valor = document.querySelector("#notas_b3").value = '';
    var b4_valor = document.querySelector("#notas_b4").value = '';
    var alunos_nomes = document.querySelector("#nomes").value = '';
    var nome_ex = document.querySelector("#nome_exc").value = '';
}
//executa a acao de clicar
function Show_hide () {
    if (hide.style.display === 'none') {
        hide.style.display = 'block'
    } else {
        hide.style.display = 'none'
    }
    // if (data_show.style.display === 'none') {
    //     data_show.style.display = 'block'
    // } else {
    //     data_show.style.display = 'none'
    // }
    
    document.querySelector("#btn_cad").disabled = true;
    document.querySelector("#qntd_alunos").disabled = true;
}
//executa a acao de clicar
function Excluir_data () {
    var nome_ex = document.querySelector("#nome_exc").value;
    if (nome_ex === "") {
        alert("Valores vazios nao sao permitidos!");
        alert("Por favor, digite um valor adequado!");
    } else {
        Excluir_dados(nome_ex);
        console.log(mtr_alunos);
        alert("Aluno " + "' " + nome_ex + " '" + " removido com sucesso!");
        cleanData();
    }
}

btnAd.addEventListener('click', function() {
    document.querySelector("#btn_exc").disabled = false;
    //nome e notas
    var aluno_nome = document.querySelector("#nomes").value;
    var b1_valor = document.querySelector("#notas_b1").value;
    var b2_valor = document.querySelector("#notas_b2").value;
    var b3_valor = document.querySelector("#notas_b3").value;
    var b4_valor = document.querySelector("#notas_b4").value;
    
    let alunos_nomes = String(aluno_nome);
    const b1_val = String(b1_valor);
    const b2_val = String(b2_valor);
    const b3_val = String(b3_valor);
    const b4_val = String(b4_valor);
    //
    if (b1_val > 10 || b2_val > 10 || b3_val > 10 || b4_val > 10) {
        alert("Nao e aceito valores acima de 10!");
    } else {
        //=> function autalizar_mtr (a,b,c,d,e)
        function atualizar_mtr (item) {
            mtr_alunos.push(item);
            if (mtr_alunos.length > alunos_i) {
                Excluir_dados(alunos_nomes);
                alert("voce ultrapassou o limite de alunos")
            } else {
                alert("Aluno " + "' " + alunos_nomes + " '" + " adicionado com SUCESSO!");
                console.log(mtr_alunos);
                // data_show.innerHTML += `nome: ${alunos_nomes} <br/> 1°Bimestre: ${b1_val} <br/> 2°Bimestre: ${b2_val} <br/> 3°Bimestre: ${b3_val} <br/> 4°Bimestre: ${b4_val} <br/>`;
            }
        } 
        atualizar_mtr({
            nome: alunos_nomes, //nao pode deixar o "n" maiusculo, senao o codigo aqui nao funciona (nao sei porque).
            Bimestre_1: b1_val,
            Bimestre_2: b2_val,
            Bimestre_3: b3_val,
            Bimestre_4: b4_val
        });
    }
    cleanData();
});