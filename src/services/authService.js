
const accessTokenKey='access'

const authService={
    setToken:({access})=>localStorage.setItem(accessTokenKey, access),
    getAccessToken:()=>localStorage.getItem(accessTokenKey)
}

export {
    authService
}