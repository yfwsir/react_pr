import React,{Component} from 'react'
import './index.css'

//图片导航

export default class tastesshow extends Component{
    render(){
        return(
            <div className='tastesshow'>
             <p className='weekly-title'>独家专栏</p>
             <div className='showBox'>
                  <ul className='showbox-ulbox'>
                     {
                           tastesshowData.map((item,index)=>{
                              return    this.tastesshowframe(item)
                           })     
                     } 
                </ul>  
             </div>
            </div>
        )
    }

    tastesshowframe(data){
            return(
               <li className='showbox-lbox' key={data.id}>
                    <img src={data.img} alt=''/> 
                    <h2>{data.slogan}</h2>
                    <p>{data.target}</p> 
                    <button>发现</button>  
               </li> 
            )
    }

} 
//展示数据
const tastesshowData=[
    {
        id:1,
        img:'https://shop.io.mi-img.com/app/shop/img?id=shop_477e4a81e528f25d6d9f348fdffa604e.jpeg&w=1080&h=540',
        slogan:'纯米，让你生活更有温度',
        target:'打造年轻人的厨房说态度'
    },
    {
        id:2,
        img:'https://shop.io.mi-img.com/app/shop/img?id=shop_477e4a81e528f25d6d9f348fdffa604e.jpeg&w=1080&h=540',
        slogan:'纯米，让你生活更有温度',
        target:'打造年轻人的厨房说态度'
    },
    {
        id:3,
        img:'https://shop.io.mi-img.com/app/shop/img?id=shop_477e4a81e528f25d6d9f348fdffa604e.jpeg&w=1080&h=540',
        slogan:'纯米，让你生活更有温度',
        target:'打造年轻人的厨房说态度'
    },
    {
        id:4,
        img:'https://shop.io.mi-img.com/app/shop/img?id=shop_477e4a81e528f25d6d9f348fdffa604e.jpeg&w=1080&h=540',
        slogan:'纯米，让你生活更有温度',
        target:'打造年轻人的厨房说态度'
    }
] 