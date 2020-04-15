import React from 'react'


import Photos from './pages/Photos';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Posts from './pages/Posts';


export const routes = [
    {
        path: "/routing/photos",
        component: <Photos/>
    },
    {
        path: "/routing/posts",
        component: <Posts/>
    },
    {
        path: "/routing/contacts",
        component: <Contacts/>
    },
    {
        path: "/routing/",
        component: <Home/>, 
        exact: true
    },
   
    {
        path: '*',
        component: () => ( <div>page not found 404</div>)
    },
   
]
