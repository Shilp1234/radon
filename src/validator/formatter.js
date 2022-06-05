[10:31 pm, 04/06/2022] Sk Pandit: function trim(){
    let str =  "  Hello Sir/Mam...  ";
    let result = str.trim();
    return result
}
function changetoLowerCase(){
    let c ='functionup'
    return c.toUpperCase();
}
function changeToUpperCase(){
    const string = 'This Is First Assiment In Nodejs';
    return string.toLowerCase();
}

module.exports.trim = trim;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;
