import request from '@/utils/request'

export const getArticle = (obj) => {
  return request.get('/interview/query', {
    params: {
      current: obj.current || 1,
      pageSize: obj.pageSize || 10,
      sorter: obj.sorter
    }
  })
}
export const interview = (id) => {
  return request.get('/interview/show', {
    params: {
      id: id
    }
  })
}
export const updateLike = (id) => {
  return request.post('/interview/opt', {
    id: id,
    optType: 1 // 喜欢
  })
}
export const updateCollect = (id) => {
  return request.post('/interview/opt', {
    id: id,
    optType: 2 // 喜欢
  })
}

export const getArticlesCollect = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      optType: 2,
      pageSize: 5,
      page: obj.page
    }
  })
}

export const getArticlesLike = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      optType: 1,
      pageSize: 5,
      page: obj.page
    }
  })
}
