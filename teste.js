let teste = [
    {
        nome:"felipe",
        n1:1,
        n2:2,
        n3:3,
        n4:4
    },
    {
        nome:"estevam",
        n1:4,
        n2:3,
        n3:2,
        n4:1
    },

]
let indiceRemover =null;
for (let i = teste.length-1; i >= 0; i--) {
    let teste1 =teste[i].nome
    for (let j = 0; j < teste.length; j++) {
        let teste2 = teste[j].nome
        if (teste2 == teste1 && i !== j) {
            console.log(`agora ${teste1}: ${i} && ${teste2}: ${j}`);
            indiceRemover = i;
            teste.splice(indiceRemover,1);
            break;
        }
    }
}

console.table(teste);