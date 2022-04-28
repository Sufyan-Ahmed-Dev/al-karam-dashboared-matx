import React,{lazy} from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const MasterAlerts = Loadable(lazy(() => import('./MasterAlerts')))
const AddOutlet = Loadable(lazy(() => import('./AddOutlet')))
const AddOutletManager = Loadable(lazy(() => import('./AddOutletManager')))
const OutletManagerList = Loadable(lazy(() => import('./OutletManagerList')))
const AddCameras = Loadable(lazy(() => import('./AddCameras')))
const AlertReports = Loadable(lazy(() => import('./AlertReports')))

const CompanyAdminRoutes= [
    {
        path: '/masteralerts',
        element: <MasterAlerts />,
    },
    {
        path: '/addoutlet',
        element: <AddOutlet />,
    },{
        path: '/addoutletmanager',
        element: <AddOutletManager />,
    },{
        path: '/outletmanagerlist',
        element: <OutletManagerList />,
    },{
        path: '/addcameras',
        element: <AddCameras />,
    },{
        path: '/alertreports',
        element: <AlertReports />,
    },
   
]

export default CompanyAdminRoutes