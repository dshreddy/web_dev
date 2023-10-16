console.log(document);

let html = document.firstElementChild;

let head = document.firstElementChild.firstElementChild;

let body = document.firstElementChild.lastElementChild;

let heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "World"; //Chaging inner HTML

document.querySelector("input").click(); // returns a single element, incqase many matches are found, returns the first one

let li = document.getElementsByTagName("li") //returns a list of all elements with tag "li"

let btn = document.getElementsByClassName("btn"); //returns list

//getter Attribute & set Attribute
console.log(document.querySelector("a").getAttribute("href"));
document.querySelector("a").setAttribute("href","https://www.youtube.com/");
console.log(document.querySelector("a").getAttribute("href"));