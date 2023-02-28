import React from "react";
import "./header.css";

function Header({ fetchImages, checkHandler }) {
   return (
      <header className="gallery-header">
         <label className="toggle">
            <input
               className="toggle-checkbox"
               type="checkbox"
               onChange={checkHandler}
            />
            <div className="toggle-switch"></div>
            <span className="toggle-label">Make Photos grayscale </span>
         </label>
         <div>
            <div className="btn">
               <button className="fetch-button" onClick={fetchImages}>
                  <span>Fetch New Photos!</span>
               </button>
            </div>
         </div>
      </header>
   );
}

export default Header;
