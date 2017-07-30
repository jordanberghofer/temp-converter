console.log("temp-converter.js")

let subBut = document.getElementById("subBut");
let inputNum = Number(document.getElementById("sayIn").value);

function convertC2F() {
    // let convertC2F = {};
    let finalFconver = inputNum * 1.8 + 32;

    if (finalFconver <= 32) {
        console.log("blue");

    } else if (finalFconver >= 90) {
        console.log("red");
        
    }else{
        console.log("green");
    }
}

function convertF2C() {
    finalCconver = (inputNum - 32) * .5556;
    // let convertF2C = {};
    if (finalCconver <= 0) {
        console.log("blue");
        
    } else if (finalCconver >= 32) {
        console.log("red");

    }else{
        console.log("green");
    }
}





subBut.addEventListener("click", function() {
    
    let whichTemp;

    var radio = document.getElementsByName("temperature");

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked){
            whichTemp = radio[i].value;
            break;            
        }      
    }
    console.log("whichTemp", whichTemp);

    console.log("taco"); 

    debugger;

    if (whichTemp === "celsius") {
        convertF2C();

    } else if (whichTemp === "fahrenheit") {
        convertC2F();

            console.log("taco3"); 
        }
        
    console.log("taco4");   
    
});



// // This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//   console.log("event", clickEvent);
// }

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);

// let inputArea = document.getElementById("sayIn");

// let subBut = document.getElementById("submit");

// // let clearBut = need to make up code for clearing the input here just in case

// subBut.addEventListener("click", function () {
//     tempConverter(inputArea);
//     console.log(tempConverted);
// });

// // Red = If the temperature is greater than 90F/32C.
// // Blue =  If the temperature is less than 32F/0C.
// // Green = For any other temperature.

// //Fahrenheit***********
// function toFahrenheit () {
// //F = (1.8 * inputArea)+ 32
// }


// function colorF(/*need parameters*/) {
    
//     if (tempConverted < 32) {
//         //color blue;
//     } else if (tempConverted > 90) {
//         //color red;
//     }else{
//         //color green;
//     }       
// }

// //Celcius***********
// function toCelsius () {
// //C = (inputArea - 32)* .5556
// }

// function colorC(/*need parameters*/) {
    
//     if (tempConverted < 0) {
//         //color blue;
//     } else if (tempConverted > 32) {
//         //color red;
//     }else{
//         //color green;
//     }       
// }