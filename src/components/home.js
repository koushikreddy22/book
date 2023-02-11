import { useEffect, useState } from "react"

const Home=()=>{
    let data=JSON.parse(localStorage.getItem("token"))
    const [books,setBooks]=useState([])
    function aboutbook(item){
        localStorage.setItem("book",JSON.stringify(item))

    }
    
    useEffect(()=>{
        const book=fetch('http://localhost:4000/getbook',{
            method:"get",
            headers:{
                "Authorization":"Bearer "+data.message,
                "Content-Type":"application/json;charset=utf-8"
            }
        })
       book.then(res=>res.json()).then(data=>{setBooks(data.data)})
    },[])
    return(
       
        <div >
            <h1>Book List</h1>
            <div><button>Add Books</button></div>
            <div>{books.map((item=>
            <div onClick={()=>{aboutbook(item)}}>
                <div>
                    <img src="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg"/>
                </div>
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p>{item.description}</p>

            </div>))}</div>
        </div>
    )
}
export default Home