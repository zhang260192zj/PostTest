import axios from '@/libs/api.request'
export const  InitVersion =()=>{
  return  axios.request({
    url: '/index.ashx?action=InitVersion',
    method: 'post'
  })
}
export const  LoadMessage =(userID)=>{
  const data = {
    userID
  }
  return  axios.request({
    url: '/index.ashx?action=LoadMessage',
    data,
    method: 'post'
  })
}
export const  saveConfig =(clientID,account,name,passWord)=>{
  const data = {
    clientID,
    account,
    name,
    passWord
  }
  return  axios.request({
    url: '/login.ashx?action=saveConfig',
    data,
    method: 'post'
  })
}

export const  LoadAccList =(clientID,userName,passWord)=>{
  const data = {
    clientID,
    userName,
    passWord
  }
  return  axios.request({
    url: '/login.ashx?action=loadAccountList',
    data,
    method: 'post'
  })
}
export const LoadMenuList = (uid) => {
  const data = {
    uid
  }
  return  axios.request({
    url: '/login.ashx?action=LoadMenuList',
    data,
    method: 'post'
  })
}
