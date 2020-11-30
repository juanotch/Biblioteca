import React from 'react'
import "./Item.css"
import Button from '@material-ui/core/Button';

//prueba

function item(props) {



   
    const deletelibro= async (id)=>{
        try {
            const deletetodo = await fetch(`http://localhost:5000/libro/${id}`,{
            method:"DELETE",
            
            });
            console.log(deletetodo)
            } catch (err) {
            console.error(err.message)
            }
            
    }


    return (
        <div className="item">
            <div className="imge" ><img src={props.image} width="100%" ></img> </div>
                <div className="title" > {props.title} </div>
                    <div className="rating">
                        <p>
                         
                        </p>
                        calificacion:
                        <select value={props.rating}>
                            <option value="1">1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>

                        </select>
                        <div className="actions">
                            <Button onClick={()=>deletelibro(props.id)} variant="contained" color="secondary">
                             Eliminar
                            </Button>
                           
                        </div>
                    </div>
               
           
            
        </div>
    )
}

export default item
