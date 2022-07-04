import React from 'react';

export default function WorkOnPaper
 ({images}) {
    return( 
    <div className="container">
      <div className="row">
       {images.map(image => ( image.type === "wop" ?
        (<div key={image.id} className="col-4" >
        <img src={image.location} alt='' className='img-fluid'/>
        <p className='title'>{image.title} {image.year} {image.technique}</p>
        </div>) : false
        ))}
      </div>
    </div>
    )
}