function jsonToCSV(json) {
    const keys = Object.keys(json[0]);
    const headers = keys.join(',');
    const rows = json.map(obj => {
        return keys.map(key => {
            return typeof obj[key] === 'string' ? `"${obj[key]}"` : obj[key];
        }).join(',');
    });
    const csv = [headers, ...rows].join('\n');

    return csv;
}

function csvToJSON(csv) {
    const lines = csv.split('\n');
    const keys = lines[0].split(',');
    const jsonData = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const obj = {};

        for (let j = 0; j < keys.length; j++) {
            obj[keys[j]] = values[j].replace(/^"|"$/g, '');
        }

        jsonData.push(obj);
    }

    return jsonData;
}

const inputTextarea = document.getElementById('input'), outputTextarea = document.getElementById('output'), csvConvertButton = document.getElementById('csvconvert'), jsonConvertButton = document.getElementById('jsonconvert'), saveButton = document.getElementById('save'), copyButton = document.getElementById('copy'), clearButton = document.getElementById('clear');

let csvFlag = false;
let jsonFlag = false;

csvConvertButton.addEventListener('click', () => {
    const input = inputTextarea.value.trim();
    try {
        const json = JSON.parse(input);
        const csv = jsonToCSV(json);
        outputTextarea.value = csv;
        csvFlag = true;
        jsonFlag = false;
    } catch (error) {
        alert('Invalid JSON input');
        csvFlag = false;
        jsonFlag = false;
    }
});

jsonConvertButton.addEventListener('click', () => {
    const input = inputTextarea.value.trim();
    try {
        const json = csvToJSON(input);
        const jsonString = JSON.stringify(json, null, 2);
        outputTextarea.value = jsonString;
        csvFlag = false;
        jsonFlag = true;
    } catch (error) {
        alert('Invalid CSV input');
        csvFlag = false;
        jsonFlag = false;
    }
});

saveButton.addEventListener('click', () => {
    const output = outputTextarea.value;
    const fileName = `output.${csvFlag ? 'csv' : 'txt'}`;
    const blob = new Blob([output], { type: csvFlag ? 'text/csv;charset=utf-8' : 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
});

copyButton.addEventListener('click', () => {
    const output = outputTextarea.value;
    navigator.clipboard.writeText(output)
        .then(() => alert('Output copied to clipboard'))
        .catch(() => alert('Failed to copy output'));
});

clearButton.addEventListener('click', () => {
    inputTextarea.value = '';
    outputTextarea.value = '';
    csvFlag = false;
    jsonFlag = false;
});