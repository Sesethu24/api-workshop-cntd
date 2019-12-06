 var filteredCars = [];

 document.addEventListener("DOMContentLoaded", function () {

     const colorElem = document.querySelector(".selectColor");
     const brandElem = document.querySelector(".selectBrand");
     const filterButton = document.querySelector(".filterBtn");
     const displayElem = document.querySelector(".display")
     const carFilterTemplateElem = document.querySelector(".carFilterTemplate");
     const carFilterTemplate = Handlebars.compile(carFilterTemplateElem.innerHTML);

     filterButton.addEventListener('click', function () {
          var make = brandElem.value
          var  color = colorElem.value


         axios.get("http://api-tutor.herokuapp.com/v1/cars/make/" + make + "/color/" + color)
         .then(function (result) {
             console.log(result.data, "wertyuioerty")
           let data = result.data;
                filteredCars.push(data)
            
            console.log(filteredCars)
             displayElem.innerHTML = carFilterTemplate({
                 filteredCars : data
             })
         }) 
     })

 })