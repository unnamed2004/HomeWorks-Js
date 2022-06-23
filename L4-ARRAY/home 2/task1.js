let compact =[0,1,false,2,"",3]
const remove = compact.filter((elem) => {
    if (elem != 0 ||elem != false || elem != "" || elem != null || elem != undefined || elem != NaN){
    return elem;
    }

})

console.log(remove);