export const apiRequest = ({ endpoint, method, params }) => {
  const url = new URL('https://jsonplaceholder.typicode.com' + endpoint)
  if (params) {
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  }
  return fetch(url, {
    method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(async response => {
    const data = await response.json()
    if (!data.length) {
      throw new Error()
    }
    return data
  }).catch(e => {
    console.log(e)
  })
}

export const getLinkPreview = (link) => {
  const data = { key: '3b77166964ade247f8f80ba8ca27ed4f', q: link }

  return fetch('https://api.linkpreview.net', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data)
  }).then(res => res.json())
}
