import React, { Fragment } from 'react'
// import RowCards from './shared/RowCards'
// import StatCards from './shared/StatCards'
// import Campaigns from './shared/Campaigns'
// import { Grid, Card } from '@mui/material'
// import StatCards2 from './shared/StatCards2'
// import DoughnutChart from './shared/Doughnut'
// import UpgradeCard from './shared/UpgradeCard'
// import { styled, useTheme } from '@mui/system'
// import TopSellingTable from './shared/TopSellingTable'

// const ContentBox = styled('div')(({ theme }) => ({
//     margin: '30px',
//     [theme.breakpoints.down('sm')]: {
//         margin: '16px',
//     },
// }))

// const Title = styled('span')(() => ({
//     fontSize: '1rem',
//     fontWeight: '500',
//     textTransform: 'capitalize',
// }))

// const SubTitle = styled('span')(({ theme }) => ({
//     fontSize: '0.875rem',
//     color: theme.palette.text.secondary,
// }))

// const H4 = styled('h4')(({ theme }) => ({
//     fontSize: '1rem',
//     fontWeight: '500',
//     marginBottom: '16px',
//     textTransform: 'capitalize',
//     color: theme.palette.text.secondary,
// }))

const Analytics = () => {
    // const { palette } = useTheme()

    return (
        <Fragment>
            {/* <h1>
                Defaul Layout
            </h1> */}

<div className="container mt-5 " style={{}}>
    <div className="row text-white shodow-lg" >
        <div className="col-lg-4 col-md-6 col-sm-8" >
        <div class="card " style={{"background" : "#15a3bc" ,"height" : "180px"}} >
  
  <div class="card-body">
    <h5 class="card-title fs-4">Bilawal Chorangi</h5>
    <p class="card-text">Defence phase 2</p>
  
  </div>
  <a href="#"  style={{"background" : "#188fa2" , }} class="text-white  text-center text-decoration-none p-2">More Info</a>	
</div>
        </div>
    </div>
</div>
        

        </Fragment>
    )
}

export default Analytics
