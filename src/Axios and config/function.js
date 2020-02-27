connectServer = () => {
    axiosLocal
        .get('/test')
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}

sendRequest = (blob) => {
    let responseText
    axios
        .post('', blob)
        .then(response => {
            console.log(response.data.hypotheses[0].utterance);
            responseText = response.data.hypotheses[0].utterance
        })
        .catch(err => {
            console.log(err);
        })
    return responseText
}

module.exports = {
    connectServer,
    sendRequest
}