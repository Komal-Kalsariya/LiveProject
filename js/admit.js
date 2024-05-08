import PostData from "../API/post.js";
import navBar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navBar()




const addProduct=(e)=>{
    e.preventDefault();

    let data={
        title:document.getElementById("title").value,
        img:document.getElementById("img").value,
        price:document.getElementById("price").value,
        category:document.getElementById("category").value,
        brand:document.getElementById("brand").value
    }
    console.log(data)
    PostData("http://localhost:3000/products",data)
}
document.getElementById("data").addEventListener("submit",addProduct)