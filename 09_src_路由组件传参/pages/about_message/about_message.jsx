import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import AboutMessageDetail from '../about_message_detail/about_message_detail'

export default class AboutMessage extends Component{

	state={
		messages:[]
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				messages:[
					{id:'001',title:'消息1'},
					{id:'002',title:'消息2'},
					{id:'003',title:'消息3'},
					{id:'004',title:'消息4'},
				]
			})
		},1000)
	}

    render(){
        return(
            <div>
				<ul>
					{
						this.state.messages.map((msgObj)=>{
							return(
								<li key={msgObj.id}>
									<Link to={`/about/message/detail/${msgObj.id}`}>{msgObj.title}</Link>&nbsp;&nbsp;
								</li>
							)
						})
					}
				</ul>
				<hr/>
				<Route path='/about/message/detail/:id' component={AboutMessageDetail}/>
			</div>
        )
    }
}