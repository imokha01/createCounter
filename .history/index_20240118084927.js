// select values and buttons
const counterScreen = document.querySelector("#countDisplay");
const Buttons = document.querySelectorAll(".btn")

Buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count
        }
    })
});

  

// const counter = () => {
//     let count = 0;
//     if (increaseButton) {
//         return count += 1
//         console.log(count)  
//     }
// }

 