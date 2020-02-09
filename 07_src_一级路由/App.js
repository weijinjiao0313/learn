import React, { Component } from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import About from './pages/about/about'
import Home from './pages/home/home'

export default class App extends Component{
    render(){
        return(
            <div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
						{/* <Demo name="lisi"/> */}
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 编写导航区域 */}
							<NavLink className="list-group-item" activeClassName="active2" to="/about">About</NavLink>
							<NavLink className="list-group-item" activeClassName="active2" to="/home">Home</NavLink>
                            <NavLink className="list-group-item" activeClassName="active2" to="/art">ART</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">                                
								<Switch>
									{/* 注册路由 */}
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home} exact/>
                                    <Route path="/art"/>
									<Redirect to="/about"/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
}