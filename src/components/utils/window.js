const refreshPage = () => window.location.reload()

export { refreshPage }

export const setLocalStorage = (key, value) => { 
    localStorage.setItem(key, JSON.stringify(value))
 }

 