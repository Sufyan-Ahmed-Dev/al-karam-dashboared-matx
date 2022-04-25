import React from 'react'
import SimpleForm from "app/views/material-kit/forms/SimpleForm"


function AddOutlet() {

  return (<>
      <h1>Add New Outlet</h1>
{/* < SimpleForm></SimpleForm> */}
    

<div className="container bg-white">
  <div className="row p-4 ">
  <div class="card" >
  <div class="card-body">
  <div className='p-0'>
  <p className='bg-danger ps-3 p-2 text-white'> Add Outlet</p>
</div>
    <div className="col-10 ">
<div class="input-group mb-3">
  
  <input type="text" class="form-control me-3" placeholder="Enter Outlet Name" aria-label=" Outlet Name"/>
 
  <input type="text" class="form-control ms-3" placeholder="Enter Outlet Location" aria-label="Outlet Location"/>
</div>
<a className='btn btn-success' > Click to Add Outlet Location</a>
    </div>
  </div>
</div>
</div>
  </div>



  <div class="container-lg p-4">


    <div className="card p-3">
      <div className="card-body">
      <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8 "><h2>Ai Model List</h2></div>
                    <div class="col-sm-4">
                    <input type="text" class="form-control me-3 mb-2" placeholder="Search Outlet Name" aria-label=" Outlet Name"/>
                    </div>
                </div>

                <div className="row mb-2">
                  <div className="col-6">
                  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-dark">Copy</button>
  <button type="button" class="btn btn-dark">CSV</button>
  <button type="button" class="btn btn-dark">Excel</button>
  <button type="button" class="btn btn-dark">PDF</button>
  <button type="button" class="btn btn-dark">Print</button>
  <button type="button" class="btn btn-dark">Colums Visibility</button>
</div>
                  </div>
       
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Outlet Name </th>
                        <th>Outlet Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Administration</td>
                        <td>(171) 555-2222</td>
                        <td>

                        <a className='delete btn btn-danger' title="Delete" href='#' data-toggle="tooltip">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Peter Parker</td>
                        <td>Customer Service</td>
                        <td>(313) 555-5735</td>
                        <td>
                           
                        <a className='delete btn btn-danger' title="Delete" href='#' data-toggle="tooltip">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Fran Wilson</td>
                        <td>Human Resources</td>
                        <td>(503) 555-9931</td>
                        <td>
                           
                            <a className='delete btn btn-danger' title="Delete" href='#' data-toggle="tooltip">Delete</a>
                        </td>
                    </tr>      
                </tbody>
   
      <nav aria-label="Page navigation example" >
  <ul class="pagination ">
    <li class="page-item"><a class="page-link text-dark" >Previous</a></li>
    <li class="page-item"><a class="page-link text-dark" >1</a></li>
    <li class="page-item"><a class="page-link text-dark" >2</a></li>
    <li class="page-item"><a class="page-link text-dark" >3</a></li>
    <li class="page-item"><a class="page-link text-dark" >Next</a></li>
  </ul>
</nav>
     
            </table>
        </div>
    </div>
      </div>
    </div>
   
</div>     






  
  
  </>


    
  )
}

export default AddOutlet