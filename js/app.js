

// //LocalStorage

// // setItem malumot saqlash
// const name = "Ahror"
// let age = 25
// localStorage.setItem('name' , name)
// localStorage.setItem('age' , age) 


// // getItem  olish 
// const getAge = localStorage.getItem('age')
// console.log(getAge);

// // clear tozalab yuborish
// localStorage.clear()


document.addEventListener("DOMContentLoaded", function() {
    // LocalStorage dan ismni olish
    const name = localStorage.getItem("name");
    if (name) {
        document.getElementById("displayName").innerText = `Salom, ${name}!`;
    }
});

function saveName() {
    const nameInput = document.getElementById("nameInput").value;
    if (nameInput) {
        // Ismni localStorage ga saqlash
        localStorage.setItem("name", nameInput);
        document.getElementById("displayName").innerText = `Salom, ${nameInput}!`;
    }
}