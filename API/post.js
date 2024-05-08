const PostData=(url,data)=>{
    fetch(url,{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify(data)
    })
}
export default PostData