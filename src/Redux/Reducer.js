

var initialData = {
    products:[]
}


const basicReducer = (storeData = initialData, action) =>{
    if(action.type === "products"){
        return{
            ...storeData,
            products:action.payload
        }

    }

    return storeData
}

export default basicReducer