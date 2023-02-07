import axios from '@/libs/api.request'

export const GetDropColumn=(idUser,menuCode) => {
  const data = {
    idUser,
    menuCode
  }
  return axios.request({
    url: '/commons.ashx?action=GetDropColumn',
    data,
    method: 'post'
  })
}

