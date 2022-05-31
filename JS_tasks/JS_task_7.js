function number_to_IPadress(number){

    number = Number(number); 
    if (number < 0){
        throw new Error(number + " is < 0.")
    }
    
    let binary_number = decimal_to_binary(number);

    if (binary_number.length <= 32){
        binary_number = Array(32-binary_number.length).fill(0).concat(binary_number);
    }
    else {
        throw new Error(number + " is out of 32-bit.");
    }

    return array_to_subarrays(binary_number, 4)
            .map(element => binary_to_decimal(element))
            .join(".");
}

let decimal_to_binary = number => {
    
    let binary_number = [];

    if (number === 0) return [0];

    while(Math.floor(number / 2) != 0){
        binary_number.push(number % 2);
        number = Math.floor(number / 2);
    }

    binary_number.push(1);

    return binary_number.reverse();
}

let array_to_subarrays = (arr, number_of_subarr) =>{

    let result_arr = [];
    let subarr_size = arr.length / number_of_subarr;

    if (!(subarr_size ^ 0 === subarr_size)) throw new Error("Subarray length is not integer"); 

    for (let i = 0; i < arr.length; i+= subarr_size) {
        result_arr.push(arr.slice(i, i + subarr_size))
    }

    return result_arr;
}

let binary_to_decimal = bin_num => {

    let result = 0

    for(let i = 0; i < bin_num.length; i++){
        result += bin_num[i] * 2 ** (bin_num.length - i - 1);
    }

    return result;
}

try {
    console.log("Errors: ");
    
    try{
        console.log(number_to_IPadress(21111133333));
    }
    catch(err){
        console.log(err.message);
    }
        
    console.log(number_to_IPadress(-1));
    
}
catch(err) {
    console.log(err.message);
}
finally {

    console.log("Test: \n2149583361 ==> ", number_to_IPadress(2149583361));
    console.log("32 ==> ", number_to_IPadress(32));
    console.log("0 ==> ", number_to_IPadress(0));
}