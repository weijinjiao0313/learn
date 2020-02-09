import React, { Component } from 'react'

export default class AboutMessage extends Component{
    render(){
        return(
            <div>
				<ul>
					<li>
						<a href="/about/message/1">message001</a>&nbsp;&nbsp;
					</li>
					<li>
						<a href="/about/message/3">message003</a>&nbsp;&nbsp;
					</li>
					<li>
						<a href="/about/message/5">message005</a>&nbsp;&nbsp;
					</li>
				</ul>
				<hr/>
			</div>
        )
    }
}