import axios from "axios";

export const handleActionCarFil = (thisName) => async(dispatch) => {
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            access_token: token,
        }
    }

    const res = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?name=${thisName}`, config)
    try {
        // console.log(res)
        dispatch({
            type: "SEARCH_CAR_BY_NAME",
            payload: {
                carList: res.data.cars,
                message: res.statusText,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

