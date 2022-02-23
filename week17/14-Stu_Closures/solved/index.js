// TODO: Complete the 'counter' function below.
function counter() {
    let count = 0;

    return { 
        increment: () => {
            count ++;
            return count;
        },
    };
}

const run = counter();
run.increment();

module.exports = counter;
