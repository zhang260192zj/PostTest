import request from '@/utils/request'

// export const  initPage =()=>{
//   return  request({
//     url: '/login.ashx?action=initPage',
//     method: 'post'
//   })
// }
// export const  saveConfig =(clientID,account,name,passWord)=>{
//   const data = {
//     clientID,
//     account,
//     name,
//     passWord
//   }
//   return  request({
//     url: '/login.ashx?action=saveConfig',
//     data,
//     method: 'post'
//   })
// }

// export const  login =(userName,passWord,action)=>{
//   const data = {
//     userName,
//     passWord,
//   }
//   return  request({
//     url: `/login.ashx?action=${action}`,
//     data,
//     method: 'post'
//   })
// }
export const Request =(data,action,address)=>request({
  url: `/${address}?action=${action}`,
    data,
    method: 'post'
})
// export const  Request  =(dbPara,pageModel,idMenu,fzy_token,action)=>{
//   const data = {
//     dbPara,
//     pageModel,
//     idMenu,
//     fzy_token
//   }
//   return  request({
//     url: `/menu.ashx?action=${action}`,
//     data,
//     method: 'post'
//   })
// }