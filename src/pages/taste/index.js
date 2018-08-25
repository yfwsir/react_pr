import React,{Component} from 'react'
import './index.css'


//图片导航
import Picnav from './tasteSub/picNav/index';

//品味周刊
import Weekly from './tasteSub/weekly/index';

//独家专栏
import Tasteshow from './tasteSub/tasteshow/index';
export default class Taste extends Component{
    render(){
        return (

            
            <div className='page'>  
                 <p className="texTHand">品味</p> 
                <div className="tesTbody"> 
                    <div className='tesTbody-cl'>    
                        <Picnav/>
                        <p className='interval'></p>
                        <Weekly/>
                        <p className='interval'></p>
                        <Tasteshow/>
                    </div>
                </div>  
            </div>
        )
    }
}