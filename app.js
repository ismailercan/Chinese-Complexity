


const inputYear = document.getElementById("input");
const checkButton = document.getElementById("checkbutton");
const refreshBttn = document.getElementById("refresh");
const resultElement = document.getElementById("result");

const horoscope = ["Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"]
const elements = ["Metal", "Water", "Wood", "Fire", "Earth"]

let sexagenary = ""
let element = "";

const count = () => {
    let counter2 = 0;
    let counter3 = 1;

    for (let y = 0; y < elements.length; y++) {
        if (inputYear.value % 10 == counter2 || inputYear.value % 10 == counter3) {
            sexagenary = elements[y];
            element = elements[y];
            console.log(sexagenary);
            console.log(element);
        }
        counter2 = counter2 + 2;
        counter3 = counter3 + 2;

        for (let x = 0; x < horoscope.length; x++) {
            if (inputYear.value % 12 == x) {
                sexagenary = horoscope[x];
                console.log(sexagenary);
            }
        }
    }

    resultElement.innerHTML = "Your horoscope is  " + sexagenary + " " + "Your element is  "+ element;
}

checkButton.addEventListener("click", count);

refreshBttn.addEventListener("click", function(){
    //Sayfayi yeniden yükleyin
    location.reload();
});

