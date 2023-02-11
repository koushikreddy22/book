
const Book=()=>{
    let data=JSON.parse(localStorage.getItem("book"))
    function del(){
        const rem=fetch("http://localhost:4000/delete",{
            method:"delete",
            headers:{
                "Authorization":"Bearer "+data.message,
                "Content-Type":"application/json;charset=utf-8"
            },
            body:JSON.stringify(data._id)
        })
        rem.then(res=>res.json()).then((data)=>console.log(data))
    }
    return(
        <div>
            <div><button>Show book list</button></div>
            <div>
                <h1>Book Record</h1>
                <div>View book info</div>
            </div>
            <table>
                <tr>
                    <td>Title</td>
                    <td>{data.title}</td>
                </tr>
                <tr>
                    <td>ISBN</td>
                    <td>{data.isbn}</td>
                </tr>
                <tr>
                    <td>Author</td>
                    <td>{data.author}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>{data.description}</td>
                </tr>
                <tr>
                    <td>Published Date</td>
                    <td>{data.published_date}</td>
                </tr>
                <tr>
                    <td>Publisher of the Book</td>
                    <td>{data.published_by}</td>
                </tr>
            </table>
            <div>
                <button onClick={del}>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    )
}
export default Book