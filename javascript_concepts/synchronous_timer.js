const asyncTimer = n => {
    for (let i = 0; i < n; i++) {
        setTimeout(() => console.log(i), 2500)
    }
}

const syncTimer = async n => {
    const resolveTimer = (val) => new Promise(
        (resolve) => setTimeout(() => {
            console.log(val)
            return resolve();
        }, 2500)
    )

    for (let i = 0; i < n; i++) {
        await resolveTimer(i);
    }
}

asyncTimer(5);
syncTimer(5);