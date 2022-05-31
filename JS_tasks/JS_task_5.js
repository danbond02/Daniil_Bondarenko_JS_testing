function meeting(s){

    s = String(s);

    s = s.toUpperCase().split(";").map(element => element.split(":"));

    return s.sort(compare).reduce(reducer, "");
}

let compare = (first_friend, second_friend) => {
    
    let names_arr = [first_friend[0], second_friend[0]].sort();
    let second_names_arr = [first_friend[1], second_friend[1]].sort();

    if(first_friend[1] == second_friend[1]){
        
        return (names_arr[0] === second_friend[0]) ? 1 : -1;
    }

    return (second_names_arr[0] === second_friend[1]) ? 1 : -1;

}

let reducer = (accumulator, current) => accumulator + String('(' + current[1] + ', ' + current[0]+')');

console.log('Test: \nResult:');
console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));

