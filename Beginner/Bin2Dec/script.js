document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('input');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const convertBinary = () => {
        const binaryString = input.value.trim();

        if (binaryString === '') {
            result.textContent = "Please enter a binary number";
            return;
        }

        let trimmedBinary = binaryString;
        if (binaryString.startsWith('0b')) {
            trimmedBinary = binaryString.slice(2);
        }

        let decimal = 0;
        let isInvalid = false;
        let power = 0;

        for (let i = trimmedBinary.length - 1; i >= 0; i--) {
            if (trimmedBinary[i] !== '0' && trimmedBinary[i] !== '1') {
                isInvalid = true;
                break;
            } else {
                decimal += parseInt(trimmedBinary[i]) * Math.pow(2, power);
                power++;
            }
        }

        if (isInvalid) {
            result.textContent = "Invalid Input";
        } else {
            result.textContent = decimal;
        }
    };

    convert.addEventListener("click", convertBinary);

    input.addEventListener("keydown", function (event) {
        if (event.key === 'Enter') {
            convertBinary();
        }
    });
});