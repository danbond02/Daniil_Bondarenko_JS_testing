function first_non_repeateble_letter(str){

    let new_str = String(str);

    for(var i = 0; i < new_str.length; i++) {
        
        if(number_of_entries(new_str.toLowerCase(), new_str.toLowerCase().charAt(i)) === 1){
            return new_str.charAt(i);
        }
    }

    return "";
    
}

let number_of_entries  = (str, ch) => String(str).split(ch).length - 1;


console.log("Test: \nstress: ", first_non_repeateble_letter("stress"));
console.log("sTreSS: ", first_non_repeateble_letter("sTreSS"));