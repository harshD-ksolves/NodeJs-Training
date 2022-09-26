let words =['one','two','three','four'];


const sequenceWords=(printWord) => {
    setTimeout(() => {
        printWord(words[0]);
        setTimeout(() => {
            printWord(words[1]);
            setTimeout(() => {
                printWord(words[2]);
                setTimeout(() => {
                    printWord(words[3])
                },500)
            }, 1000)
        }, 2000)
    }, 3000)
}

const printWord=(word)=>{
    console.log(word);
}

sequenceWords(printWord);