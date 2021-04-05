import React from 'react'
import {Route, Redirect} from 'react-router-dom'


export default function PrivateRouter({component:Component,auth:auth,logout:logout,...rest}){

    return(
        <Route 
        {...rest}
        render={(props)=>{
            if(auth){
                return <Component logout={logout}/>
            }else{
                return(
                    <Redirect to={{pathname:'/login', state:{from:props.location}}}/>
                )
            }
        }}
        />
    )
}