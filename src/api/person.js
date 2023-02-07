import axios from '@/libs/api.request'

export const InitPersonPara =(idUser) => {
  const data = {
    idUser
  }
  return axios.request({
    url: '/Person.ashx?action=InitPersonPara',
    data,
    method: 'post'
  })
}

export const InitPopPersonInfo =(idUser)=>{
  const data ={
    idUser
  }
  return axios.request({
    url: '/Person.ashx?action=InitPopPersonInfo',
    data,
    method: 'post'
  })
}

export const GetPopPersonList =(params,MFields,dtoFields,enumFields,dateFields,sortStr,pageIndex,pageSize)=>{
  const data ={
    params,
    MFields,
    dtoFields,
    enumFields,
    dateFields,
    sortStr,
    pageIndex,
    pageSize
  }
  return axios.request({
    url: '/Person.ashx?action=GetPopPersonList',
    data,
    method: 'post'
  })
}

export const GetDropPersonList =(MFields,dtoFields,enumFields,sortStr,comFields,keyword) => {
  const data = {
    MFields,
    dtoFields,
    enumFields,
    sortStr,
    comFields,
    keyword
  }
  return axios.request({
    url: '/Person.ashx?action=GetDropPersonList',
    data,
    method: 'post'
  })
}

export const GetPersonList =(params,MFields,dtoFields,enumFields,sortStr,pageIndex,pageSize) => {
  const data = {
    params,
    MFields,
    dtoFields,
    enumFields,
    sortStr,
    pageIndex,
    pageSize
  }
  return axios.request({
    url: '/Person.ashx?action=GetPersonList',
    data,
    method: 'post'
  })
}


