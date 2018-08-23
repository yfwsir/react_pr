import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

export default class Footertab extends Component{
    render(){
        return(
            <div className='footertab'>
                <NavLink className='footertab_item' to='/home'>
                    <i className='iconfont icon-shouye'></i>
                    <span>首页</span>
                </NavLink> 
                <NavLink className='footertab_item' to='/classify'>
                    <i className='iconfont icon-fenlei'></i>
                    <span>分类</span>
                </NavLink> 
                <NavLink className='footertab_item' to='/taste'>
                    <i className='iconfont icon-pinweishenghuo'></i>
                    <span>品味</span>
                </NavLink> 
                <NavLink className='footertab_item' to='/order'>
                    <i className='iconfont icon-gouwucheman'></i>
                    <span>购物车</span>
                </NavLink> 
                <NavLink className='footertab_item' to='/mine'>
                    <i className='iconfont icon-geren'></i>
                    <span>我的</span>
                </NavLink> 
            </div>
        )
    }
}