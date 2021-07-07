
let startDog = document.createElement('div')
const hr = document.querySelector('hr')
startDog.setAttribute('id', 'dogPics')
hr.append(startDog)
const a = document.querySelector("#breed-dropdown > option:nth-child(1)").textContent
const b = document.querySelector("#breed-dropdown > option:nth-child(2)").textContent
const c = document.querySelector("#breed-dropdown > option:nth-child(3)").textContent
const d = document.querySelector("#breed-dropdown > option:nth-child(4)").textContent
// console.log(a, b, c, d)

function singleDog(dogLink){
    //console.log(dogLink)
    let imgCreate = document.createElement('img')
    startDog.appendChild(imgCreate)
    imgCreate.src = dogLink
}

function displayAllDogs () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => data.message.forEach(singleDog))
}
displayAllDogs();

function DisplaySingeBreed(dogBreed) {
    //console.log(dogBreed)
    let newLi = document.createElement('li')
    newLi.textContent = dogBreed
    ul = document.querySelector('#dog-breeds')
    ul.appendChild(newLi)
    newLi.addEventListener('click', () => newLi.style = 'color: red')
    let firstLetter = newLi.textContent.charAt(0)
    console.log(firstLetter)
    if (firstLetter = a) {
        newLi.className = 'a'
    }
    else if (firstLetter = b){
        newLi.className = 'b'
    }
    else if (firstLetter = c) {
        newLi.className = 'c'
    }
    else if (firstLetter = d){
        newLi.className = 'd'
    }

}

function printDogBreeds () {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => Object.keys(data.message).forEach(DisplaySingeBreed))
}
printDogBreeds(); 

// function breedSelector() {
    
// }
// breedSelector();