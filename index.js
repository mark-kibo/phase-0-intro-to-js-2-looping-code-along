// Code your solutions in this file
const writeCards=(array, event)=>{
    let messages=[];
    for(let i=0; i < array.length; i++){
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}


const countDown=(number)=>{
    let i=number;
    while(i >= 0){
        console.log(number);
        i--;
        number = number -1;
    }
}


countDown(10);