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