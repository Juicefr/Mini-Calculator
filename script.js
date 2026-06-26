const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        const value = button.dataset.value;

        console.log(value);

        if(value !== undefined){
            display.value += value;
        }

    });

});

clearBtn.addEventListener("click", function(){
    display.value = "";
});
equalsBtn.addEventListener("click", function () {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});