const form = document.getElementById("form");
const input = document.querySelector("#input");
const shortUrl = document.getElementById("short-url-div")
const Errors = document.getElementById("errors")
const errorPara = document.getElementById('error');
const shorturldata = document.getElementById("shorturl");

const checkUrl = (data) => {
    if (data.trim().length > 0) {
        return true;
    }
    return false
}

const handleSubmit = async () => {
    let url = document.querySelector("#input").value;
    console.log(url)

    const urlLengthExists = checkUrl(url);

    if (!urlLengthExists) {
        if (shortUrl.style.display === 'flex') {
            shortUrl.style.display = 'none';
        }
        Errors.style.display = "flex";
        errorPara.innerHTML = "You have not provided any Url"
    } else {
        const response = await fetch("http://localhost:3333/longurl", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ url }),
        }).then((response) => response.json());
        
        console.log(response)
        if (response.status === "failure") {

            if (shortUrl.style.display === "flex") {
                shortUrl.style.display = "none";
            }
        
                Errors.style.display = "flex";
                errorPara.innerHTML = `${response.error}`
            
        } 
        else if (response.status === "success") {
            if(Errors.style.display === "flex"){
                Errors.style.display = "none";
            }
        
            shortUrl.style.display = "flex";
            shorturldata.href = `${response.data.shorturl}`
            shorturldata.innerHTML = `${response.data.shorturl}`
    
        }
    }
}

const clearFields = () => {
    let url = document.querySelector("#input");
    url.value = '';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleSubmit();
    clearFields();
})