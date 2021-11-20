module.exports = (file_csv) => {
    const string_csv = file_csv.toString();
    const rows = string_csv.split('\r\n');
    const jsonArray = [];
    const header = rows[1].split(',');
    for (let i = 2; i < rows.length; i++) {
        let obj = {};
        let row = rows[i].split(',');
        for (let j = 0; j < header.length; j++) {
            obj[header[j]] = row[j];
        }

        jsonArray.push(obj);
    }
    return jsonArray;
};
