import React from 'react'

function OutletManagerList() {
  return (
   

  <>
   

   
{/* <div className="container">

</div> */}

<div class="container-lg p-4">


<div className="card p-3">
  <div className="card-header bg-white">
  <span className='h3'>OutletManagerList</span>
  <div className="text-end">
  <button className= 'text-end btn btn-success' > Add User</button>

  </div>
  </div>
  <div className="card-body">
    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-8 mb-4 "><h2>Outlet Manager List </h2></div>
            {/* <div class="col-sm-4">
              <input type="text" class="form-control me-3 mb-2" placeholder="Search Outlet Name" aria-label=" Outlet Name" />
            </div> */}
          </div>
        </div>
        <div className="table-responsive" >  
            <div className="table-wrapper">
              <div className="table-title">

              
              <div>


                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" style={{"minWidth" : "50px"}}>#</th>
                      <th scope="col"  style={{"minWidth" : "150px"}}>First</th>
                      <th scope="col"  style={{"minWidth" : "150px"}}>Last</th>
                      <th scope="col"style={{"minWidth" : "150px"}} >Handle</th>
                      <th scope="col"style={{"minWidth" : "150px"}} >Last</th>
                      <th scope="col" style={{"minWidth" : "150px"}}>Handle</th>
                      <th scope="col" style={{"minWidth" : "150px"}}>Action</th>
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
                        <span className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons " style={{"cursor" : "pointer"}}>&#xE254;</i></span>
                        <span className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" style={{"cursor" : "pointer"}}>&#xE872;</i></span>
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
                         <span className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" style={{"cursor" : "pointer"}}>&#xE254;</i></span>
                        <span className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" style={{"cursor" : "pointer"}}>&#xE872;</i></span></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                      <td>
                          <span className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" style={{"cursor" : "pointer"}}>&#xE254;</i></span>
                        <span className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons" style={{"cursor" : "pointer"}}>&#xE872;</i></span></td>
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
</div>

</div>

    


  </>
  )
}

export default OutletManagerList