// select values and buttons
const counterScreen = document.querySelector("#countDisplay");
const Buttons = document.querySelectorAll(".btn")

// set count value
let count = 0;

//
Buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        console.log(styles)
        if (styles.contains("decrease")){
            count--;
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

 