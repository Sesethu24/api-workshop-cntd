var brandList = [];

document.addEventListener("DOMContentLoaded", function () {

	

	const brandsElem = document.querySelector(".brands");
	const textBoxElem = document.querySelector(".brandName");
	const addBtn = document.querySelector(".addBrand");
	const brandListTemplateElem = document.querySelector(".brandListTemplate");
	const brandListTemplate = Handlebars.compile(brandListTemplateElem.innerHTML);


	function addBrand() {

        axios.post("/api/brand_add",{
			
			brand_name: textBoxElem.value

		}).then(function(){
			var brand = textBoxElem.value
			if (!brandList.includes(brand)) {
				brandList.push(brand);
			}
			brandsElem.innerHTML = brandListTemplate({
				brands: brandList
			})
			textBoxElem.value = "";
		})
   }
addBtn.addEventListener('click', addBrand)

	axios.get("/api/brand_list")
	.then(function(result){
		const response = result.data;
		brandList = response
		brandsElem.innerHTML = brandListTemplate({
			brands: brandList
		})
		textBoxElem.value = "";
	})
});