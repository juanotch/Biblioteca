import React from 'react'
import Search from "./Search.js"
import "./menu.css"

import Popup from "./Popup.js"

function Menu(props) {
 
  

    return (
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {props.title}
                </div>
                  <div className="search">
                    <Search/>
                </div>
                  <div className="actions">
                    <Popup></Popup>
                </div>
            </div>
            
            

        </div>
    )
}

export default Menu
