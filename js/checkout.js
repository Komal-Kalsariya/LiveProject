import GetData from "../API/get.js";
import navBar from "../component/navbar.js";
document.getElementById("navbar").innerHTML=navBar()

let total=0

const display=(data,id)=>{
    data.map((ele)=>{
        total=ele.price*ele.qnt
      
       
      console.log(total);
       
    })
   t("button")
    // btn1.innerHTML="CHECKOUT"
    // let p=document.createElement("p")
    // p.innerHTML="Subtotal:"+total
    // // btn1.setAttribute("class","btn btn-info")
    // document.getElementById("total-info").append(p)
   
}
const get=async()=>{
    let data=await GetData("http://localhost:3000/cart")
    display(data,"total-info")
}
get()