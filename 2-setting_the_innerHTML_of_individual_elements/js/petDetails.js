const pet = {
    type: "pig",
    colour: "#ff0000",
    age: 0,
    isFriendly: true,
    name: "Benny",
};

// 1. Select the pet detail dom element by class
const petDetail = document.querySelector(".pet-detail");

// 3. play with friendly value

// pet.isFriendly === false
// 4.  check pet is friendly or not

// 5. use the colour in a variable
// 2. change the innerHTML of the pet details
const myPetColour = pet.colour;
const myPetType = pet.type;
const myPetAge = pet.age > 0 ? "super duper" : "no good";
const myPetIsFriendly = pet.isFriendly;

petDetail.innerHTML = `
<h4 style="color: ${myPetColour}">Type of pet: ${myPetType}</h4>
<p>Age: ${myPetAge}</p>
<p>Friendly:${myPetIsFriendly ? "Yes, super happy and lovely" : "No, angry little pig"}</p>`


let message;

function printMessage (message, message2) {
    console.log("I am the first message: " + message);
    console.log("I am the second message: " + message2);

}
printMessage(" hi there", "I am the second argument");

function multiply (num1, num2) {

    const result = num1 * num2;

   return result;
}

const result = multiply(5,10);
console.log(result);

function checkPassword (stringToCheck) {
    const lengthOfString = stringToCheck.length;

    if(lengthOfString >= 10 ) {
        return true;
    }
    else {
        return false;
    }

}
const passwordIsValid = checkPassword("some string");
console.log(passwordIsValid);