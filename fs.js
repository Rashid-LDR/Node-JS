const fs=require('fs');

// fs.mkdirSync('FS');
// fs.writeFileSync('FS/Bio.txt',"");

// fs.writeFileSync('FS/Bio.csv',"");

fs.appendFileSync('FS/Bio.csv',"\nName:Nomi \t Gender:Male \t Edu:Inter");