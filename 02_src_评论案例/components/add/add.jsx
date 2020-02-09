import React,{Component} from 'react'
import uuid from 'uuid' 

export default class Add extends Component{
	add = ()=>{
		const name = this.name.value
		const content = this.content.value

		if(!name.trim()||!content.trim()){
			alert('数据不能为空')
			return
		}
		this.props.addComment({id:uuid(),name,content})
		this.name.value = ''
		this.content.value = ''
	}
    render(){
        return(
            <div className="col-md-4">
				<form className="form-horizontal">
					<div className="form-group">
						<label>用户名</label>
						<input  ref={(input)=>{this.name = input}} type="text" className="form-control" placeholder="用户名"/>
					</div>
					<div className="form-group">
						<label>评论内容</label>
						<textarea ref={(textarea)=>{this.content = textarea}} className="form-control" rows="6" placeholder="评论内容"></textarea>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button onClick={this.add} type="button" className="btn btn-default pull-right">提交</button>
						</div>
					</div>
				</form>
			</div>
        )
    }
} 