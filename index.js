// select values and buttons
const counterScreen = document.querySelector("#countDisplay");
const Buttons = document.querySelectorAll(".btn")

// set initial count value
let count = 0;

//set the button function
Buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++
        } else {
            count =  0;
        }
        if(count > 0){
            counterScreen.style.color = "green";
        } 
         if (count < 0) {
            counterScreen.style.color = "red";
        } 
        if(count === 0){
            counterScreen.style.color = "black";
        } 
        counterScreen.textContent = count;
    });
});

     

// const counter = () => {
//     let count = 0;
//     if (increaseButton) {
//         return count += 1
//         console.log(count)  
//     }
// }

 