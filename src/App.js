import React, { Component } from 'react'
import Button from './components/button/button'

export default class App extends Component {
	render() {
		return (
			<div>
				<h3>App</h3>
				<Button a="1" b="2" c="3" d="4" e="5">123</Button>
			</div>
		)
	}
}
