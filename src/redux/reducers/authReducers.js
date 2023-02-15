const authState = {
    isLogin: false,
    loading: true,
}
 const authReducers = (state = authState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...authState,
                isLogin: action.payload.isLogin,
            }
        case "LOGOUT":
            return{
                ...authState,
                isLogin: action.payload.isLogin,
            }
        case "CHECK_TOKEN":
            return{
                ...authState,
                isLogin: action.payload.isLogin,
                loading: action.payload.loading,
            }
        default:
            return state;
    }
}
export default authReducers