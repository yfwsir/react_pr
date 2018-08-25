import React,{Component } from 'react'
import './search.css'
import {getHotSearchData} from '../../server/server'

export default class Search extends Component{
    constructor(){
        super();
        this.state={
            hotSearchData:[]
        }
    }
    render(){
        let {hotSearchData} = this.state
        return (
            <div className='search_detail'>
                <div className='search_top'>
                    <div className='search_back' onClick={this.backToClassify.bind(this)}>
                        <i className='iconfont icon-zuojiantou'></i>
                    </div>
                    <div className='search_inp'>
                        <i className='iconfont icon-sousuo'></i>
                        <input type="text" className='search_inp_inp'
                            placeholder='镇定超级品牌日'/>
                    </div>
                    <div className='search_text'>
                        搜索
                    </div>
                </div>

                <div className='hotSearch'>
                    <p className='hotSearch_text'>热门搜索</p>
                    <div className='hotSearch_word'>
                        {
                            hotSearchData.map((item)=>{
                                return (
                                    <span className='hotSearch_span' style={{background:item.backColor}}
                                    key={item.id}>
                                        <span className='hotSearch_span_span'>{item.word}</span> 
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        getHotSearchData().then(res=>{
            this.setState({hotSearchData:res.data.data})
            console.log(this.state.hotSearchData)
        })
    }

    backToClassify(){
        this.props.history.go(-1)
    }
}