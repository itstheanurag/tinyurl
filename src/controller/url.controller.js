const { createurlservice } = require('../services/url.service')

const createUrl = async (request, response) => {
    try{
       return await createurlservice(request, response);
    }
    catch(err) {
        console.log(err)
        return response.status(500).json({status:"failure", error: err})
    }
}


module.exports =  { createUrl }