function nextBigger(number){

    if (!isInteger(number)){
        throw new Error("Number " + number + " is not integer.");
    }
    
    all_variants = generate(String(Math.abs(number)).split("")).map(element => Number(element.join("")));

    bigger_variants = all_variants.filter(element => element > number).sort();

    if(bigger_variants.length === 0){
        return -1;
    }

    return bigger_variants[0];
}

let isInteger = number => (number ^ 0) === number;

let insert_all = (n, number) => {
    
    let result_set =  [];

    for(let i = 0; i < number.length+1; i++){
        let number_copy = number.map(element => element);
        number_copy.splice(i, 0, String(n));
        result_set.push(number_copy);
    }

    return result_set;
}

let generate = (arr) => {
    
    if(arr.length === 2) return insert_all(arr[0], [arr[1]]);

    if(arr.length == 1) return [];

    let current = arr.shift();

    let new_arr = generate(arr);

    let result_set = []

    for(let i = 0; i < new_arr.length; i++){
        result_set = result_set.concat(insert_all(current, new_arr[i]));
    }

    return result_set;
}

try{
    console.log("Errors: \nNumber < 0 => |-1| = 1 => nextBigger(-1) = nextBBigger(1) = ", nextBigger(-1));
    console.log("Non integer error: ", nextBigger("str"));
}
catch(err){
    console.log(err.message);
}
finally{
    console.log("Test: \nnextBigger(12) = ", nextBigger(12));
    console.log("\nnextBigger(513) = ", nextBigger(513));
    console.log("\nnextBigger(2017) = ", nextBigger(2017));
    console.log("\nnextBigger(531) = ", nextBigger(531));
    console.log("\nnextBigger(111) = ", nextBigger(111));
    console.log("\nnextBigger(9) = ", nextBigger(9));
}

