//API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES ={
    loading:{
        title: 'Loading...',
        message: 'Data is being loaded, please wait'
    },
    success: {
        tittle: 'Success',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occure while fetching response from the server. Please try again'
    },
    requestFailure:{
        tittle: 'Error',
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
    
}

//API SERVICE CALL
//SAMPLE REQUEST
//NEED SERVICE CALL: { url: '/' , method: 'POST/GET/PUT/DELETE' params: true/false, query: true/false}
export const SERVICE_URLS = {
    //userSignup: { url: '/signup', method: 'POST' }

    uploadFile: { url:'/file/upload', method: 'POST' },
    getAllShops: {url: '/shops', method: 'GET'}
}