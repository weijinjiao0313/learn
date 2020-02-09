import React,{Component} from 'react'

export default class App extends Component{

    state={
        isLoading:true,
        repoName:'',
        repoUrl:'',
        error:'',
        keyWord:'h'     
    }

    componentDidMount(){
        const url = `https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`
        fetch(url)
        .then(
            (response)=>{
                return response.json()
            },
        )
        .then(
            (value)=>{console.log('请求成功了',value)}
        )
        .catch(
            (error)=>{console.log('请求失败了',error)}
        )
    }

    render(){
        const {isLoading,repoName,repoUrl,error,keyWord} = this.state
		if(isLoading){
			return <h2>Loading....</h2>
		}else if(error){
			return <h2>{error}</h2>
		}else{
		return <h2>github上以【{keyWord}】字母开头的仓库中，点赞量最多的是【<a href={repoUrl}>{repoName}</a>】</h2>
		}
    }

}