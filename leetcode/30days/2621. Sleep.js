/**
 * @param {number} millis
 */
async function sleep(millis) {
    // function callback(resolve, reject) {
    //     setTimeout(resolve, millis)
    // }
    // return new Promise(callback)

    // return new Promise((resolve, reject) => {
    //     setTimeout(resolve, millis)
    // })

    await new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */