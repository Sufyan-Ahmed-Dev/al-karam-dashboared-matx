import React from 'react'

function UserList() {
  return (
    <>

      <div className="container bg-white table-wrapper" >
        <div className="row p-4 ">
          <div className="card" >
            <div className="card-header bg-white">
              <h3>User Managment Add , Edit , Delete </h3>

            </div>
            <div className="card-body">

              <div className="col-10 ">

                <button className='btn btn-success mt-2' >Add New user</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container-lg p-4" >


        <div className="card p-3">
          <div className="card-body  border-bottom">
            <div className="row">

              <div className="col-sm-8 "><h4>User List</h4></div>
              <div className="col-sm-4">
                <input type="text" className="form-control me-3 mb-2" placeholder="Search  User" aria-label=" Outlet Name" />
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
                        <th scope="col" style={{ "minWidth": "50px" }}>#</th>
                        <th scope="col" style={{ "minWidth": "150px" }}>First</th>
                        <th scope="col" style={{ "minWidth": "150px" }}>Last</th>
                        <th scope="col" style={{ "minWidth": "150px" }} >Handle</th>
                        <th scope="col" style={{ "minWidth": "150px" }} >Last</th>
                        <th scope="col" style={{ "minWidth": "150px" }}>Handle</th>
                        <th scope="col" style={{ "minWidth": "150px" }}>Action</th>
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
                          <span className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons " style={{ "cursor": "pointer" }}>&#xE254;</i></span>
                          <span  className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" style={{ "cursor": "pointer" }}>&#xE872;</i></span>
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
                          <span className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" style={{ "cursor": "pointer" }}>&#xE254;</i></span>
                          <span className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" style={{ "cursor": "pointer" }}>&#xE872;</i></span></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>
                          <span className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" style={{ "cursor": "pointer" }}>&#xE254;</i></span>
                          <span className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" style={{ "cursor": "pointer" }}>&#xE872;</i></span></td>
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

export default UserList