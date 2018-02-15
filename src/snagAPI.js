export const getSnag = (url) => {
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject('Network failure.')
      }
    })
}
