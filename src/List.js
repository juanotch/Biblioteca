import React,{ useState,useEffect } from 'react'
import Item from './Item'

function List() {
  const [libros,setLibros]= useState([]);

const getlibros= async()=>{
  try {
    const response = await fetch("http://localhost:5000/catalogo")
    const jsondata= await response.json();
 
    setLibros(jsondata)
    console.log(jsondata)

    console.log(jsondata)
  } catch (error) {
    console.error(error.message)
  }
}

useEffect(() => {
  getlibros();
}, [])

console.log(libros)




    return (
        <div className="list">
        <h1>

                {libros.map(libro =>(
                    <Item
                    key={libro.id}
                    id={libro.id}
                    title={libro.title}
                    image={libro.image}
                    rating={libro.rating}

                    >

                        
                    </Item>
                ))

                }


        </h1>
        </div>
    )
}

export default List
