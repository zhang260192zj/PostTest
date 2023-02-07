import axios from '@/libs/api.request'

export const InitDepPara =(idUser) => {
  const data = {
    idUser
  }
  return axios.request({
    url: '/Department.ashx?action=InitDepPara',
    data,
    method: 'post'
  })
}

export const GetDropDepartmentList =(MFields,dtoFields,enumFields,sortStr,comFields,keyword) => {
  const data = {
    MFields,
    dtoFields,
    enumFields,
    sortStr,
    comFields,
    keyword
  }
  return axios.request({
    url: '/Department.ashx?action=GetDropDepartmentList',
    data,
    method: 'post'
  })
}

export const GetDepartmentList =(params,MFields,dtoFields,enumFields,sortStr,pageIndex,pageSize) => {
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
    url: '/Department.ashx?action=GetDepartmentList',
    data,
    method: 'post'
  })
}

export const InitCard=()=>{
  return axios.request({
    url: '/Department.ashx?action=InitCard',
    method: 'post'
  })
}
export const GetAddData=(idparent,mdata)=>{
  const data = {
    idparent,
    mdata
  }
  return axios.request({
    url: '/Department.ashx?action=GetAddData',
    data,
    method: 'post'
  })
}

export const GetEditData=(ID,mFields,enumFields,dtoFields)=>{
  const data = {
    ID,
    mFields,
    enumFields,
    dtoFields
  }
  return axios.request({
    url: '/Department.ashx?action=GetEditData',
    data,
    method: 'post'
  })
}

export const GetCardControl=()=>{
   return axios.request({
    url: '/Department.ashx?action=GetCardControl',
    method: 'post'
  })
}




