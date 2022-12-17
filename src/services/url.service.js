const isURI = require("is-uri");
const nano = import("nanoid");
const {Base_Url} = require('../config/index');



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

    const shortid = Base_Url + await createId();
    return response.status(201).json({ status:"success", data: {shorturl: shortid}})
}

module.exports = {createurlservice}