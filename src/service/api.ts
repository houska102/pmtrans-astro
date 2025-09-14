const apiUrl = `${import.meta.env.CMS_PATH}/api`
const apiKey = import.meta.env.CMS_API_KEY


export const getCms = async (path: string, query?: Object) => {
  try {
    const queryParams = Object.entries(query || [])
      .reduce<String[]>((acc, [key, value]) => {
        acc.push(`${key}=${value}`)
        return acc
      }, [])
      .join('&')
    const response = await fetch([`${apiUrl}${path}`, queryParams].join('?'), {
      headers: {
        Authorization: `bearer ${apiKey}`
      }
    })
    import.meta.env.DEV && console.log(response.url)
    if(!response.ok) throw (response.statusText)
    const data = await response.json().then(response => response.data)

    return data
  } catch (e) {
    console.error(e)
  }
}