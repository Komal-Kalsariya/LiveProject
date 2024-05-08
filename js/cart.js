import DeleteData from "../API/delete.js";
import GetData from "../API/get.js";
import Update from "../API/patch.js";
import navBar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navBar()
const handleqntity=(opr,data)=>{
    if(opr=="+"){
        data.qnt+=1
        Update(data)
    }
    else{
        if(data.qnt>=2){
            data.qnt-=1
            Update(data)
        }
        else{
            DeleteData(data.id)
        }
    }
}

let total=0

const display=(data,id)=>{
    document.getElementById(id).innerHTML=""
    data.map((ele,index)=>{
        total=ele.price*ele.qnt
        let th=document.createElement("td")
        th.innerHTML=index+1

        let img=document.createElement("img")
        img.src=ele.img
        let td1=document.createElement("td")
        td1.append(img)
        let td2=document.createElement("td")
        td2.innerHTML=ele.title
         let td3=document.createElement("td")
        td3.innerHTML=ele.price

        let btn1=document.createElement("button")
        btn1.innerHTML="-"
        btn1.addEventListener("click",()=>handleqntity("-",ele))
        let btn2=document.createElement("button")
        btn2.innerHTML=ele.qnt
        let btn3=document.createElement("button")
        btn3.innerHTML="+"
        btn3.addEventListener("click",()=>handleqntity("+",ele))
        let td4=document.createElement("td")
        td4.append(btn1,btn2,btn3)
        let td5=document.createElement("td")
        td5.innerHTML=`<i class="fa-solid fa-trash"></i>`
      
        td5.addEventListener("click",()=>{
            DeleteData(ele.id)
        })
      
        let tr=document.createElement("tr")
        // d.setAttribute("class","box1")
        img.setAttribute("class","imge2")
        btn1.setAttribute("class","btn")
        btn2.setAttribute("class","btn border")
        btn3.setAttribute("class","btn")
        tr.append(th,td1,td2,td3,td4,td5)
        document.getElementById(id).append(tr)
    })
    // let btn1=document.createElement("button")
    // btn1.innerHTML="CHECKOUT"
    let p=document.createElement("p")
    p.innerHTML="Subtotal:"+total
    // btn1.setAttribute("class","btn btn-info")
    document.getElementById("subtotal").append(p)
   
}
const get=async()=>{
    let data=await GetData("http://localhost:3000/cart")
    display(data,"tbody")
}
get()