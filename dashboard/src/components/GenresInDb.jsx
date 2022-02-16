import React,{useEffect,useState} from 'react'

const genres = ['Ropa','Coleccionable','Libros','Cómics','De escritorio','Otros'];


function GenresInDb(){
    
    const [data, setData] = useState({countByCategory: []})
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/products")
            .then(response => response.json())
            .then(data2 => setData(data2))
    },[])
    

    return(
        <div className="col card shadow mb-4 p-0">
            <h3 className="card-header m-0 font-weight-bold text-gray-800 ">Categorias</h3>
            <div className="row container pt-4">
            {data.countByCategory.map((element,i)=> {
               return <div className="col-6 card-body ">
                    <div className=" row card-body card bg-dark text-white shadow justify-content-center align-items-center">{element.category} ({element.count})</div>
                </div>})}
            </div>
        </div>
    )
}

export default GenresInDb;