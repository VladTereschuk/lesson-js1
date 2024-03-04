function makeCapitalText(inputText){
    let text = "";
    let smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let bigLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i=0;i<inputText.length;i++){
        // 1. inputText[i] - we have current symbol
        // 2. get indexOf this symbol in smallletters array
        // 3. if indexOf is -1 we just copy symbol from indextext
        // 4. otherwise we get symbol from bigLetters using indexOf

        let index = smallLetters.indexOf(inputText[i]);
        if(index == -1){
            text = text + inputText[i];
        }
        else{
            text = text + bigLetters[index];
        }
    }
    return text;
}
console.log(makeCapitalText("hello world"));

function firstCapitalLetter(inputText)
{
    let text = "";
    let smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let bigLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i=0;i<inputText.length;i++)
    {
        // 1. if prevoius symbol is " " or current position is 0
        // 2. getting indexof of current symbol
        // 3. adding bigletter
        // 4. if prevoius symbol is not " " adding symbol without changing
            
        if(inputText[i-1] == " " || i == 0)
        {
            let index = smallLetters.indexOf(inputText[i]);
            text = text + bigLetters[index];
        }
        else{
            text = text + inputText[i];
        }
        
    }
    return text;
}
console.log(firstCapitalLetter("hello world"));

// 1. Write function that checks if element exists in array
// 2. Function returns element position in array if element exists in array or -1 if not
arr = ["hello", "Bye", "See you", "Take care", "What's up", "What's cooking"];

function checkIfElementExist(arr, element)
{
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
        if(arr[i] == element)
        {
            return i;
        }     
    }  
    return -1;
}
console.log(checkIfElementExist(arr,"Take care"));

// 1. Write function that returns if value is a number
// 2. If it is a number function returns true
// 3. if it is not function returns false

// Algorithm:
// 1. Go through the loop of symbols in the value
// 2. Create array of digits from 0 to 9
// 3. If ALL symbols are digits then value is a number
// 4. If at least one symbol is NOT a digit then the value is NOT a number


function findIfNumber(value){

    let numberArr = ["1","2","3","4","5","6","7","8","9","0"];

    for(let i=0;i<numberArr.length;i++)
    {
        console.log(numberArr[i]);
        if(numberArr[i] == value)
        {
            result = true;
        }
        else{
            result = false;
        }
    }
    return result;
}
console.log(findIfNumber("f"));