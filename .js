async function multiply(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 == 0) {
                resolve("even");
            } else {
                reject("odd");
            }
        }, 2000);
    });
}

async function iseven() {
    console.log("number is");
    try {
        console.log(await multiply(4));
    } catch (error) {
        console.error(error);
    }
}

iseven();
