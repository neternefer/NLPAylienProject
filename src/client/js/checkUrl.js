const checkUrl = (userInput) => {
    //Determine type of input and check for valid URL
    let dataObject = {};
    if(Client.validUrl.isWebUri(userInput) === undefined){
        dataObject = {text: userInput};
    } else {
        dataObject = {url: userInput};
    }
    return dataObject;
}

export {
    checkUrl
}
