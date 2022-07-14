import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Paintings ({images}) {
  const filterByType =  images.filter((img) => img.type === 'painting');
  const halfLength = filterByType.length / 2;
  console.log(halfLength);
  return( 
  <div className='container'>
    <div className='row'>
    <div className='col-6'>
      {filterByType.slice(0,halfLength).map(image => (
        <div key={image.id} className='container-paintings'>
        <img src={image.location} alt='' className='img-fluid'/>
        </div>
      ))}
    </div>
    <div className='col-6'>
      {filterByType.slice(halfLength, filterByType.length).map(image => (
        <div key={image.id} className='container-paintings'>
        <img src={image.location} alt='' className='img-fluid'/>
        </div>
      ))}
    </div>
    </div>
  </div>
  )
}