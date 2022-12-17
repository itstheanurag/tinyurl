const isURI = require("is-uri");
const nano = import("nanoid");
const {Base_Url} = require('../config/index');
const URL = require('../model/url.model')



const createId = async () => {
   const id = (await nano).nanoid(8).toLocaleLowerCase();
   return id;
}

const checkurl = (url) => {
    return isURI(url);
}

const createurlservice = async (request, response) => {

    const {url} = request.body;

    if(!checkurl(url)){
       return response.status(400).json({status:"failure", error: "Your URL is not valid"})
    }

    const longurlexist = await URL.findOne({longurl:url})
    if(longurlexist){
        return response.status(200).json({status:"success", data:{
            shorturl : longurlexist.shorturl
        }})
    }

    const shortid = Base_Url + await createId();
    const data = {
        longurl:url,
        shorturl:shortid
    }
    const createObject = await URL.create(data)
    return response.status(201).json({ status:"success", data: createObject})
}


const redirectService = async (request, response) => {

    const {urlid} = request.params
    const findUrl = await URL.findOne({shorturl: Base_Url + urlid})

    if(findUrl) {
        return response.status(302).redirect(findUrl.longurl);
    }

    return response.status(400).json({status: "failure", error: "something went wrong"})

}

module.exports = {createurlservice, redirectService}