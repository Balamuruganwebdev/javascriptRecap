// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person ={
    name : "balamurugan",
    age : 23,
    country : "India"
}

let logData = () =>{
    console.log(`${person.name} is ${person.age} years old and live in ${person.country}`)
} 

logData()


let age = 67
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6){
    console.log("free")
} else if(age >= 6 && age <= 17){
    console.log("child discount")
} else if(age >= 18 && age <= 26){
    console.log("student discount")
} else if (age >= 27 && age <= 66){
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

function largeCountriesFunction(){
    console.log("The 5 largest countries in the world:")
    for (let i = 0; i < largeCountries.length; i++){
        console.log("- " + largeCountries[i])
    }
}

largeCountriesFunction()
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomNum1 = Math.floor(Math.random() * fighters.length)
    let randomNum2 = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = `${fighters[randomNum1]} vs ${fighters[randomNum2]}`
})



