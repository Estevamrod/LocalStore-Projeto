//perguntar quantos alunos tem. Ter o nome dos alunos e as notas.
//Ask how many students do you have, and get the student's names.

//
var btnAd = document.querySelector("#btn_adi");
var div_btnMais = document.querySelector(".notas_bimestre");
var alunos_i;
var student_array = []; 
//
function cleanInputsValues () {
    var bimes1_value = document.querySelector("#notas_b1").value = '';
    var bimes2_value = document.querySelector("#notas_b2").value = '';
    var bimes3_value = document.querySelector("#notas_b3").value = '';
    var bimes4_value = document.querySelector("#notas_b4").value = '';
    var students_name = document.querySelector("#nomes").value = '';
    var nameToremove = document.querySelector("#nome_exc").value = '';
}
//
function addLimiterToMtr_alunos () {
    const alunos = document.querySelector("#qntd_alunos").value;
    alunos_i = parseInt(alunos);
    try {
        if (isNaN(alunos_i)) {
            alert("Nao e aceitavel um valor vazio!");
            alert("Por Favor, digite um valor acima de 0!");
            document.querySelector("#show_more").disabled = true;
            cleanInputsValues();
        }else {
            alert("A quantidade de aluno (s) e: " + "'" + alunos_i + "'");
            console.log(alunos_i);
            document.querySelector("#show_more").disabled = false;
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
        }
    } catch (err) {
        console.error(err);
    }
}
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
function ShowandHideBtnMais () {
    try {
        if (div_btnMais.style.display === 'none') {
            div_btnMais.style.display = 'block'
        } else {
            div_btnMais.style.display = 'none'
        }
        document.querySelector("#btn_cad").disabled = true;
        document.querySelector("#qntd_alunos").disabled = true;
    } catch (err) {
        console.error(err);
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
        if (students_name == "" || bimes1_value == "" || bimes2_value == "" || bimes3_value == "" || bimes4_value == "") {
            alert("Voce precisar preencher todos os campos!");
        } else {
            function addDataToMtralunos (item) {
                student_array.push(item);
                if (student_array.length > alunos_i) {
                    remove_dataFromMtr_alunos(students_name);
                    alert("voce ultrapassou o limite de alunos")
                } else {
                    alert("Aluno " + "' " + students_name + " '" + " adicionado com SUCESSO!");
                }
                console.log(student_array);
            }
            addDataToMtralunos({
                nome: students_name, //nao pode deixar o "n" maiusculo, senao o codigo aqui nao funciona (nao sei porque).
                Bimestre_1: bimestre1,
                Bimestre_2: bimestre2,
                Bimestre_3: bimestre3,
                Bimestre_4: bimestre4
            });
        }
    } catch (err) {
        console.error(err);
    } 
    cleanInputsValues();
});