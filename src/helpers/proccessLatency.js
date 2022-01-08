
const processLatency = (iteration) => {
    for (let i = 0; i < iteration; i++) {
        console.log('Ahí vamos...');
    }
    return `${iteration} iteraciones realizadas`;
}

export default processLatency;