function filter_list(array) {
    
    if (array.map(element => isIntegerOrString(element))
            .some(element => element === 0)) {

            throw new Error("Wrong elements: " + array.filter(element => isIntegerOrString(element) === 0));
        };

    
    return array.filter(element => isInteger(element));
}

let isIntegerOrString = element => (isInteger(element) & element >= 0) | isString(element)

let isInteger = number => (number ^ 0) === number;

let isString = str => typeof(str) === 'string' | str instanceof String;

let equals = (arr1, arr2) => 
        
        Boolean( arr1.length === arr2.length &
                arr1.every((a, b) => a === arr2[b]))

try {
    console.log("Errors: ");
    console.log(filter_list([1, 2, 'a', 1.25, -1]));
}
catch(err) {
    console.log(err.message);
}
finally {
    console.log("Test: \n[1, 2, 'a', 'b'] ", equals(filter_list([1, 2, 'a', 'b']), [1, 2]) ? '=' : '!=', " [1, 2]");
    console.log("[1, 'a', 'b', 0, 15] ", equals(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15]) ? '=' : '!=', " [1, 0, 15]");
    console.log("[1, 2, 'aasf', '1', '123', 123] ", equals(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]) ? '=' : '!=', 
    " [1, 2, 123]");
}
    
