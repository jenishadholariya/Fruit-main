export const isLogin = ()=>{
    let user = localStorage.getItem("Frutikha")
    if (user) {
        return true;
    } else {
        return false;
    }
}