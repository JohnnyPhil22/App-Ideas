function reverse(text) {
    if (text.length <= 1) {
        return text;
    }
    return reverse(text.slice(1)) + text[0];
}

let n = prompt("Enter binary number: ");
let sum = 0;
let new_n = reverse(n);

for (let i = 0; i < new_n.length; i++) {
    if (new_n[i] !== "0" && new_n[i] !== "1") {
        console.log("Invalid Input");
        break;
    } else {
        sum += parseInt(new_n[i]) * Math.pow(2, i);
    }
}

console.log(sum);

