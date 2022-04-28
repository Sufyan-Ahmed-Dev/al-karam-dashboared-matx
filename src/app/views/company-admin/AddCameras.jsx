import React from 'react'

function AddCameras() {
  return (<>
  
  
<div className="container bg-white" >
  <div className="row p-4 ">
  <div className="card" >
  <div className="card-header">
  <h3>Add New Cameras</h3>
  </div>

  <div className="card-body">
  <div className='p-0'>
  <p className='bg-danger ps-3 p-2 text-white'> Add Camera</p>
</div>
    <div className="col-12 ">
<div className="input-group mb-3">
  <label htmlFor=""  >
  <input type="text" className="form-control me-3" placeholder="Enter Camera ID" aria-label=" Camera ID"/>
  </label>
  <input type="text" className="form-control ms-3" placeholder="Enter Camera Location" aria-label="Camera Location"/>

  <select class="form-select ms-3" aria-label="Default select example">
  <option selected>Open this select one</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<input type="text" className="form-control ms-3" placeholder="Select Associated Modals" aria-label="Associated Modals"/>
</div>
<button className='btn btn-success'> Click to Add New Camera</button>
    </div>
  </div>
</div>
</div>
  </div>



  <div className="container-lg p-4">


    <div className="card p-3">
      <div className="card-body">
      <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row border-bottom mb-1">
                    <div className="col-sm-8 "><h2>Camera List</h2></div>
                    <div className="col-sm-4">
                    <input type="text" className="form-control me-3 mb-2" placeholder="Search Camera ID" aria-label=" Outlet Name"/>
                    </div>
                </div>

                <div className="row mb-2">
                  <div className="col-6">
                  <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-dark">Copy</button>
  <button type="button" className="btn btn-dark">CSV</button>
  <button type="button" className="btn btn-dark">Excel</button>
  <button type="button" className="btn btn-dark">PDF</button>
  <button type="button" className="btn btn-dark">Print</button>
  <button type="button" className="btn btn-dark">Colums Visibility</button>
</div>
                  </div>
       
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th >S.no</th>
                        <th >Outlet Name </th>
                        <th >Outlet Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Administration</td>
                        <td>(171) 555-2222</td>
                        <td>

                        <button className='delete btn btn-danger' title="Delete" href='/' data-toggle="tooltip">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Customer Service</td>
                        <td>(313) 555-5735</td>
                        <td>
                           
                        <button className='delete btn btn-danger' title="Delete" href='/' data-toggle="tooltip">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Human Resources</td>
                        <td>(503) 555-9931</td>
                        <td>
                           
                            <button className='delete btn btn-danger' title="Delete" href='/' data-toggle="tooltip">Delete</button>
                        </td>
                    </tr>      
                </tbody>
   
      <nav aria-label="Page navigation example" >
  <ul className="pagination ">
    <li className="page-item"><button className="btn btn-outline-primary text-dark">Previous</button></li>
    <li className="page-item"><button className="btn btn-outline-primary text-dark">1</button></li>
    <li className="page-item"><button className="btn btn-outline-primary text-dark">2</button></li>
    <li className="page-item"><button className="btn btn-outline-primary text-dark">3</button></li>
    <li className="page-item"><button className="btn btn-outline-primary text-dark">Next</button></li>
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

export default AddCameras