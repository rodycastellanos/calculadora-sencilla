
export function addTwoNumbers(num1,num2){
  let suma = num1 + num2;
  console.log(suma);
  return suma;
}
function restTwoNumbers(num1,num2){
  let resta = num1 - num2;
  console.log(resta);
  return resta;
}
function multiplyTwoNumbers(num1,num2){
  let multiplicacion = num1 * num2;
  console.log(multiplicacion);
  return multiplicacion;
}
function divideTwoNumbers(num1,num2){
  let division = num1 / num2;
  console.log(division);
  return division;
}

const option = +prompt("Selecciona una opcion \n 1. Sumar\n 2. Restar\n 3. Multiplicar\n 4. Dividir");
switch(option){
  case 1:
    const num1 = +prompt("Ingresa el primer numero");
    const num2 = +prompt("Ingresa el segundo numero");
    alert(addTwoNumbers(num1,num2));
    break;
  case 2:
    const num3 = +prompt("Ingresa el primer numero");
    const num4 = +prompt("Ingresa el segundo numero");
    alert(restTwoNumbers(num3,num4));
    break;
  case 3:
    const num5 = +prompt("Ingresa el primer numero");
    const num6 = +prompt("Ingresa el segundo numero");
    alert(multiplyTwoNumbers(num5,num6));
    break;
  case 4:
    const num7 = +prompt("Ingresa el primer numero");
    const num8 = +prompt("Ingresa el segundo numero");
    alert(divideTwoNumbers(num7,num8));
    break;
  default:
    alert("Opcion no valida");
}
