const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");

celsius.addEventListener("input", () => {
    const result = (parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(result.toFixed(2));
});

fahrenheit.addEventListener("input", () => {
    const result = (parseFloat(fahrenheit.value) - 32) * 5/9;
    
});