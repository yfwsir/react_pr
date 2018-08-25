import React,{Component} from 'react'
import './index.css'

//图片导航
import Weeknavimg from './weekNav/index'

export default class picNav extends Component{
    render(){
        return(
            <div className='weeklyBox'>
             <p className='weekly-title'>品味周刊</p>
               <Weeknavimg/>
            </div>
        )
    }
} 