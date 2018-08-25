import React,{Component} from 'react'
import './index.css'

import { Carousel, WingBlank } from 'antd-mobile'


export default class Bignav extends Component {
   
    //框架
    imgFrame(data){
        return( 
        <a
          key={data.id}
          href={data.href}
        >
          <img
            src={data.img}
            alt=""
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
        </a>
        ) 
        }  

         //定时器   
        componentDidMount() {
          // simulate img loading
          setTimeout(() => {
            this.setState({
              data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
          }, 100);
        }

        render() {
          return (
          <div className='bignav'>  
            <WingBlank >
              <Carousel
                autoplay={true}
                infinite
                dots={false}
                slideWidth='343px'
                cellSpacing={10}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
              >

            {
                    picData.map((data) => {
                 return this.imgFrame(data)
            })
            }
              </Carousel>
            </WingBlank>
            </div>
          );
        }
      }

      //数据
      const picData=[
        {id:1,
        img:`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`,
        href:"http://www.alipay.com",
        alt:"",   
        },
        {id:2,
        img:`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`,
        href:"http://www.alipay.com",
        alt:"",   
        },
        {id:3,
            img:`https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png`,
            href:"http://www.alipay.com",
            alt:"",   
        }
        
    ] 