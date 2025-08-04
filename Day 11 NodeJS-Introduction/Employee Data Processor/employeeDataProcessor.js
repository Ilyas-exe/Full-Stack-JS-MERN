const xlsx = require('xlsx')
const filePath = './employee_data_.xlsx'

// 1-Reading Excel Files:
let data;
let workbook;
let sheetName;
let worksheet;
try {
    // Load the Excel file
    workbook = xlsx.readFile(filePath);

    // Get the name of the first sheet
    sheetName = workbook.SheetNames[0];

    // Get the worksheet object
    worksheet = workbook.Sheets[sheetName];

    // Convert the sheet data to JSON format
    data = xlsx.utils.sheet_to_json(worksheet);

} catch (error) {
    console.error('Error reading Excel file:', error);
}


// 2-Calculating Bonuses:
data.map(employe=>{
    switch(true){
        case employe.AnnualSalary<50000 : {employe.BonusAmount =(employe.AnnualSalary*0.05).toFixed(2)
                                           employe.BonusPercentage='5%'}
            break;
        case employe.AnnualSalary<=100000 : {employe.BonusAmount =(employe.AnnualSalary*0.07).toFixed(2)
                                           employe.BonusPercentage='7%'}
            break;
        case employe.AnnualSalary>100000 : {employe.BonusAmount =(employe.AnnualSalary*0.10).toFixed(2)
                                           employe.BonusPercentage='10%'}
            break;
    }
})
try {
    // Create a new worksheet from the updated JSON data
    const newWorksheet = xlsx.utils.json_to_sheet(data);

    // Create a new workbook
    const newWorkbook = xlsx.utils.book_new();

    // Append the new worksheet to the new workbook, giving it the original sheet name
    xlsx.utils.book_append_sheet(newWorkbook, newWorksheet, sheetName);

    // Write the new workbook to the specified file path, overwriting the old one
    xlsx.writeFile(newWorkbook, filePath);

    console.log('Excel file updated successfully with new Bonus columns!');

} catch (error) {
    console.error('Error writing to Excel file:', error);
}