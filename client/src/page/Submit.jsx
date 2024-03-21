import React from 'react'
import Form from './Form';


const Submit = () => {
    const handleSubmit = (formData) => {
        // Process form data (e.g., send it to the server)
        console.log(formData);
    };
  return (
    <div>
        <Form onSubmit={handleSubmit}/>
    </div>
  )
}

export default Submit