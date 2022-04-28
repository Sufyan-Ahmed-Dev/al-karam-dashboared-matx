import React,{lazy} from 'react'
import Loadable from 'app/components/Loadable/Loadable'
// import AddAIModal from '../Super-Admin/AddAiModel'

const MasterAlerts = Loadable(lazy(() => import('./MasterAlerts')))
const AddOutlet = Loadable(lazy(() => import('./AddOutlet')))
const AddOutletManager = Loadable(lazy(() => import('./AddOutletManager')))
const OutletManagerList = Loadable(lazy(() => import('./OutletManagerList')))
const AddCameras = Loadable(lazy(() => import('./AddCameras')))
const AlertReports = Loadable(lazy(() => import('./AlertReports')))
const AddAIModal = Loadable(lazy(() => import('../Super-Admin/AddAiModel')))

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
    {
        path: '../Super-Admin/AddAiModel',
        element: <AddAIModal></AddAIModal>,
    },
   
]

export default CompanyAdminRoutes