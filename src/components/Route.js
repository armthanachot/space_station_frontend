import React from 'react'
import { Route } from 'react-router-dom'
import Login from "./auth/Login"
import Register from "./auth/Register"

export default function RouteComponent() {
    const routes = [
        {
            path:"/login",
            component:Login
        },{
            path:"/register",
            component:Register
        }
    ]
    return (
        <div>
            {
                routes.map((item)=>{
                    return <Route path={item.path} component={item.component}/>
                })
            }
        </div>
    )
}
