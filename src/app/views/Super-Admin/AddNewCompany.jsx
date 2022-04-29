import React from 'react'

function AddNewCompany() {
  return (
<>
<div className="container bg-white table-wrapper" >
      <div className="row p-4 ">
        <div className="card" >
          <div className="card-header bg-white">
            <h3>Add New Company</h3>

          </div>
          <div className="card-body">
            <div className='p-0'>
              <p className='bg-danger ps-3 p-2 text-white'> Add Company</p>
            </div>
            <div className="col-10 ">
              <form>
                <div className="d-lg-flex	">
                  <div className="col mb-2">
                    <input type="text" className="form-control" placeholder="Enter Company Name" />
                  </div>
                  {/* <div className="col mb-2 ms-sm-2">
                    <input type="text" className="form-control" placeholder="Enter outlet Location" />
                  </div> */}
                </div>
              </form>
              <button className='btn btn-success mt-2' > Click to Add Company </button>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="container-lg p-4" >


      <div className="card p-3">
        <div className="card-body ">
          <div className="row">

            <div className="col-sm-8 "><h4>Company List</h4></div>
            <div className="col-sm-4">
              <input type="text" className="form-control me-3 mb-2" placeholder="Search Outlet Name" aria-label=" Outlet Name" />
            </div>
          </div>

          <div className="row d-flex flex-wrap mb-2">
            <div className="col-6">
              <div className="btn-group d-flex" role="group" aria-label="Basic example">
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
        <div className="table-responsive" >
          <div className="table-wrapper">
            <div className="table-title">


              <div>


                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" style={{ "minWidth": "10px" }}>#</th>
                      <th scope="col" style={{ "minWidth": "150px" }}>Company</th>
                      {/* <th scope="col" style={{ "minWidth": "150px" }}>Last</th>
                      <th scope="col" style={{ "minWidth": "150px" }}>Handle</th> */}
                      <th scope="col" style={{ "minWidth": "10px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                     
                      <td>
                        {/* <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a> */}
                        <a className="delete" style={{ "cursor": "pointer" }} title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                   
                      <td>
                        {/* <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a> */}
                        <a className="delete" style={{ "cursor": "pointer" }} title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td >Larry the Bird</td>
                  
                      <td>
                        {/* <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a> */}
                        <a className="delete" style={{ "cursor": "pointer" }} title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a></td>
                    </tr>
                  </tbody>
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

export default AddNewCompany