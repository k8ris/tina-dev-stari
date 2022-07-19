import React from 'react';
import {useState} from 'react';

export default function Paintings ({images}) {
  const filterByType =  images.filter((img) => img.type === 'ceramics');
  const thirdLength = filterByType.length / 3;
  
  const [isShown, setIsShown] = useState(false);
  const [clickImg, setclickImg] = useState({})
  const handlerClick = (e,source)=> {
        // setIsShown(current => !current);
        setIsShown(true);
        setclickImg(source);
        window.scrollTo(0, 0);
    }
    
    return( 
        <div className='container'>
          {isShown && (
            <div className="container" className="container-popup">
              <div className="row">
                  <img src={clickImg.location} alt='' className='img-fluid'/>
              </div>
              <div className="row" className="fluid">
                {clickImg.title}-{clickImg.year}-{clickImg.technique} 
              </div>
            </div>
          )
          }
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
            {filterByType.slice(thirdLength*2,filterByType.length).map(image => (
            <div key={image.id} className='container-paintings'>
            <img src={image.location} alt='' onClick={(event) => handlerClick(event, image)} className='img-fluid'/>
            <div className="row" className="fluid">
              {image.title}-{image.year}-{image.technique} 
            </div>
            </div>
            ))
            }
            </div>
            <div className='col-md-4 col-sm-12'>
            {filterByType.slice(thirdLength, thirdLength*2).map(image => (
            <div key={image.id} className='container-paintings'>
            <img src={image.location} alt='' className='img-fluid' onClick={(event) => handlerClick(event, image)}/>
            <div className="row" className="fluid">
              {image.title}-{image.year}-{image.technique} 
            </div>
            </div>
            
            ))
            }
            </div>
            <div className='col-md-4 col-sm-12'>
            {filterByType.slice(0,thirdLength).map(image => (
            <div key={image.id} className='container-paintings'>
            <img src={image.location} alt='' onClick={(event) => handlerClick(event, image)} className='img-fluid'/>
            <div className="row" className="fluid">
              {image.title}-{image.year}-{image.technique} 
            </div>
            </div>
            ))
            }
            </div>           
          </div>
        </div>
    )
}




