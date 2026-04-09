document.getElementById("search").addEventListener("click", searchClicked);

const characters = {
  po: {
    name: "Po",
    img: "img/po.png",
    quote: "Buddy, I am the Dragon Warrior.",
  },
  "dragon warrior": {
    name: "Po",
    img: "img/po.png",
    quote: "Buddy, I am the Dragon Warrior.",
  },
  tigress: {
    name: "Master Tigress",
    img: "img/tigress.png",
    quote: "That was pretty hardcore!",
  },
  "master tigress": {
    name: "Master Tigress",
    img: "img/tigress.png",
    quote: "That was pretty hardcore!",
  },
  mantis: {
    name: "Master Mantis",
    img: "img/mantis.png",
    quote: "Fear the bug!",
  },
  "master mantis": {
    name: "Master Mantis",
    img: "img/mantis.png",
    quote: "Fear the bug!",
  },
  monkey: {
    name: "Master Monkey",
    img: "img/monkey.png",
    quote: "We should hang out.",
  },
  "master monkey": {
    name: "Master Monkey",
    img: "img/monkey.png",
    quote: "We should hang out.",
  },
  crane: {
    name: "Master Crane",
    img: "img/crane.png",
    quote: "You can chain my body, but you will never chain my warrior spirit!",
  },
  "master crane": {
    name: "Master Crane",
    img: "img/crane.png",
    quote: "You can chain my body, but you will never chain my warrior spirit!",
  },
  viper: {
    name: "Master Viper",
    img: "img/viper.png",
    quote: "I don't need to bite to fight!",
  },
  "master viper": {
    name: "Master Viper",
    img: "img/viper.png",
    quote: "I don't need to bite to fight!",
  },
  shifu: {
    name: "Master Shifu",
    img: "img/shifu.png",
    quote: "There is now a Level Zero.",
  },
  "master shifu": {
    name: "Master Shifu",
    img: "img/shifu.png",
    quote: "There is now a Level Zero.",
  },
  ping: {
    name: "Mr. Ping",
    img: "img/mr-ping.png",
    quote: "We are noodle folk, broth runs through our veins!",
  },
  "mr. ping": {
    name: "Mr. Ping",
    img: "img/mr-ping.png",
    quote: "We are noodle folk, broth runs through our veins!",
  },
};

function updatePage(character, image, quote) {
  document.getElementById("character-name").innerHTML = character;
  document.getElementById("main-img").src = image;
  document.getElementById("quote").innerHTML = quote;
}

function getInformation(charName) {
  for (let i = 0; i <= Object.keys(characters).length; i++) {
    // loops through X amount of times depending on how many values in the table

    if (characters[charName]) {
      // attempts to find the character
      let currentCharacter = characters[charName].name;
      let currentImage = characters[charName].img;
      let currentQuote = characters[charName].quote;

      updatePage(currentCharacter, currentImage, currentQuote);
    } else if (i == Object.keys(characters).length) {
      // when it loops through all and nothing was found
      document.getElementById("character-name").innerHTML = "?????";
      document.getElementById("main-img").src = "img/question-mark.png";
      document.getElementById("quote").innerHTML = "Character Not Found";
    }
  }
}

function searchClicked() {
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();
  // call the function after the button is pressed
  getInformation(name);
}
