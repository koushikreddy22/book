import { useState } from "react"
const Addbook=()=>{
    const [title,setTitle]=useState("")
    const [isbn,setIsbn]=useState("")
    const [author,setAuthor]=useState("")
    const [description,setDescription]=useState("")
    const [published_date,setPublished_date]=useState("")
    const [published_by,setPublished_by]=useState("")
    let data=JSON.parse(localStorage.getItem("token"))
    const book={
        title,isbn,author,description,published_date,published_by
    }
    function handleSubmit(){
        const bookdata=fetch("http://localhost:4000/addbook",{
            method:"post",
            headers:{
                "Authorization":"Bearer "+data.message,
                "Content-Type":"application/json;charset=utf-8"
            },
            body:JSON.stringify(book)
        })
        bookdata.then((res)=>res.json()).then((data)=>{
            console.log(data)
        })
    }
    return(
        <div>
            <div><button>Show Book List</button></div>
            <div>
                <h1>
                    ADD BOOK
                </h1>
                <p>create new book</p>
            </div>
            <div>
                <form>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Title"/>
                    <input onChange={(e)=>{setIsbn(e.target.value)}} type="text" placeholder="ISBN"/>
                    <input onChange={(e)=>{setAuthor(e.target.value)}} type="text" placeholder="Author"/>
                    <input onChange={(e)=>{setDescription(e.target.value)}} type="text" placeholder="Describe the book"/>
                    <input onChange={(e)=>{setPublished_date(e.target.value)}} type="text" placeholder="Published Date"/>
                    <input onChange={(e)=>{setPublished_by(e.target.value)}} type="text" placeholder="Publisher of Book"/>
                <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Addbook