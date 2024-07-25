

//get categories data
let mycat = []
function getCat() {
    let myReueqstCat = new XMLHttpRequest()
        myReueqstCat.open("GET", `https://www.themealdb.com/api/json/v1/1/categories.php`)
        myReueqstCat.send()
        myReueqstCat.addEventListener("load", function () {
        //console.log(myReueqst.response);
        mycat = JSON.parse(myReueqstCat.response).categories
        displayCat(mycat)
    })
}
getCat();



//display categories
function displayCat(myHero) {
    var cartonna = ``
    for (var i = 0; i < myHero.length; i++) {
        cartonna += `
        <div class="col-md-3 py-4 ">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="${myHero[i].strCategoryThumb}" alt="">
                <div class="meal-layer catogry-meal position-absolute d-flex justify-content-center align-items-center text-white p-2">
                    <h2 class="">${myHero[i].strCategory}</h2>     
                </div>
            </div>
        </div>
    `
    }
    document.getElementById("dataRow").innerHTML = cartonna
}














// //AArea
// let areaInput = document.querySelector("#areaInput")
// let areaValue = document.querySelector("#areaValue")
// areaInput.addEventListener("click", function () {
//     areaValue.classList.replace("d-flex", "d-none")
//     console.log("hi");
// })
// let myArea = []
// function getArea() {
//     let myReueqstArea = new XMLHttpRequest()
//     myReueqstArea.open("GET", `https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
//     // myReueqstArea.send()

//     myReueqstArea.addEventListener("load", function () {
//         //console.log(myReueqst.response);

//         myHero = JSON.parse(myReueqstArea.response).meals

//         disPlayRecipesArea()

//     })
// }
// getArea()
// //display
// function disPlayRecipesArea() {
//     var cartonna = ``
//     for (var i = 0; i < myArea.length; i++) {
//         cartonna += `
//          <div class="col-md-3 py-4 ">
        
//          <div>
//              <i class="fa-solid fa-house-laptop fa-4x text-white"></i>

          
//          <h2 class="areaaa py-2">${myArea[i].strArea}</h2>  
           
                      
//          </div>
       
//      </div>
//      `
//     }
//     document.getElementById("myRow").innerHTML = cartonna

// }


// /////////////////////////Ingredients////////////////////////////

// /*IngredientsInput.addEventListener("click",function(){
//     Ingredients.classList.replace("d-none","d-flex")
    
//      console.log("hi");
//  })*/

// //

// let IngredientsInput = document.querySelector("#IngredientsInput")
// let Ingredients = document.querySelector("#Ingredients")

// IngredientsInput.addEventListener("click", function () {
//     Ingredients.classList.replace("d-none", "d-flex")
//     // Ingredients .classList.replace("d-flex","d-none")
//     console.log("hi");
// })
// let myDataa = []
// function getInger() {
//     let myReueqst = new XMLHttpRequest()
//     myReueqst.open("GET", `https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
//     // myReueqst.send()

//     myReueqst.addEventListener("load", function () {
//         //console.log(myReueqst.response);

//         myHero = JSON.parse(myReueqst.response).meals

//         disPlayRecipesData()

//     })
// }
// getInger()
// //display
// function disPlayRecipesData() {
//     var cartonna = ``
//     for (var i = 0; i < myHero.length; i++) {
//         cartonna += `
//          <div class="col-md-3 py-4 ">
        
//          <div id="drumstick"  class=" d-flex justify-content-center flex-column align-items-center text-white p-2">
//              <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>

          
//          <h2 class="py-2">${myDataa[i].strIngredient}</h2>  
//          <p class="text-center">${myDataa[i].strDescription}</p>   
                   
//          </div>
       
//      </div>
//      `
//         //  <p class="text-center">${myHero[i].strDescription.split(" ").slice(0,2).join(' ')}</p>
//     }
//     document.getElementById("myRow").innerHTML = cartonna

// }

// //////////////////////////concatUs//////////////////
// concactUsInput.addEventListener("click", function () {
//     concactUs.classList.replace("d-none", "d-flex")
//     Ingredients.classList.replace("d-flex", "d-none")

//     console.log("hi");
// })
// //htmll value
// let nameInput = document.querySelector("#nameInput")
// let nameAlert = document.querySelector("#nameAlert")
// let passwordInput = document.querySelector("#passwordInput")
// let passwordAlert = document.querySelector("#passwordAlert")
// let emailInput = document.querySelector("#emailInput")
// let emailAlert = document.querySelector("#emailAlert")
// let phoneInput = document.querySelector("#phoneInput")
// let phoneAlert = document.querySelector("#phoneAlert")
// let ageInput = document.querySelector("#ageInput")
// let ageAlert = document.querySelector("#ageAlert")
// let passicon = document.querySelector("#passicon")
// let repasswordInput = document.querySelector("#repasswordInput")
// let repasswordAlert = document.querySelector("#repasswordAlert")
// let submitBtn = document.querySelector("#submitBtn")





// function test() {
//     if (validtionYournam() === true && validtionYourEmil() === true && validtionAge() === true && validtionPhone() === true && validtionPasswordl() === true && validtionRePasswordl() === true && validtionRePasswordl() === true) {
//         submitBtn.setAttribute("disabled", "inabled")
//     } else {
//         submitBtn.setAttribute("inabled", "disabled")
//         return false
//     }

// }

// //validtion Yournam

// function validtionYournam() {

//     var regex = /^[A-Z][a-z]{3,}$/i;
//     if (regex.test(nameInput.value)) {
//         console.log("انت كد");
//         nameAlert.classList.replace("d-flex", "d-none")

//         return true;
//     } else {
//         nameAlert.classList.replace("d-none", "d-flex")

//     }
// }
// nameInput.addEventListener("input", function () {
//     validtionYournam()
// })


// //validtion for youremil
// function validtionYourEmil() {
//     // let regex = /^(A-Z)(a-z)\.(gmail\.com)$i/
//     let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (emailRegex.test(emailInput.value)) {
//         emailAlert.classList.replace("d-flex", "d-none")
//         return true;
//     } else {
//         emailAlert.classList.replace("d-none", "d-flex")

//     }
// }
// emailInput.addEventListener("input", function () {
//     validtionYourEmil()
// })
// //validtion for  age

// function validtionAge() {

//     let ageRegex = /^[0-9]{2}$/
//     if (ageRegex.test(ageInput.valu)) {
//         ageAlert.classList.replace("d-flex", "d-none")
//         return true;
//     } else {
//         ageAlert.classList.replace("d-none", "d-flex")

//     }
// }
// ageInput.addEventListener("input", function () {
//     validtionAge()
// })
// //
// //validtion for  phone
// function validtionPhone() {

//     let passRegex = /^01[0125][0-9]{8}$/
//     if (passRegex.test(phoneInput.valu)) {
//         phoneAlert.classList.replace("d-flex", "d-none")
//         return true;
//     } else {
//         phoneAlert.classList.replace("d-none", "d-flex")

//     }
// }
// phoneInput.addEventListener("input", function () {
//     validtionPhone()
// })
// //passicon

// /*passicon.addEventListener("click", function (e) {
//     if (passicon.classList.contains("fa-eye-slash")) {
//         passicon.classList.replace("fa-eye-slash", "fa-eye")
//         passicon.setAttribute('type', 'text')
//     } else {
//         passicon.classList.replace("fa-eye", "fa-eye-slash")
//         passicon.setAttribute('type', 'password')
//     }
// })
// */
// //validtion Passwordl

// function validtionPasswordl() {
//     //var regex = /^(A-Z)(a-z)(0-9){6,}$/

//     let passRegex = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/
//     if (passRegex.test(passwordInput.valu)) {
//         repasswordAlert.classList.replace("d-flex", "d-none")
//         return true;
//     } else {
//         repasswordAlert.classList.replace("d-none", "d-flex")

//     }
// }

// //validtion rePasswordl
// function validtionRePasswordl() {
//     if (passwordInput.valu = repasswordInput.valu) {
//         repasswordAlert.classList.replace("d-none", "d-flex")
//         return true;
//     } else {
//         repasswordAlert.classList.replace("d-flex", "d-none")
//         return false;
//     }
// }



// /////////////////////InstructionsInput/////////
// let IngredientsInput1 = document.querySelector("#IngredientsInput1")
// let InstructionsInput = document.querySelector("#InstructionsInput")

// /*IngredientsInput1.addEventListener("click",function(){
//    Ingredients.classList.replace("d-none","d-flex")
//   // Ingredients .classList.replace("d-flex","d-none")
//     console.log("hi");
// })*/

// let myData = []
// function getInger(id) {
//     let myReueqst = new XMLHttpRequest()
//     myReueqst.open("GET", `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//     // myReueqst.send()

//     myReueqst.addEventListener("load", function () {
//         //console.log(myReueqst.response);

//         myHero = JSON.parse(myReueqst.response).meals

//         disPlayRecipesData()

//     })
// }
// getInger()
// //display
// function disPlayRecipesData() {
//     var cartonna = ``
//     for (var i = 0; i < myHero.length; i++) {
//         cartonna += `
//          <div class="col-md-4">
//                     <img class="w-100 rounded-3" src="${myData[i].strMealThumb}"
//                         alt="">
//                     <h2>${myData[i].strTags}</h2>
//                 </div>
//          <div class="col-md-8">
//          <h2 class="text">Instructions</h2>
//          <p>${myData[i].strInstructions}</p>
//          <h3><span class="fw-bolder">Area : </span>Turkish</h3>
//          <h3><span class="fw-bolder">Category : </span>Side</h3>
//          <h3>Recipes :</h3>
//          <ul class="list-unstyled d-flex g-3 flex-wrap">
//              <li class="alert alert-info m-2 p-1">${myData[i].strIngredient1}</li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strIngredient2}</li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strIngredient3}</li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strIngredient4}</li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strIngredient5}</li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strIngredient6}/li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strIngredient7}</li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strMeasure1}</li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strMeasure2}</li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strMeasure3}</li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strMeasure4}/li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strMeasure5}r</li>
//              <li class="alert alert-info m-2 p-1">${myData[i].strMeasure6}</li>
//          </ul>
//          <h3>Tags :</h3>
//          <ul class="list-unstyled d-flex g-3 flex-wrap">
//              <li class="alert alert-danger m-2 p-1">Soup</li>
//          </ul>
//          <a target="_blank" href="${myData[i].strSource}"
//              class="btn btn-success">Source</a>
//          <a target="_blank" href="${myData[i].strYoutube}"
//              class="btn btn-danger">Youtube</a>
//      </div>
//      `
//         //  <p class="text-center">${myHero[i].strDescription.split(" ").slice(0,2).join(' ')}</p>
//     }
//     document.getElementById("myRow").innerHTML = cartonna
//     // myRow.innerHTML = cartonna
// }