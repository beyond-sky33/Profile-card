let btn = document.querySelector("button")
let h5 = document.querySelector("h5")

let flag = 0;

btn.addEventListener("click", function () {
    if (flag == 0) {
        h5.innerHTML = "Friends"
        h5.style.color = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "red"
        flag = 1;
    }else{
        h5.innerHTML = "stranger"
        h5.style.color = "red"
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "green"
        flag = 0;
    }
})