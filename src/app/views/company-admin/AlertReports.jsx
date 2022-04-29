import React from 'react'

function AlertReports() {
  return (


    <>


<div className="container bg-white table-wrapper" >
      <div className="row p-4 ">
        <div className="card" >
          <div className="card-header bg-white">
            <h3>Alert Reports</h3>

          </div>
          <div className="card-body">
            <div className='p-0'>
              <p className='bg-danger ps-3 p-2 text-white'> Alert Reports</p>
            </div>
            <div className="col-10 ">
              <form>
                <div className="d-md-flex	">
                  <div className="col mb-2  ms-sm-2">
                    <label htmlFor="input"> <strong>Start Date</strong>       </label>
                    <input type="date" id className="form-control" placeholder="Enter Outlet Name" />
             
                  </div>
                  <div className="col mb-2 ms-sm-2">
                    <label htmlFor="input2"><strong>End Date</strong>   </label>
                    <input type="date"  id='input2' className="form-control" placeholder="Enter outlet Location" />
                 
                  </div>
                </div>
              </form>
              <button className='btn btn-success mt-2' > Click to Add Outlet Location</button>
            </div>
          </div>
        </div>
      </div>
    </div>

 
      {/* <div className="container bg-white">
        <div className="d-md-flex p-4 ">
          <div class="card" >
            <div className="card-header bg-white">

            <h3>AlertReports</h3>
            </div>
            <div class="card-body">
              <div className='p-0'>
                <p className='bg-danger ps-3 p-2 text-white'> Alert Reports</p>
              </div>
              <div className="col-10 ">
                <div class="input-group mb-3">
                  <label className='m-2' htmlfor="start" > <strong>Start Date And Time :</strong></label>
                  <input type="date" id="start" name="trip-start"
                    placeholder="2018-07-22"
                
                 class="form-control me-3" />

                  <label className='m-2' htmlfor="End" > <strong>End Date And Time :</strong></label>
                  <input type="date" id="End" name="trip-start"
                    placeholder="2018-07-22"
                  
                   class="form-control me-3" />

                </div>
                <button className='btn btn-success ' > Filter</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}



      <div class="container-lg p-4">


        <div className="card p-3">
          <div className="card-body">
            <div class="table-responsive">
              <div class="table-wrapper">
                <div class="table-title">
                  <div class="row">
                    <div class="col-sm-8 mb-4 "><h2>Alert Report Table</h2></div>
                    {/* <div class="col-sm-4">
                      <input type="text" class="form-control me-3 mb-2" placeholder="Search Outlet Name" aria-label=" Outlet Name" />
                    </div> */}
                  </div>
                </div>
                <table class="table table-bordered ">

                <thead className='border'>
                    <tr>
                        <th>Outlet</th>
                        <th>Camera ID</th>
                        <th>Location</th>
                        <th>Alert</th>
                        <th>Date/Time</th>
                        <th>Veiw</th>
                        
                    </tr>
                </thead>
                 
                  <tbody className=' border border p-4'>
 
                

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

export default AlertReports