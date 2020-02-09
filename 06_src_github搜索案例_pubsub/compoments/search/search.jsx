import React,{Component} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component{

    search=()=>{
        const {value} = this.refs.keyword
        //this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('tongxun',{isFirst:false,isLoading:true});
        axios.get('https://api.github.com/search/users',{params:{q:value}}).then(           
            (response)=>{
                // this.props.updateAppState({
                //     isLoading:false,
                //     users:response.data.items
                // })
                PubSub.publish('tongxun',{
                    isLoading:false,
                    users:response.data.items
                });
            },
            (err)=>{
                // this.props.updateAppState({
                //     isLoading:false,
                //     error:err.message
                // })
                PubSub.publish('tongxun',{
                    isLoading:false,
                    error:err.message
                });
            }
        )
    }

    render(){
        return(
            <div>
				<input type="text" placeholder="enter the name you search" ref='keyword'/>&nbsp;
				<button onClick = {this.search}>Search</button>
			</div>
        )
    }
}