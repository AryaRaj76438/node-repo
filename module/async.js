const { error } = require('console')
const {readFile, writeFile} = require('fs')

readFile('./Node/alpha.txt', 'utf8',(error, result)=>{
    if(error){
        console.log(error)
        return
    }
    // console.log(result)
    const first = result;

    // read second txt file
    readFile('./Node/content/first.txt', 'utf8', (err, res) =>{
        if(err) {
            console.log(err)
            return
        }
        const second = res
        // console.log(second);
        // const newContent = first+'\n'+'==============='+'=\n'+second
        writeFile('./Node/content/async-content.txt', `New Async Result content of new file: ${first}, ${second}`,(error, result)=>{
            if(error) {
                console.log(error)
                console.log('alop')
                return
            }
            console.log(second, first)
            console.log(result)
        })
    })
})
// console.log(first)
