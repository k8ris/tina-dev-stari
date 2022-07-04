import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Paintings ({images}) {
  const filterBySize =  images.filter((ele) => ele.size);
  const filterDuplicate = filterBySize.filter((ele,ind) => ind === filterBySize.findIndex(elem => elem.size === ele.size));
  const navigate = useNavigate();
  return( 
  <div className='container'>
    <div className='row'>
      <div className='col-12'>
      {filterDuplicate.map(image => (
      <div key={image.id} onClick={() => navigate('/'+image.size)} alt= '' className='container-paintings'>
      <img src={image.location} alt='' className='img-fluid'/>
      <p className='title-paintings'>{image.size}</p>
      </div>
      ))}
      </div>
    </div>
  </div>
  )
}