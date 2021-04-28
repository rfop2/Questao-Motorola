console.log("Oi Motorola")

function isPalindrome(number){
    let palindrome = number.toString();
    let result = false;
    //checa se eh palindrome
    for(let low = 0, high = palindrome.length-1;  low != high; low++, high--){
        if(palindrome[low] === palindrome[high]){
            result = true;
        }
    }

    return result;
    //retornar como int
}

function reverseSumNumber(number){
    let arrayNumeros = number.toString();
    let interation = 0;

    //reverter numero 
    let aux = "";
    for(let i = arrayNumeros.length-1; i>=0; i--){
        aux += arrayNumeros[i];
    }
    //checa se eh palindrome
    if(isPalindrome(aux)){
        return console.log(aux + " " + "" + interation);
    } else {
        //somar
        
    }
}

//reverseSumNumber(195);

console.log(isPalindrome(9349));