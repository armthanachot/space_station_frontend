import React from 'react'
import { Route } from 'react-router-dom'
import Login from "./auth/Login"
import Register from "./auth/Register"
import User from "./user/User"

export default function RouteComponent() {
    const routes = [
        {
            path:"/login",
            component:Login
        },{
            path:"/register",
            component:Register
        },{
            path:"/user",
            component:User
        }
    ]
    return (
        <div>
            {
                routes.map((item,index)=>{
                    return <Route path={item.path} key={index} component={item.component}/>
                })
            }
        </div>
    )
}
