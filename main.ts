import inquirer from 'inquirer'

function counter(paragraph:string){
    let freeWhiteSpace = paragraph.replace(/\s/g,"")
    
    return freeWhiteSpace.length

}

async function startWordCount(counter:(text:string)=>number){
   do{
    let res = await inquirer.prompt({
        type : "input",
        message : "Write Paragraph Here !",
        name : "Paragraph"

    })

    console.log(counter(res.Paragraph))
   }
   while(true)
}

startWordCount(counter)





