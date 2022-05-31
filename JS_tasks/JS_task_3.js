function digital_root(number){
    
    if(!(isInteger(number) & number > 0)){
        
        throw new Error("Wrong number");
    }

    let array = Array.from(String(number), Number);

    if (array.length == 1){
        return array[0];
    }

    return digital_root(array.reduce(reducer));
}

let isInteger = number => (number ^ 0) === number;

let reducer = (accumulaytor, current) => accumulaytor + current;

try{
    console.log("Test: \n16: ", digital_root(16))
    console.log("942: ", digital_root(942));
    console.log("132189: ", digital_root(132189));
    console.log("493193: ", digital_root(493193));
}
catch(err){
    console.count(err.message);
}

