import React,{useEffect,useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm,faAward,faUser } from '@fortawesome/free-solid-svg-icons'



const color = ['primary','success','warning'];
let colorSelected;

function ContentMovies(){
    const [state, setState] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/dashboard")
    .then(response => response.json())
    .then(data =>setState(data));
    },[])
    return(
        <div className="row container my-4">
            {state.map((element,i)=> {
                colorSelected = color[i];
                const className = `col row align-items-center shadow py-2 me-4 border border-4 border-${colorSelected} rounded border-top-0 border-end-0 border-bottom-0`;
                const className2 = `text-${colorSelected} col-9 row align-items-center text-uppercase font-weight-bold`
                return <div  className={className}>
                <p className={className2}>{element.title}
                    <p className="mt-2 text-dark font-weight-bold text-gray-800">{element.data}</p>
                </p>
                <FontAwesomeIcon icon={element.icon}  className="col text-gray-300 h-50"/>
            </div>})}
        </div>
    )
}

export default ContentMovies;

