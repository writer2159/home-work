const intervalId = setInterval(() => {

    console.log('1');

}, 10);

setTimeout(() => {
    const promise = new Promise((resolve) => {

        console.log('2');

        resolve('3');
    });


    promise
        .then((value) => {

            console.log(value);

            setTimeout(async () => {

                console.log('4');

                await sleep(0.01);

                clearInterval(intervalId);

            }, 10);
        });

    console.log('5');

}, 10);


function sleep(_second) {
    return new Promise((resolve) => {
        setTimeout(resolve, _second * 1000);
    });
}