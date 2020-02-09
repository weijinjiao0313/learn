import React, { Component } from 'react'
import './button.css'

export default class Button extends Component {
	render() {
		/* console.log(this.props);
		const value = this.props.children
		const a = this.props.a
		const b = this.props.b
		const c = this.props.c
		const d = this.props.d */
		console.log(this.props)
		return <button {...this.props}className="button"></button> //该行代码和下面这行是等价的
		//return <button a={a} b={b} c={c} d={d} className="button">{this.props.children}</button>
	}
}
