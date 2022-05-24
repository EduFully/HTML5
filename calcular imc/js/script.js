
const calcular = document.getElementById('calcular');


function imc(){
    let resultado = document.getElementById('resultado');
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    if(peso.value!=='' && altura!==''){
        let valorIMC = (peso/(altura*altura)).toFixed(1);
        let classificacao = "";

        if(valorIMC<18.5){
            classificacao='Abaixo do peso >B(';
        }else if(valorIMC>=18.5 && valorIMC<25){
            classificacao='Peso normal B)';
        }else if(valorIMC>=25 && valorIMC<30){
            classificacao='Sobrepeso >B(';
        }else if(valorIMC>=30 && valorIMC<40){
            classificacao='Obesidade >B(';
        }else{
            classificacao='Obesidade grave >B(';
        }

        resultado.textContent = `${valorIMC}: ${classificacao}`
    }else{
        resultado.textContent = 'Xiiii deu ruim!!!'
    }
}

calcular.addEventListener('click',imc);
