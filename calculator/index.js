const valNum = document.querySelectorAll(".val");

const output = document.querySelector(".text");
const clearAll = document.querySelector(".AC");
const deleteNum = document.querySelector(".DEL");
const equal = document.querySelector(".equal");

//adds each value and displays onto output

for (const val of valNum) {
    val.addEventListener("click", () => {
        // console.log(val);
        output.value += val.value;
    });
}

// valNum.forEach(function(val) {
//     val.addEventListener("click", ()=>{
//         console.log(val);
//         output.value += val.value;
//     })
// });

//clears all value off output
clearAll.addEventListener("click", () => {
    output.value = "";
})

//deletes the last value added
deleteNum.addEventListener("click", () => {
    output.value = output.value.slice(0, -1);
})

//if no errors evaluates the output
//else displays error 
equal.addEventListener("click", () => {
    try{
        output.value = eval(output.value);
    } catch(e) {
        alert(e);
    }
})


