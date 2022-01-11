let Sequence = require('./Sequence')
let evenNumbers = new Sequence(2, 10, 2);

for (const num of evenNumbers){
    console.log(num);
}
