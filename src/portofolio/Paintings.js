import React from 'react';
import {useState} from 'react';

export default function Paintings ({images}) {
  const filterByType =  images.filter((img) => img.type === 'painting');
  const halfLength = filterByType.length / 2;
  
  const [isShown, setIsShown] = useState(false);
  const [clickImgLocation, setclickImgLocation] = useState('')
  const handlerClick = (e,source)=> {
        setIsShown(current => !current);
    //  setIsShown(true);
        setclickImgLocation(source);
  }
  
  return( 
    
    <div className='container'>
        {isShown && (
        <div>
            <img src={clickImgLocation} alt='' className='img-fluid'/>
        </div>
    )}
        <div className='row'>
            <div className='col-6'>
            {filterByType.slice(0,halfLength).map(image => (
            <div key={image.id} className='container-paintings'>
            <img src={image.location} alt='' onClick={(event) => handlerClick(event, image.location)} className='img-fluid'/>
            </div>
            ))
            }
            </div>
            <div className='col-6'>
            {filterByType.slice(halfLength, filterByType.length).map(image => (
            <div key={image.id} className='container-paintings'>
            <img src={image.location} alt='' className='img-fluid' onClick={(event) => handlerClick(event, image.location)}/>
            </div>
            ))
            }
            </div>
        </div>
    </div>
  )
}