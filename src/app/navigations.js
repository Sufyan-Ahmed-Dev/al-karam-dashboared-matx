export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    {
        name: 'Master Alerts',
        path: '/masteralerts',
        icon: 'warning',
    },
    {
        label: 'Company Admin',
        type: 'label',
    },
    {
        name: 'Add Users/Outlet Details',
        icon: 'person',
        children: [
            {
                name: 'Add Outlet',
                iconText: 'AO',
                path: '/addoutlet',
            },
            {
                name: 'Add Outlet Manager',
                iconText: 'OM',
                path: '/addoutletmanager',
            },
            {
                name: 'Outlet Manager List',
                iconText: 'ML',
                path: '/outletmanagerlist',
            },
            {
                name: 'Add Cameras',
                iconText: 'AC',
                path: '/addcameras',
            },
        ],
    },
    {
        label: 'Reporting Area',
        type: 'label',
    },

    {
        name: 'Alert Reports',
        path: '/alertreports',
        icon: 'warning',
    },


    // super admin  extra nav 




































    // {
    //     label: 'PAGES',
    //     type: 'label',
    // },
    // {
    //     name: 'Session/Auth',
    //     icon: 'security',
    //     children: [
    //         {
    //             name: 'Sign in',
    //             iconText: 'SI',
    //             path: '/session/signin',
    //         },
    //         {
    //             name: 'Sign up',
    //             iconText: 'SU',
    //             path: '/session/signup',
    //         },
    //         {
    //             name: 'Forgot Password',
    //             iconText: 'FP',
    //             path: '/session/forgot-password',
    //         },
    //         {
    //             name: 'Error',
    //             iconText: '404',
    //             path: '/session/404',
    //         },
    //     ],
    // },
    // {
    //     label: 'Components',
    //     type: 'label',
    // },
    // {
    //     name: 'Components',
    //     icon: 'favorite',
    //     badge: { value: '30+', color: 'secondary' },
    //     children: [
    //         {
    //             name: 'Auto Complete',
    //             path: '/material/autocomplete',
    //             iconText: 'A',
    //         },
            // {
            //     name: 'Buttons',
            //     path: '/material/buttons',
            //     iconText: 'B',
            // },
            // {
            //     name: 'Checkbox',
            //     path: '/material/checkbox',
            //     iconText: 'C',
            // },
            // {
            //     name: 'Dialog',
            //     path: '/material/dialog',
            //     iconText: 'D',
            // },
            // {
            //     name: 'Expansion Panel',
            //     path: '/material/expansion-panel',
            //     iconText: 'E',
            // },
            // {
            //     name: 'Form',
            //     path: '/material/form',
            //     iconText: 'F',
            // },
            // {
            //     name: 'Icons',
            //     path: '/material/icons',
            //     iconText: 'I',
            // },
            // {
            //     name: 'Menu',
            //     path: '/material/menu',
            //     iconText: 'M',
            // },
            // {
            //     name: 'Progress',
            //     path: '/material/progress',
            //     iconText: 'P',
            // },
            // {
            //     name: 'Radio',
            //     path: '/material/radio',
            //     iconText: 'R',
            // },
            // {
            //     name: 'Switch',
            //     path: '/material/switch',
            //     iconText: 'S',
            // },
            // {
            //     name: 'Slider',
            //     path: '/material/slider',
            //     iconText: 'S',
            // },
            // {
            //     name: 'Snackbar',
            //     path: '/material/snackbar',
            //     iconText: 'S',
            // },
            // {
            //     name: 'Table',
            //     path: '/material/table',
            //     iconText: 'T',
            // },
    //     ],
    // },
    // {
    //     name: 'Charts',
    //     icon: 'trending_up',

    //     children: [
    //         {
    //             name: 'Echarts',
    //             path: '/charts/echarts',
    //             iconText: 'E',
    //         },
    //     ],
    // },
]
