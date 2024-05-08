import Update from "../API/patch.js"
import PostData from "../API/post.js"

const handlecart=(data)=>{
fetch(`http://localhost:3000/cart/${data.id}`)
.then((res)=>res.json())
.then((res)=>{
    res.qnt+=1
    Update(res)

})
.catch((error)=>{
    PostData("http://localhost:3000/cart",data)
})
}

const Display=(data,id)=>{
    document.getElementById(id).innerHTML=""
    data.map((ele)=>{
        let title=document.createElement("h4")
        title.innerHTML=ele.title

        let img=document.createElement("img")
        img.src=ele.img

        let price=document.createElement("p")
        price.innerHTML=ele.price

        let category=document.createElement("p")
        category.innerHTML=ele.category
        let brand=document.createElement("p")
        brand.innerHTML=ele.brand

        let btn1=document.createElement("button")
        btn1.innerHTML="ADD TO CART"
        btn1.addEventListener("click",()=>{
            handlecart({...ele,qnt:1})
        })
        let div=document.createElement("div")
        div.setAttribute("class","box1")
        img.setAttribute("class","imge1")
        btn1.setAttribute("class","cart")
        div.append(img,brand,title,price,category,btn1)
        document.getElementById(id).append(div)
    })
}
export default Display
