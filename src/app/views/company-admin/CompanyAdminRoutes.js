import React,{lazy} from 'react'
import Loadable from 'app/components/Loadable/Loadable'
// import AddAIModal from '../Super-Admin/AddAiModel'

const MasterAlerts = Loadable(lazy(() => import('./MasterAlerts')))
const AddOutlet = Loadable(lazy(() => import('./AddOutlet')))
const AddOutletManager = Loadable(lazy(() => import('./AddOutletManager')))
const OutletManagerList = Loadable(lazy(() => import('./OutletManagerList')))
const AddCameras = Loadable(lazy(() => import('./AddCameras')))
const AlertReports = Loadable(lazy(() => import('./AlertReports')))
const AddNewAiModel = Loadable(lazy(() => import('../Super-Admin/AddNewAiModel')))
const AddAlerts = Loadable(lazy(() => import('../Super-Admin/AddAlerts')))
const AddNewCompany = Loadable(lazy(() => import('../Super-Admin/AddNewCompany')))
const AddNewUser = Loadable(lazy(() => import('../Super-Admin/AddNewUser')))
const UserList = Loadable(lazy(() => import('../Super-Admin/UserList')))
// const AddAlerts = Loadable(lazy(() => import('../Super-Admin/AddAlerts')))


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
        path: '/AddNewAiModel',
        element: <AddNewAiModel></AddNewAiModel>,
    },
    {
        path: '/AddNewCompany',
        element: <AddNewCompany></AddNewCompany>,
    },
    {
        path: '/AddNewUser',
        element: <AddNewUser></AddNewUser>,
    },
    {
        path: '/UserList',
        element: <UserList></UserList>,
    },
    {
        path: '/AddAlerts',
        element: <AddAlerts></AddAlerts>,
    },
  
   
]

export default CompanyAdminRoutes