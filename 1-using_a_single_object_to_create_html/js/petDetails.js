const pet = {
    type: "pig",
    colour: "#ff0000",
    age: 0,
    isFriendly: true,
    name: "Benny",
};

// 1.select header h4
const header4 = document.querySelector("h4");
// 2.select the .age class
const  age = document.querySelector(".age");
// 3.select .friendly class
const friendlyWrapper = document.querySelector(".friendly");

// 4.change the innerHTML of each of them with data from the object
header4.innerHTML = pet.type;
age.innerHTML = pet.age;

//her er det to eks på hvordan bruke true or false i denne settingen.
/*let friendly;
if (pet.isFriendly) {
    friendly = "This pet is friendly";
}else{
    friendly ="This pet is not friendly";
}*/
friendlyWrapper.innerHTML = pet.isFriendly ? "This pet is friendly" : "This pet is not friendly";
// some condition ? true : false; dette eks viser hva som logges om tilfelle er true or false.