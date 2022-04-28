import React from 'react'

function AddAIModal() {
  return (<>
  
  <h1>Add New Outlet</h1>

  
<div className="container bg-white table-wrapper" >
  <div className="row p-4 ">
  <div class="card" >
  <div class="card-body">
  <div className='p-0'>
  <p className='bg-danger ps-3 p-2 text-white'> Add AI Model</p>
</div>
    <div className="col-10 ">
<div class="input-group mb-3">
  
  <input type="text" class="form-control me-3" placeholder="Enter Model Name" aria-label=" Outlet Name"/>
 
  <input type="text" class="form-control ms-3" placeholder="Associated Company" aria-label="Outlet Location"/>
</div>
<button className='btn btn-success' > Click to Add Outlet Location</button>
    </div>
  </div>
</div>
</div>
  </div>



  <div class="container-lg p-4 table-wrapper" >


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
            <div>
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

                        <button className='delete btn btn-danger' title="Delete" href='/' data-toggle="tooltip">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Peter Parker</td>
                        <td>Customer Service</td>
                        <td>(313) 555-5735</td>
                        <td>
                           
                        <button className='delete btn btn-danger' title="Delete" href='/' data-toggle="tooltip">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Fran Wilson</td>
                        <td>Human Resources</td>
                        <td>(503) 555-9931</td>
                        <td>
                           
                            <button className='delete btn btn-danger' title="Delete" href='#' data-toggle="tooltip">Delete</button>
                        </td>
                    </tr>      
                </tbody>
   
      <nav aria-label="Page navigation example" >
  <ul class="pagination ">
    <li class="page-item"><button class="page-a text-dark" >Previous</button></li>
    <li class="page-item"><button class="page-a text-dark" >1</button></li>
    <li class="page-item"><button class="page-a text-dark" >2</button></li>
    <li class="page-item"><button class="page-a text-dark" >3</button></li>
    <li class="page-item"><button class="page-a text-dark" >Next</button></li>
  </ul>
</nav>
     
            </table>
            </div>
        </div>
    </div>
      </div>
    </div>
   
</div>     


  </>
   


  )
}

export default AddAIModal