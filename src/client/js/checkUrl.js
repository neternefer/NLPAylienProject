const checkUrl = (userInput) => {
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
