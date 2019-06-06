function makeCall(url) {
    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
        });
}

makeCall("http://dummy.restapiexample.com/api/v1/employees");
