const coll = [5, 8, 31, 14, 12, 21, 29, 11, 9, 99];

const bubbleSort = (coll) => {
    let stepsCount = coll.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < stepsCount; i += 1) {
            if (coll[i] > coll[i + 1]) {
                const temp = coll[i];
                coll[i] = coll[i + 1];
                coll[i + 1] = temp;
                swapped = true;
            }
        }
        stepsCount += 1;
    } while (swapped);
    return coll;
};

console.log(bubbleSort(coll));