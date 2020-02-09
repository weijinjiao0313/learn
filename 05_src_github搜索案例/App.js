import React,{Component} from 'react'
import Search from './compoments/search/search'
import List from './compoments/list/list'

export default class App extends Component{

    state={
        isFirst:true,
        isLoading:false,
        errr:'',
        users:[]
    }

    updateAppState = (obj)=>{
        this.setState(obj)
    }

    render(){
        return(
            <div className="container">
				<section className="jumbotron">
					<h3 className="jumbotron-heading">Search Github Users</h3>
					<Search updateAppState={this.updateAppState}/>
				</section>
				<List {...this.state}/>
			</div>
        )
    }
}