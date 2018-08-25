import API from '../api/index'
import axios from 'axios'

export function getHotSearchData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.HOTSEARCH_API)
        .then(res=>{
            console.log('请求成功')
            let data = res
            resolve(data)
        })
        .catch(error=>{
            console.log('请求失败')
            console.log(error)
        })
    })
}

export function getClassifyData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.CLASSIFY_API)
        .then(res=>{
            console.log('请求成功')
            let data = res
            resolve(data)
        })
        .catch(error=>{
            console.log('请求失败')
            console.log(error)
        })
    })
}
