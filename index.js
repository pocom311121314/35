

/**********product section***************/
import ProductData from "./indexdb.js"

const category = [...new Set(ProductData.map(el => el.category))]
console.log(category)


let filterData = []

document.addEventListener("click", (e) => {


    const bluetoothEl = document.getElementById("bluetooth").checked
    const ChainsEl = document.getElementById("chains").checked
    const KurtasEl = document.getElementById("kurtas").checked
    const AccessoriesEl = document.getElementById("accessories").checked
    const sareesEl = document.getElementById("sarees").checked
    const watchEl = document.getElementById("watch").checked

    console.log(bluetoothEl)
    filterData = ProductData.filter(el => (
        bluetoothEl && el.category == "bluetooth Headset" ||
        ChainsEl && el.category == "Men Chains" ||
        KurtasEl && el.category == "Kurtas" ||
        AccessoriesEl && el.category == "Mobile Accessories" ||
        sareesEl && el.category == "sarees" ||
        watchEl && el.category == "watch"
    ))

    renderProductData()


})

function renderProductData(){
    let filterDataHTML = "";

    if(filterData[0]){
        filterData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="./${el.image}"/>
                </div>
                <h3 class="product_name">${el.title}</h3>
                <p class="product_price">
                    <span>₹</span>
                    <span>${el.price}</span>
                </p>
             </div>
            `
        })
    }
    else{
        ProductData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
            
                <div class="product_image">
                  <a href= ${el.purchase} ><img src="./${el.image}" style="width:200px;height:180px;" ></a>
                </div>
                <h6 class="product_name"><span>₹</span><span>${el.id}</span></h6>
                <h5 class="product_name">${el.title}</h5>
                
                <p class="product_price"><span>₹</span><span>${el.price}</span></p>
                <a href= ${el.purchase} ><img src="./h.png" style="width:200px;height:70px;" ></a>
                
                </div>
            `
        }) 
    }
    
    document.getElementById("product_category_displayId").innerHTML = filterDataHTML
} 
renderProductData()



function ClickProduct(id){
    localStorage.setItem("productId",JSON.stringify(id))
    // window.location("./page/product.html")

    alert("hii")
}













