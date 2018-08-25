import React,{Component} from 'react'
import './index.css'


export default class weekNavimg extends Component{
    render(){
        return(
            <div className='weekNavimg'>
                <img src={weekNavimgData.bigimg} alt=''/>
                <div className='weekNavimg-box'>
                    <ul className='weekNavimg-ulbox'>
                        {
                            weekNavimgData.data.map((item,index)=>{
                            return  this.getweekNavimgdata(item)
                            })
                            
                        }
                    </ul> 
                 </div>  
            </div>
        )
    }
    getweekNavimgdata(data){
        return(
            <li className='weekNavimg-lbox' key={data.id}>
                <img src={data.img} alt='' />
                <p>{data.text}</p>
                <span>￥{data.price}</span>
            </li> 
            )
    }
} 

const weekNavimgData=
    {bigimg:'https://shop.io.mi-img.com/app/shop/img?id=shop_1dfe13a7a9e4e3ef7644d223d661d462.jpeg&w=1080&h=300',
    data:[
        {
            id:1,
            img:'https://via.placeholder.com/100x100',
            text:'水肌美定装健康水',
            price:71,
        },
        {
            id:2,
            img:'https://via.placeholder.com/100x100',
            text:'水肌美定装健康水',
            price:71,
        },
        {
            id:3,
            img:'https://via.placeholder.com/100x100',
            text:'水肌美定装健康水',
            price:71,
        },
        {
            id:4,
            img:'https://via.placeholder.com/100x100',
            text:'水肌美定装健康水',
            price:71,
        }
    ]   
    }
