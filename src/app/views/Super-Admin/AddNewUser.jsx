import React from 'react'
import SimpleForm from "app/views/material-kit/forms/SimpleForm"


function AddNewUser() {
  return (
    <>
    
    <div className="container mt-5">
       <div className="card">
         <div className="card-header bg-white">
         <h3>Add New User</h3>
         </div>
         <div className="card-body">
         <SimpleForm></SimpleForm>
         </div>
       </div>
     </div>
    </>
  )
}

export default AddNewUser