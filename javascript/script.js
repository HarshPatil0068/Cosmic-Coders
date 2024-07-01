// This is the logic of Changing Theme
let anchors = document.querySelectorAll("li a");
let isDarkTheme = false;

document.getElementById("theme").addEventListener("click", () => {
  if (isDarkTheme) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "white";
    document.body.style.color = "black";
    anchors.forEach(function (aTag) {
      aTag.style.color = "black";
    });
    isDarkTheme = false;
  } else {
    document.body.style.backgroundColor = "#1F2937";
    document.body.style.color = "white";
    anchors.forEach(function (aTag) {
      aTag.style.color = "white";
    });
    isDarkTheme = true;
  }
});



// This is the logic of the Changing Welcome Text
const words = [
    "Hyper Text Markup Language ",
    "Cascading Style Sheets ",
    "JavaScript ",
    "Python ",
    "DSA ",
    "C Programming "
  ];
  let wordElement = document.getElementById("changingText");
  let index = 0;
  let charIndex = 0;
  
  const rotateWords = () => {
    let word = words[index];
    if (charIndex < word.length) {
      wordElement.textContent += word[charIndex];
      charIndex++;
    } else {
      index = (index + 1) % words.length;
      charIndex = 0;
      wordElement.textContent = '';
    }
  };

  setInterval(rotateWords, 200); // Adjust the speed of character appearance





//This will be the logic of buttons
// document.getElementById("theme").addEventListener("click", () => {
document.getElementById("signup-button1").addEventListener("click",  ()=>{
  window.location.href = 'html/signup.html';
  console.log('Button was Clicked!!')
});