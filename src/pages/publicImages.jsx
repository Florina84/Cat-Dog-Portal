import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PublicImages = () => {
  const[type, setType]=useState(null);
  const[number, setNumber]=useState(0);
  const[category, setCategory]=useState([]);
  const[images, setImages] = useState([]);

  const fetchImgData =()=>{
    fetch(
			  `https://api.thecatapi.com/v1/images/search?limit=${number}&category_ids=${type}`,
        {
          method: 'GET',
          headers:{
            Accept: 'application/json',
              'x-api-key': '3ad29d55-5ed5-4ab8-8e48-0943bb149790',
              },	
        }
			)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
        setImages(result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

  }

  const fetchCategory = ()=>{
    fetch(
			  `https://api.thecatapi.com/v1/categories`,
        {
          method: 'GET',
          headers:{
            Accept: 'application/json',
              'x-api-key': '3ad29d55-5ed5-4ab8-8e48-0943bb149790',
              },	
        }
			)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
        setCategory(result);
        setType(result[0].id);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
  }
  const displayImages = () =>{
    fetchImgData();
  }

  useEffect(() =>{
    fetchCategory();
  }, [])

  if(type === null){
    return <><h1>Loading</h1></>
  }
  return (
    <>
    <div>
      <div className="container" style={{width:300}}>
        <select onChange={e=>setType(e.target.value)}
                className="form-select mt-3"
                aria-label="Default select example">
                  {category.map((category)=>(
                    <option value={category.id}>{category.name}</option>
                  ))}
          
        </select>
        <select onChange={e=>setNumber(e.target.value)}
                className="form-select mt-3"
                aria-label="Default select example">
          <option value="3">3</option>
          <option value="9">9</option>
          <option value="15">15</option>
        </select>
        <button onClick={displayImages} type="button" className="btn btn-danger mt-3">Show images</button>
        
      </div>
      <div className="row mt-5 px-3">
        {images.map((image)=>(
          
            <img className="mt-3" src={image.url} key={image.id} style={{width:400}}/>
        ))}
      </div>
     
      </div>
    </>
  );
};

export default PublicImages;
