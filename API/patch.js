const Update=(data)=>{
    fetch(`http://localhost:3000/cart/${data.id}`,{
     method:"PATCH",
     headers:{"Content-Type":"Application/json"},
     body:JSON.stringify(data)   
    })
}
export default Update