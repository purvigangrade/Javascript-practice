

    let promise = new Promise((resolve, reject) => {
    resolve("Hello JavaScript");
    });
     
    promise
    .then( function (result1){
        console.log(result1);
        return new Promise((resolve,reject) =>{
            resolve("GFG is awesome");
        })
    })
    .then((result2) => {
        console.log(result2);
    });
