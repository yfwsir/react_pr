import React,{Component} from 'react'

import Bignav from './bigpicNav/index'
import Minnav from './minpicNav/index'
export default class picNav extends Component{
    render(){
        return(
            <div className='navBox'>
            <Bignav/>
            <Minnav/>
            </div>
        )
    }
} 