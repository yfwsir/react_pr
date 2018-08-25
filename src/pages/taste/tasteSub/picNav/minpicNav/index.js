import React,{Component} from 'react'
import './index.css'
export default class minpicNav extends Component{
    render(){
        return(
            <div className='minpicNav'>
             <ul className='ulBox'>
            {
                imgData.map((data)=>{
                 return  this.imgFrame(data)
                })
            }
             </ul>
            </div>
        )
    }

    //框架
    imgFrame(data){
        return(
                <li key={data.id} className="imgBox">
                    <img src={data.img} alt=''/>
                    <p>{data.text}</p>   
                </li>  
               ) 
    }

} 


var arr=[];
//数据

    for (var i=0;i<11;i++){
       arr.push({
        id:i,
        img:'https://shop.io.mi-img.com/app/shop/img?id=shop_5bc94fa1c791e71d18a1939c89c7e6e0.jpeg',
        text:'兴品驾到'
    })
    }
const imgData = arr ;
    
