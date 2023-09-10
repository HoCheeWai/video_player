function classifyVideo() {

    var idToken = sessionStorage.getItem('idToken'),  
        accessToken = sessionStorage.getItem('accessToken'),
        video = document.getElementById('video').src;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", idToken);
    myHeaders.append("Content-Type", "text/plain");

    var raw = "{\"video\":" + "\"" + video + "\"}";

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://8u49ci7gfi.execute-api.ap-southeast-1.amazonaws.com/alpha", requestOptions)

    .then(response => response.json())
    
    .then(result => {
        console.log(result);
        if (result.hasOwnProperty('errorMessage')) {
            console.log('Fetch result has error(s): ' + result.errorMessage);
            document.getElementById('result').innerHTML = result.errorMessage;
        } else if (result.hasOwnProperty('statusCode') && result.statusCode == 200) {
            console.log('Fetch result is successful: ' + result.body);
            document.getElementById('result').innerHTML = JSON.stringify(result.body);
        } else if (result.hasOwnProperty('message')) {
            console.log('Fetch result has error(s): ' + result.message);
            document.getElementById('result').innerHTML = result.message;
        }
    })
    
    .catch(error => console.log('Fetch invocation error: ', error));
    
}
