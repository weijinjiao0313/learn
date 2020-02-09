import React,{Component} from 'react'
import AboutNews from '../about_news/about_news'
import AboutMessage from '../about_message/about_message'
import{NavLink,Switch,Route,Redirect} from 'react-router-dom'
 
export default class About extends Component{
    render(){
        return(
            <div>
				<h2>About组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
                            <NavLink className="list-group-item" activeClassName="active2" to='/about/news'>News</NavLink>
						</li>
						<li>
                            <NavLink className="list-group-item" activeClassName="active2" to='/about/message'>Message</NavLink>
						</li>
					</ul>
					<Switch>
                        <Route path='/about/news' component={AboutNews}></Route>
                        <Route path='/about/message' component={AboutMessage}></Route>
                        <Redirect to='about/message'/>
                    </Switch>
				</div>
			</div>
        )
    }
}