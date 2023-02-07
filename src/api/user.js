import axios from '@/libs/api.request'

export const LoginIn = ({userRole,clientID,userName, password,acc_Num,logindate}) => {
  const data = {
    userRole,
    clientID,
    userName,
    password,
    acc_Num,
    logindate
  }
  return axios.request({
    url: '/login.ashx?action=LoginIn',
    data,
    method: 'post'
  })
}

export const getUserInfo = (fzy_token) => {
  const data = {
    fzy_token
  }
  return axios.request({
    url: '/login.ashx?action=getUserInfo',
    data,
    method: 'post'
  })
}

export const logout = () => {
  return axios.request({
    url: '/login.ashx?action=logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}
