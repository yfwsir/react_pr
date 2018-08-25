import React,{Component} from 'react'
import {getClassifyData} from '../../server/server'
import './index.css'
// import { Button } from 'antd-mobile';

export default class Classify extends Component{
    constructor(){
        super();
        this.state={
            classifyData:[],
            isSelect:0,
            boo:false
        }
    }
    render(){
        let {classifyData,isSelect,boo} = this.state
        console.log(classifyData)
        let obj = classifyData.find((item,index)=>{
            return index === isSelect ;
        })
        console.log(obj)
        return (
            <div className='page' id='classify'>
                <div className='classify_search'>
                    <div className='classify_search_wrap' onClick={this.goSearchDetail.bind(this)}>
                        <i className='iconfont icon-sousuo'></i>
                        <span className='classify_search_inp'>请输入商品关键字</span>
                    </div>
                </div>

                <div className='classify_left'>
                    <ul className='classify_left_ul'>
                        {
                            classifyData.map((item,index)=>{
                                return (
                                    <div key={item.id}>
                                    <li key={item.id}
                                        onClick={this.addSelect.bind(this,index)}
                                        className={['classify_left_nav',index===isSelect&&'active'].join(' ')} >
                                        {item.name}
                                    </li>
                                    </div>
                                ) 
                            })
                        }
                    </ul>
                </div>
                {boo && <div className='classify_right'>
                    <img src={obj.img} className='classify_right_img' />
                    <div className='classify_right_nav'>
                        {
                            obj.data.map((item,index)=>{
                                return (
                                    <div className='classify_right_nav_item'>
                                        <img src={item.img} alt=""/>
                                        <p>{item.name}</p>
                                    </div> 
                                )
                            })
                        }
                    </div>
                </div>
                }
            </div>
        )
    }
    goSearchDetail(){
        this.props.history.push('/search')
    }
    addSelect(index){
        this.setState({isSelect:index})
    }
    componentDidMount(){
        getClassifyData().then(res=>{
            this.setState({classifyData:res.data.data})
            this.setState({boo:true})
            console.log(this.state.classifyData)
        })
    }
}