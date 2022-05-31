function number_of_pairs(array, target){

    array.forEach(element => {
        if (!isInteger(element) | element<0){
            throw new Error("Wrong number: " + element);
        }
    });
    
    let new_array = array.filter(element => element <= target);

    let result_array = []

    for(let i = 0; i < new_array.length; i++){

        
        for(let j = i+1; j < new_array.length; j++){
            
            if(new_array[i] + new_array[j] === target){
                result_array.push([new_array[i], new_array[j]]);
            }
        }
    }

    return result_array;
}

let isInteger = number => (number ^ 0) === number;

try{
    console.log("Errors: ");
    console.log("Test: \nArray: [1, 3, 6, -1] Target: 5 Result: ", number_of_pairs([1, 3, 6, -1], 5));
}
catch(err){
    console.log(err.message);
}
finally{
    console.log("Test: \nArray: [1, 3, 6, 2, 2, 0, 4, 5] Target: 5 Result: ", number_of_pairs([1, 3, 6, 2, 2, 0, 4, 5], 5));
}