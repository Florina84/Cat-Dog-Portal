import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

const MyImages = () => {
  const [allImages, setAllImages] = useState([]);
  
  useEffect(() => {
    getImages();
   }, []);

  const getImages = () =>{
    fetch('https://api.thecatapi.com/v1/images?limit=5', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'x-api-key': '3ad29d55-5ed5-4ab8-8e48-0943bb149790',
      }
    }
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log('Success:', result);
        setAllImages(result)
      }).catch((error) => {
        console.error('Error:', error);
      });
  }
  

  const handleRemove = (imageId) => {
    fetch(`https://api.thecatapi.com/v1/images/${imageId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'x-api-key': '3ad29d55-5ed5-4ab8-8e48-0943bb149790',
      }
    }).then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
          getImages();
         
        }).catch((error) => {
          console.error('Error:', error);
        })
    }
  
  return (
    <>
      <div>
        <div className='container-fluid mt-2' style={{width:500}} >
          <Carousel indicators={false} interval={1000}>

            {allImages.map((img) => (
              <Carousel.Item key={img.id}   >
                <div >
                  <img src={img.url}
                    className="d-block " style={{width:500}}
                    alt={img.original_filename}
                  />
                  <div className="d-grid gap-2">
                    <Button variant="secondary" size="sm" className='d-block ' onClick={()=>handleRemove(img.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </Carousel.Item>

            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default MyImages;
