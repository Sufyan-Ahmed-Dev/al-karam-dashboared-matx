import React from 'react'

function AddCameras() {
  return (<>


    <div className="container bg-white" >
      <div className="row p-4 ">
        <div className="card" >
          <div className="card-header bg-white">
            <h3>Add New Cameras</h3>
          </div>

          <div className="card-body">
            <div className='p-0'>
              <p className='bg-danger ps-3 p-2 text-white'> Add Camera</p>
            </div>

            <div className="col-12 ">
              <form>
                <div className="d-lg-flex	">
                  <div className="col mb-2">
                    <input type="text" className="form-control" placeholder="Enter Outlet Name" />
                  </div>
                  <div className="col mb-2 ms-sm-2">
                    <input type="text" className="form-control" placeholder="Enter outlet Location" />
                  </div>
                  <div className="col mb-2 ms-sm-2">
                    {/* <input type="text" className="form-control ms-3" placeholder="Enter Camera Location" aria-label="Camera Location" /> */}

                    <select class="form-select" aria-label="Default select example">
                      <option selected>Open this select one</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col mb-2 ms-sm-2">
                  <input type="text" className="form-control " placeholder="Select Associated Modals" aria-label="Associated Modals" />
                  </div>
                </div>
              </form>
              <button className='btn btn-success mt-2' > Click to Add Camera</button>
            </div>
            {/* <div className="col-12 ">
              <div className="input-group mb-3">
                <label htmlFor=""  >
                  <input type="text" className="form-control me-3" placeholder="Enter Camera ID" aria-label=" Camera ID" />
                </label>
                <input type="text" className="form-control ms-3" placeholder="Enter Camera Location" aria-label="Camera Location" />

                <select class="form-select ms-3" aria-label="Default select example">
                  <option selected>Open this select one</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <input type="text" className="form-control ms-3" placeholder="Select Associated Modals" aria-label="Associated Modals" />
              </div>
              <button className='btn btn-success'> Click to Add New Camera</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>



    <div className="container-lg p-4">


      <div className="card p-3">
        <div className="card-body">
          <div className="table-responsive" >
            <div className="table-wrapper">
              <div className="table-title">


                <div>


                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" style={{ "minWidth": "50px" }}>#</th>
                        <th scope="col" style={{ "minWidth": "150px" }}>First</th>
                        <th scope="col" style={{ "minWidth": "150px" }}>Last</th>
                        <th scope="col" style={{ "minWidth": "150px" }} >Handle</th>
                        <th scope="col" style={{ "minWidth": "150px" }} >Last</th>
                        <th scope="col" style={{ "minWidth": "150px" }}>Handle</th>
                        <th scope="col" style={{ "minWidth": "50px" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                          {/* <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons " style={{ "cursor": "pointer" }}>&#xE254;</i></a> */}
                          <p className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" style={{ "cursor": "pointer" }}>&#xE872;</i></p>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                          {/* <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" style={{ "cursor": "pointer" }}>&#xE254;</i></a> */}
                          <p className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" style={{ "cursor": "pointer" }}>&#xE872;</i></p></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>
                          {/* <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" style={{ "cursor": "pointer" }}>&#xE254;</i></a> */}
                          <p className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" style={{ "cursor": "pointer" }}>&#xE872;</i></p></td>
                      </tr>
                    </tbody>
                  </table>


                  {/* <table className="table table-bordered">
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
  <ul className="pagination ">
    <li className="page-item"><button className="btn btn-outline-primary text-dark" >Previous</button></li>
    <li className="page-item"><button className="btn btn-outline-primary text-dark" >1</button></li>
    <li className="page-item"><button className="btn btn-outline-primary text-dark" >2</button></li>
    <li className="page-item"><button className="btn btn-outline-primary text-dark" >3</button></li>
    <li className="page-item"><button className="btn btn-outline-primary text-dark" >Next</button></li>
  </ul>
</nav>
     
            </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>








  </>

  )
}

export default AddCameras