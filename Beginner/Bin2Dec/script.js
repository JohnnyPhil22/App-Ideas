document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('input');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    convert.addEventListener("click", function () {
        const binary = input.value;
        let decimal = 0;
        let isInvalid = false;

        for (let i = 0; i < binary.length; i++) {
            if (binary[i] !== '0' && binary[i] !== '1') {
                isInvalid = true;
                break;
            } else {
                decimal += parseInt(binary[i]) * Math.pow(2, binary.length - 1 - i);
            }
        }

        if (isInvalid) {
            result.textContent = "Invalid Input";
        } else {
            result.textContent = decimal;
        }
    });
});