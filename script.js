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