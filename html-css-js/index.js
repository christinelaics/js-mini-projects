
const htmlCode = document.querySelector("#html");
const cssCode = document.querySelector("#css");
const jsCode = document.querySelector("#js");
const previewCode = document.querySelector("#preview")

function runCode() {

    //Sets the value of the pair identified by key to value, 
    //creates new key/value pair if none existed for key previously.

    //stored data in local storage
    localStorage.setItem("htmlCode", htmlCode.value);
    localStorage.setItem("cssCode", cssCode.value);
    localStorage.setItem("jsCode", jsCode.value);

    //evaluates and executes HTML and CSS
    previewCode.contentDocument.body.innerHTML = `<style>${localStorage.cssCode}</style>` + localStorage.htmlCode;

    //evaluates javascript code and executes
    previewCode.contentWindow.eval(localStorage.jsCode);
    
}


//automatically reflects user textarea input into preview window
htmlCode.addEventListener("keyup", ()=> {
    runCode()
});

cssCode.addEventListener("keyup", () => {
    runCode()
});

jsCode.addEventListener("keyup", () => {
    runCode()
});

//for accessing stored data in local storage
htmlCode.value = localStorage.htmlCode;
cssCode.value = localStorage.cssCode;
jsCode.value = localStorage.jsCode;
