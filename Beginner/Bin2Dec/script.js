function reverse(text) {
    if (text.length <= 1) {
        return text;
    }
    return reverse(text.slice(1)) + text[0];
}

const n = input.value;
let sum = 0;
let flag = 0;
let new_n = reverse(n);

for (let i = 0; i < new_n.length; i++) {
    if (new_n[i] !== "0" && new_n[i] !== "1") {
        flag = 1;
        break;
    } else {
        sum += parseInt(new_n[i]) * Math.pow(2, i);
        flag = 0;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    convert.addEventListener("click", function () {
        if (flag == "1") {
            result.textContent = "Invalid Input";
        } else {
            result.textContent = sum;
        }
    });
});