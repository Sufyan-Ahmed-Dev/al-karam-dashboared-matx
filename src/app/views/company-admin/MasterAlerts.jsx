import React from 'react'

function MasterAlerts() {
  return (<>
  
  <h1>MasterAlerts</h1>

<div class="container">
<div class=" row">
  <div className="col-lg-4 col-md-6 col-sm-10">
  <div class="card  ">
        <div class="backgroundEffect"></div>
        <div class="pic"> <img class="w-100" src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
            {/* <div class="date"> <span class="day">26</span> <span class="month">June</span> <span class="year">2019</span> </div> */}
        </div>
        <div class="content bg-warning">
            <p className='text-center fs-4'><strong>Cam-7</strong></p>
           <p className='ms-2'>Cam-location: <strong>Counter Front</strong></p>
           <p className='ms-2'>Outlet: <strong>Bilawal Chorangi</strong></p>
       
            <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
             
                
            </div>
            <div class="bg-danger p-2 text-white"> Status : <strong>Not Working</strong> <span class="fas fa-arrow-right"></span></div>
            <div class="bg-success p-2 text-white">AI Status : <strong>No Alert</strong> <span class="fas fa-arrow-right"></span></div>
        </div>
    </div>

  </div>

   
</div>
</div>





  </>

    
  )
}


export default MasterAlerts


