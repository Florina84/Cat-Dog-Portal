import React, { useState } from "react";
import Form from 'react-bootstrap/Form';



const Upload = () => {
  const[selectedFile, setSelectedFile] = useState();

  const handleInput = (e) =>{
	setSelectedFile(e.target.files[0]);
  }
 
  const handleSubmission = () => {
		const formData = new FormData();

		formData.append('file', selectedFile);

		fetch(
			'https://api.thecatapi.com/v1/images/upload',
			{
				method: 'POST',
        		headers:{
       			 'x-api-key': '3ad29d55-5ed5-4ab8-8e48-0943bb149790',
      			},
				body: formData,
			}
			)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	
  return (
    <>
    <div className="container mt-5">
     <Form.Group controlId="formFileSm" className="mb-3">
     <Form.Label>Upload new image</Form.Label>
        <Form.Control type="file" size="sm" onChange={handleInput}/> 
      </Form.Group>

      	<div>
			<button onClick={handleSubmission} type="button" className="btn btn-primary mt-3">Submit</button>
		</div>
    </div>

    
    </>
  )
};

export default Upload;
