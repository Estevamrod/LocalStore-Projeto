let testeb = document.querySelector("#teste");
let btnDel = document.querySelector("#del");
btnDel.disabled = true;
let student_array = new Array;

class Aluno {
    constructor(nome, nota1, nota2, nota3, nota4) {
        this.Nome = nome;
        this.Bimestre_1 = nota1,
        this.Bimestre_2 = nota2,
        this.Bimestre_3 = nota3,
        this.Bimestre_4 = nota4
    }
    addToArray() {
        student_array.push({
            Nome: this.Nome,
            Bimestre_1: this.Bimestre_1,
            Bimestre_2: this.Bimestre_2,
            Bimestre_3: this.Bimestre_3,
            Bimestre_4: this.Bimestre_4
        });
        this.LocateDelete();
        console.table(student_array);
    }
    removeItem(index) {
        try {
            let indiceRemover = null;
            let findIndex = index;
            for (let i = 0; i <student_array.length; i++) {
                let NameintoArray = student_array[i].Nome;
                if (findIndex == NameintoArray) {
                    indiceRemover = i;
                    break;
                }
            }
            if (indiceRemover != null) {
                student_array.splice(indiceRemover,1);
                tbody.deleteRow(indiceRemover);
                alert(`Aluno '${index}' deletado com sucesso`);
                console.table(student_array);
            } else {
                alert(`O valor digitado '${index}' esta incorreto!`);
            }
        }catch (error) {
            console.error(`removeItem() ${error}`);
            console.log("removeItem();")
        }
    }
    LocateDelete(){
        let indiceRemover = null;
        for (let i = 0; i < student_array.length;i++){
            let NameIncrease = student_array[i].Nome;
            for (let j = student_array.length-1; j >= 0; j-- ){
                let NameDecrease = student_array[j].Nome
                if (NameDecrease == NameIncrease && i !== j){
                    console.log(`agora ${NameIncrease}: ${i} && ${NameDecrease}: ${j} ==> posicao antes da retirada`);
                    indiceRemover = j;
                    student_array.splice(indiceRemover,1);
                    break;
                }
            }
        }
        if (indiceRemover !== null) {
            alert(`Esse valor '${this.Nome}' ja foi cadastrado, por favor digite outro valor!`);
        } else {
            this.DatainTable();
            alert(`Aluno '${ this.Nome}' foi cadastrado com sucesso!`);
        }
    }
    Clear() {
        let Name = document.querySelector("#nome").value = ""; 
        let NametoDelete = document.querySelector('#nametodel').value = "";
        let b1 = document.querySelector("#b1").value = ""; 
        let b2 = document.querySelector("#b2").value = ""; 
        let b3 = document.querySelector("#b3").value = ""; 
        let b4 = document.querySelector("#b4").value = ""; 
    }
    DatainTable(){
        let tbody = document.querySelector("#tbody");
        tbody.innerText = ""
        for (var i = 0; i < student_array.length; i++) {
            let tr = tbody.insertRow();
    
            let td_nome = tr.insertCell();
            let td_1bim = tr.insertCell();
            let td_2bim = tr.insertCell();
            let td_3bim = tr.insertCell();
            let td_4bim = tr.insertCell();
    
            td_nome.innerText = student_array[i].Nome;
            td_1bim.innerText = student_array[i].Bimestre_1;
            td_2bim.innerText = student_array[i].Bimestre_2;
            td_3bim.innerText = student_array[i].Bimestre_3;
            td_4bim.innerText = student_array[i].Bimestre_4;
        }
    }
}
//
testeb.onclick = () => {
    let Name = document.querySelector("#nome").value; 
    let b1 = document.querySelector("#b1").value; 
    let b2 = document.querySelector("#b2").value; 
    let b3 = document.querySelector("#b3").value; 
    let b4 = document.querySelector("#b4").value;
    //
    const AlunoNovo = new Aluno(Name, b1, b2, b3, b4);
    try {
        if (Name !== "" && b1 !== "" && b2 !== "" && b3 !== "" && b4 !== "") {
            AlunoNovo.addToArray();
            btnDel.disabled = false;
        } else if(student_array.length > 0) {
            btnDel.disabled = false;
            alert("Você precisa preencher todos os campos, obrigatoriamente!!");
        } else {
            alert("Você precisa preencher todos os campos, obrigatoriamente!!");
            btnDel.disabled = true;
        }
    } catch (error) {
        console.error(error);
    } finally {
        AlunoNovo.Clear();
    }
    btnDel.onclick = () => {
        let NametoDelete = document.querySelector('#nametodel').value;
        try {
            if (NametoDelete !== "") {  
                AlunoNovo.removeItem(NametoDelete);
            } else {
                alert(`Voce precisa preencher o campo com algum valor!`);
            }
        } catch (error) {
            console.error(error);
        } finally {
            AlunoNovo.Clear();
        }
    }
}