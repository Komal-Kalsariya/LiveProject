import GetData from "../API/get.js"
import Display from "../component/UiMaker.js"
import navBar from "../component/navbar.js"

document.getElementById("navbar").innerHTML=navBar()


const handlecate=async(val)=>{
    let data= await GetData("http://localhost:3000/products")
    let temp=data.filter((ele)=>ele.category==val)
    Display(temp,"box")
}
document.getElementById("all").addEventListener("click",()=>get())

const handlesort=async(val)=>{

    let temp
    let data= await GetData("http://localhost:3000/products")
    if(val=="Highest Rated"){
        temp=data.sort((a,b)=>b.price - a.price)
        Display(temp,"box")
    }
    else{
        temp=data.sort((a,b)=>a.price - b.price)
        Display(temp,"box")
    }
}
document.getElementById("Child").addEventListener("click",()=>handlecate("Child"))
document.getElementById("Male").addEventListener("click",()=>handlecate("Male"))
document.getElementById("Female").addEventListener("click",()=>handlecate("Female"))
document.querySelector("#htl").addEventListener("change",()=>{
    let val=document.getElementById("htl").value
    handlesort(val)

})
const get=async()=>{
    let data=await GetData("http://localhost:3000/products")
    Display(data,"box")

}
get()