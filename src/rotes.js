import React from 'react'


import Photos from './pages/Photos';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Posts from './pages/Posts';


export const routes = [
    {
        path: "/photos",
        component: <Photos/>
    },
    {
        path: "/posts",
        component: <Posts/>
    },
    {
        path: "/contacts",
        component: <Contacts/>
    },
    {
        path: "/home",
        component: <Home/>, 
        exact: true
    },
   
    /*{
        path: '*',
        component: () => ( <div>page not found 404</div>)
    },*/
    
   
]
