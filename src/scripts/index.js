fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=d08ff880425144bb8d2bf082a55f6d7b')
.then(
    function (res){
        if(res.status !== 200){
            console.log('Not able to get data :(  Error No', res.status);
            return;
        }
        res.json().then(function(data){
            console.log(data);
        });
    }
);
