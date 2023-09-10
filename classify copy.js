function classifyVideo() {

    let idToken = sessionStorage.getItem('idToken'),  
        accessToken = sessionStorage.getItem('accessToken'),
        video = document.getElementById('video').src;

    fetch(
        "https://8u49ci7gfi.execute-api.ap-southeast-1.amazonaws.com/alpha",
        { 
            method: 'POST',
            body: JSON.stringify({
                "video":video
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization':idToken
            }

        })
        
        .then (response => {
            console.log(response);
            response.json();
        })

        .then (result => {
            /* if (result['statusCode'] == 200) {
                alert("Successfully classify the video");
            } else {
                alert("Error in classifying the video");
            } */
            console.log(result);
            alert(JSON.stringify(result));
        })

        .catch (error => console.log('error', error));
    
}
