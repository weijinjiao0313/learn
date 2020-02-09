import React,{Component} from 'react'
import Item from '../item/item'
import PubSub from 'pubsub-js'

export default class List extends Component{

    state={
        isFirst:true,
        isLoading:false,
        errr:'',
        users:[]
    }

    componentDidMount(){
        PubSub.subscribe('tongxun',(msg,data)=>{
            this.setState(data)
        });
    }

    render(){
        const{users,error,isLoading,isFirst} = this.state
        if(isFirst){
            return <h2>输入关键词，点击搜索</h2>
        }else if(isLoading){
            return <h2>loading...</h2>
        }else if(error){
            return <h2>{error}</h2>
        }else{
            return(
                <div className = 'row'>
                    {
                        users.map((usersObj)=>{
                            return <Item key={usersObj.login} {...usersObj}/>
                        })
                    }
                </div>
            )
        }
    
    }
}