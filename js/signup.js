import PostData from "../API/post.js";
import navBar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navBar()

const isExist=(data)=>{
    console.log(data)
    fetch(`http://localhost:3000/user?email=${data.email}`)
    .then((res)=>res.json())
    .then((res)=>{
        if(res.length==0){
            PostData("http://localhost:3000/user",data)
            //console.log(data)
        }
        else{
            alert("already exits....")
        }
    })
}

const signupdata=(e)=>{
    e.preventDefault()

    let data={
        user:document.getElementById("user").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    let validemail=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if(!(validemail.test(data.email))){
        alert("Please right formate email address....")
        return
    }
    let validpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(!(validpass.test(data.password))){
        alert("please enter special character and letter,number")
        return
    }
    isExist(data)
   
}
document.getElementById("data").addEventListener("submit",signupdata)