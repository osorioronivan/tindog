import dogs from "./dog-data.js";

const imageContainer = document.getElementById("image-container")
const btnNope = document.getElementById("btn-nope")
const btnLiked = document.getElementById("btn-like")
function templateDog(data){
    Object.assign(this, data)
    this.getDogHTML = () =>{
        const {name, avatar, age, bio} = this
        let statusHTML = getStatusHTML()
        imageContainer.innerHTML = `<div class="status">
                   ${statusHTML}
                </div>
                <div class="dog-image">
                    <img src="${avatar}" alt="" srcset="" class="img-dog" />
                </div>
                <div class="dog-details">
                    <h2 class="dog-name">${name}<span class="dog-age">, ${age}</span></h2>
                    <h5 class="dog-bio">${bio}</h5>
                </div>`
    }
}
function getNextDog(){
    const newDog = dogArray.shift()
    return newDog ? new templateDog(newDog) : {}
}
let dogArray = dogs.map((data)=>{
    return data
})
function getStatusHTML(hasBeenSwiped, hasBeenLiked){
   return dog.hasBeenSwiped === true ?  
   `<img src="Assets/nope-image.png"  alt="" srcset="" height="100rem">` : dog.hasBeenLiked === true ? 
   `<img src="Assets/like-image.png"  alt="" srcset="" height="100rem">` : ""
}

btnNope.addEventListener("click",()=>{
    btnNope.classList.add("swiped")
    dog.hasBeenSwiped = true
    dog.hasBeenLiked = false
    dog.getDogHTML()
    setTimeout(function(){
      
        if (dogArray.length > 0){
            dog = getNextDog()
            dog.getDogHTML()
            btnLiked.className = ""
            btnNope.className = ""
        }
    }, 1500)
})
btnLiked.addEventListener("click",()=>{
    btnLiked.classList.add("liked")
    dog.hasBeenSwiped = false
    dog.hasBeenLiked = true
    dog.getDogHTML()
    setTimeout(function(){
        if (dogArray.length > 0){
            dog = getNextDog()
            dog.getDogHTML()
            btnLiked.className = ""
            btnNope.className = ""
        }
    }, 1500)

    // renderNewDog()
})
let dog = getNextDog()
dog.getDogHTML()
//<img src="Assets/nope-image.png" alt="" srcset="" height="100rem">