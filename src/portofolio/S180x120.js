import React from 'react';
import ModalImage from "react-modal-image";

export default function S180x120 ({images}) {
    return( 
    <div className="container">
      <div className="row">
       {images.map(image => ( image.size === "180x120" ?
        (<div key={image.id} className="col-6" >
        {/* <img className='img-fluid' src={image.location}  alt='' /> */}
         <ModalImage
           small={image.location}
           large={image.locationFullSize}
           alt={image.title}
         />
        <p className='title'>{image.title} {image.year} {image.technique}</p>
        </div>) : false
        ))}
      </div>
    </div>
    )
}


