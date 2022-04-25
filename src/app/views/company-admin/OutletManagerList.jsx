import React from 'react'

function OutletManagerList() {
  return (
   

  <>
   <h1>OutletManagerList</h1>

   
<div className="container">
<a className='btn btn-success' href="/"> Add User</a>
</div>

<div class="container-lg p-4">


<div className="card p-3">
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
        <table class="table table-bordered ">

        <thead className='border'>
            <tr>
                <th>Name </th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Outlet Assigned</th>
                <th>Role</th>
                <th>Actions</th>
                
            </tr>
        </thead>
         
          <tbody className=' border border p-4'>
          <tr>
                        <td>John Doe</td>
                        <td>Administration</td>
                        <td>(171) 555-2222</td>
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
                        <td>Human Resources</td>
                        <td>(503) 555-9931</td>
                        <td>
                           
                            <a className='delete btn btn-danger' title="Delete" href='#' data-toggle="tooltip">Delete</a>
                        </td>
                    </tr>     
        

          </tbody>

        

        </table>
      </div>
    </div>
  </div>
</div>

</div>

    


  </>
  )
}

export default OutletManagerList