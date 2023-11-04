import inquirer from 'inquirer';
function counter(paragraph) {
    let freeWhiteSpace = paragraph.replace(/\s/g, "");
    return freeWhiteSpace.length;
}
async function startWordCount(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Write Paragraph Here !",
            name: "Paragraph"
        });
        console.log(counter(res.Paragraph));
    } while (true);
}
startWordCount(counter);
