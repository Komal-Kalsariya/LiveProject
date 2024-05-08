import navBar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navBar()




const ValidEmail=(data)=>{
    fetch(`http://localhost:3000/user?email=${data.email}&password=${data.password}`)
    .then((res)=>res.json())
    .then((res)=>{
        if(res.length==1){
            alert("login succesfuly.......")
            window.location.href="/LiveProject/index.html"
        }
        else{
            alert("login failed.........")
        }
    })
}


const loginData=(e)=>{
    e.preventDefault()

    let data={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    console.log(data)
    ValidEmail(data)

}
document.getElementById("data").addEventListener("submit",loginData)
