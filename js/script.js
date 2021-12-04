//let numero = 0;
//let condicao = 'test';
//let pessoas = ['João', 'Pedro', 'Maria', 'Henrique', 'Mateus', 'Francielle'];

//if(condicao == 'test'){
    //while(numero <= 4){
        //numero++;
    //for(numero = 0; numero <= 5; numero++){
        //switch(numero){
            //case numero:
                //alert(`Olá, ${pessoas[numero]}`);
            //break;
        //}
    //}

    //switch(pessoas){
        //case 0:
            //alert(`Olá, ${pessoas[0]}`);
        //break;
    
        //case 1:
            //alert(`Olá, ${pessoas[1]}`);
        //break;
    
        //case 2:
            //alert(`Olá, ${pessoas[2]}`);
        //break;
    
        //case 3:
            //alert(`Olá, ${pessoas[3]}`);
        //break;
    
        //case 4:
            //alert(`Olá, ${pessoas[4]}`);
        //break;
    
        //case 5:
            //alert(`Olá, ${pessoas[5]}`)
        //break;
    //}
//}

//console.log(pessoas[2]);

//while(numero < 10){
    //numero++;
    //alert(`Esse é o número ${numero}`);
    //console.log(numero);
//}

//do{
    //console.log(numero);
    //alert(`O número ${numero} passou por aqui!`)
    //numero++;
//} while(numero < 10){
    //alert(`Esse número é ${numero}`);
//}

//for(numero = 0; numero < 10; numero++){
    //console.log(numero);
    //alert('Numero' + numero);
//}

let resultado = document.getElementById('tabuada');
for(let numero = 1; numero <= 10; numero=numero+1){
    for(let multiplica = 0; multiplica <= 10; multiplica=multiplica+1){
        let multiplicacao = numero * multiplica;
        let linha = '' + numero + ' x ' + multiplica + ' = ' + multiplicacao + '<br></br>';
        resultado.innerHTML += (linha);
    }
}

// feito acima uma tabuada