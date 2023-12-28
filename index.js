
const result = document.getElementById("result");
const input = document.getElementById("text-input");
const checkPalidrome =()=>{
   if(!input.value){
    return alert("Please input a value")
   }
   else{
    const value = input.value;
    const reversedValue = value.toLowerCase().split("").reverse().join("").replace(/[\W_]/g, "");
    if(reversedValue === value.toLowerCase().replace(/[\W_]/g,"")){
        result.innerText = `${value} is a palindrome.`;
        input.value = "";
    }
    else{
        result.innerText = `${value} is not a palindrome.`
        input.value = "";
    }
   }
}


// риски нижні, спейс, крапки коми двокрапки риски скісні дефіси