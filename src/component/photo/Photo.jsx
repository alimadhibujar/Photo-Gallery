import React from "react";
import "./photo.css";

function Photo({ src, isChecked, author, url }) {
   return (
      <div className="imageHolder">
         <img src={src} alt="" className={`${isChecked ? "gray" : ""}`} />
         <div className="caption">
            <div>{author}</div>
            <div>{url}</div>
         </div>
      </div>
   );
}

export default Photo;
