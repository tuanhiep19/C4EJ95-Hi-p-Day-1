// 1.
//  1d 2a 3c 4b
//  setID = setInterval(alert('Hello'), 3000)
//  clearInterval(setID,3000)

// 3.
// 3.1 no
// 3.2 yes

// 4.
tagNameArr = document.getElementsByTagName(`li`);
console.log(tagNameArr[0]);

// 5.
classNameArr = document.getElementsByClassName(`class`);
console.log(classNameArr[1]);
for (i = 0; i < classNameArr.length; i++) {
  console.log(classNameArr[i]);
}

// 8.
myName = 'Hiep'
myWish = 'I want to master coding'
function intro() {
  alert(`Hello, my name is ${myName} and ${myWish}`)
}
intro()

//9.
userName1 = prompt(`Enter your name`)
usserWish1 = prompt(`Enter your wish`)
function userInteraction1(name, wish) {
  alert(`My name is ${name} and ${wish}`)
}
userInteraction1(userName1,usserWish1)


// 10.
userName2 = prompt(`Enter your name`)
usserWish2 = prompt(`Enter your wish`)
function userInteraction1(name, wish) {
  if (typeof wish == 'undefined'){
    wish = `to live`
  }
  alert(`My name is ${name} and I want to ${wish}`)
}
userInteraction1(userName2)

// 11.
