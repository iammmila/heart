const count = document.getElementById("count");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    const countnew = parseInt(count.innerHTML);
    count.innerHTML = countnew + 1;
});

// jsda nese pb var
