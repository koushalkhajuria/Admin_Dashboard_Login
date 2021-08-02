import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Ktb from "./Ktb"
import 'react-app-polyfill/stable'
import Logins from "./Logins"
import App from "./App"
export default function Main(){
    return(

   <BrowserRouter>
    <Switch>
   <Route exact path="/" component={Logins}></Route>
   <Route  path="/" component={App}></Route>
   <Route exact path="*" component={Logins}></Route>
   </Switch>
  
</BrowserRouter>)
}