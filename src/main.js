//perguntar quantos alunos tem. Ter o nome dos alunos e as notas.
//Ask how many students do you have, and get the student's names.

var btnAd = document.querySelector("#btn_adi");
var div_btnMais = document.querySelector(".notas_bimestre");
var div_tableStudentArray = document.querySelector("#show_data");
var alunos_limite;
var student_array = []; 
//
function addLimiterToMtr_alunos () {
    const alunos = document.querySelector("#qntd_alunos").value;
    alunos_limite = parseInt(alunos);
    try {
        if (isNaN(alunos_limite)) {
            alert("Nao e aceitavel um valor vazio!");
            alert("Por Favor, digite um valor acima de 0!");
            document.querySelector("#show_more").disabled = true;
            cleanInputsValues();
        }else {
            alert("A quantidade de aluno (s) e: " + "'" + alunos_limite + "'");
            console.log(alunos_limite);
            document.querySelector("#show_more").disabled = false;
        }
    } catch (err) {
        console.error(err);
    }
}
//
function ShowandHideBtnMais () {
    showAndHideTable();
    if (div_btnMais.style.display === 'none') {
        div_btnMais.style.display = 'block'
    } else {
        div_btnMais.style.display = 'none'
    }
    document.querySelector("#btn_cad").disabled = true;
    document.querySelector("#qntd_alunos").disabled = true;
}
//
function showAndHideTable () {
    if (div_tableStudentArray.style.display === 'none') {
        div_tableStudentArray.style.display = 'block'
    } else {
        div_tableStudentArray.style.display = 'none'
    }
}
//
btnAd.addEventListener('click', function() {
    document.querySelector("#btn_exc").disabled = false;
    //
    var students_name = document.querySelector("#nomes").value;
    var bimes1_value = document.querySelector("#notas_b1").value;
    var bimes2_value = document.querySelector("#notas_b2").value;
    var bimes3_value = document.querySelector("#notas_b3").value;
    var bimes4_value = document.querySelector("#notas_b4").value;
    //
    const bimestre1 = String(bimes1_value);
    const bimestre2 = String(bimes2_value);
    const bimestre3 = String(bimes3_value);
    const bimestre4 = String(bimes4_value);
    //
    try {
        if (students_name == ""||bimes1_value == "" || bimes2_value == "" || bimes3_value == "" || bimes4_value == "") {
            alert("Voce precisar preencher todos os campos!");
        } else {
            function addDataToMtralunos (item) {
                var studentLengh = student_array.length
                checkAndDeleteIfAlredyExists(item);
                student_array.push(item);
                if (student_array.length > alunos_limite) {
                    remove_dataFromMtr_alunos(students_name);
                    alert("voce ultrapassou o limite de alunos");
                    alert("Por favor, remova um aluno para poder continuar! OU aumente o limite de alunos");
                }
                if (studentLengh < student_array.length) {
                    showDatainfo();
                    alert(`Aluno: ${item.nome} foi adicionado com sucesso!`);
                }
                console.log(student_array);
            }
            addDataToMtralunos({
                nome: students_name, //nao pode deixar o "n" maiusculo, se nao o codigo aqui nao funciona (nao sei porque).
                Bimestre_1: bimestre1,
                Bimestre_2: bimestre2,
                Bimestre_3: bimestre3,
                Bimestre_4: bimestre4
            });
        }
    } catch (err) {
        console.error(err);
    } finally {
        cleanInputsValues();
    }
});
//
function checkAndDeleteIfAlredyExists (item) {
    const itemName = item.nome;
    var equalName = null;
    try {
        for (var i = 0; i < student_array.length; i++) {
            const findName = student_array[i]['nome']
            if (findName == itemName) {
                var equalName = i;
                console.log(findName + ` já existe nessa lista! Na linha: ${equalName}`);
                alert("Nao foi possivel adicionar esse aluno! Porque ele ja foi adicionado!");
                alert("Por favor, digite um novo valor!");
                break;
            }
        }
        if (equalName != null) {
            student_array.splice(equalName,1);
        }
    } catch (error) {
        console.error(error);
    }
};
//
function validateNametoRemove (nome) {
    try {
        for (var i = 0; i < student_array.length; i++) {
            const validate = student_array[i]['nome'];
            if (nome == validate) {
                var value_validated = validate;
            }
        }
        if (value_validated) {
            alert("Aluno " + "' " + nome + " '" + " removido com sucesso!");
        } else {
            alert("Voce precisa digitar o nome de um aluno que esteja na lista!");
        }
    } catch (err) {
        console.error(err);
    }
}
//
function remove_dataFromMtr_alunos (nome) {
    try {
        let indiceRemover = null;
        for (var i = 0; i < student_array.length; i++) {
            const mtr_value = student_array[i]['nome'];
            if (nome == mtr_value) {    
                indiceRemover = i;
                break;
            }
        }
        if (indiceRemover != null) {
            student_array.splice(indiceRemover,1);
            tbody.deleteRow(indiceRemover);
        }
    } catch (error) {
        console.error(error);
    }
}
//
function actionToRemoveData () {
    var nameToremove = document.querySelector("#nome_exc").value;
    try {
        if (nameToremove == "") {
            alert("voce precisa digitar algum nome!!");
        } else {
            validateNametoRemove(nameToremove);
            remove_dataFromMtr_alunos(nameToremove);
        }
    } catch (err) {
        console.error(err);
    }
    console.log(student_array);
    cleanInputsValues();
}
//
function cleanInputsValues () {
    var bimes1_value = document.querySelector("#notas_b1").value = '';
    var bimes2_value = document.querySelector("#notas_b2").value = '';
    var bimes3_value = document.querySelector("#notas_b3").value = '';
    var bimes4_value = document.querySelector("#notas_b4").value = '';
    var students_name = document.querySelector("#nomes").value = '';
    var nameToremove = document.querySelector("#nome_exc").value = '';
}
function showDatainfo () {
    let tbody = document.querySelector("#tbody");
    tbody.innerText = ""
    for (var i = 0; i < student_array.length; i++) {
        let tr = tbody.insertRow();

        let td_nome = tr.insertCell();
        let td_1bim = tr.insertCell();
        let td_2bim = tr.insertCell();
        let td_3bim = tr.insertCell();
        let td_4bim = tr.insertCell();

        td_nome.innerText = student_array[i]['nome'];
        td_1bim.innerText = student_array[i]['Bimestre_1'];
        td_2bim.innerText = student_array[i]['Bimestre_2'];
        td_3bim.innerText = student_array[i]['Bimestre_3'];
        td_4bim.innerText = student_array[i]['Bimestre_4'];
    }
}