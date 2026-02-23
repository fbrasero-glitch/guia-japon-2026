const fs = require('fs');

const content = fs.readFileSync('data.js', 'utf8');
const regexDay = /day:\s*(\d+)/g;
const regexDateTitle = /date:\s*"([^"]+)",\s*title:\s*"([^"]+)"/g;

let days = [];
let matchDay;
while ((matchDay = regexDay.exec(content)) !== null) {
    let matchDateTitle = regexDateTitle.exec(content);
    if (matchDateTitle) {
        days.push(`Day ${matchDay[1]} | Date: ${matchDateTitle[1]} | Title: ${matchDateTitle[2]}`);
    }
}
console.log(days.join('\n'));
