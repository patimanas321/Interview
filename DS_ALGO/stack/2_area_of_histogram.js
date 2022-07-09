function areaOfHistogram(buildings) {
    const prevSmallerBuilding = getPrevSmallerBuildings(buildings);
    const nextSmallerBuilding = getNextSmallerBuildings(buildings);
    let maxArea = 0;

    for (let index = 0; index < buildings.length; index++) {
        const prevSmaller = prevSmallerBuilding[index] ?? -1;
        const nextSmaller = nextSmallerBuilding[index] ?? buildings.length;
        const height = buildings[index];

        const area = (nextSmaller - prevSmaller - 1) * height;

        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
}

function getPrevSmallerBuildings(buildings) {
    const stack = [];
    const res = [];

    for (let index = 0; index < buildings.length; index++) {
        res.push(getNextSmallerFromStack(stack, index, buildings));
        stack.push(index);
    }

    return res;
}

function getNextSmallerBuildings(buildings) {
    const stack = [];
    const res = [];

    for (let index = buildings.length - 1; index >= 0; index--) {
        res.push(getNextSmallerFromStack(stack, index, buildings));
        stack.push(index);
    }

    return res.reverse();
}

function getNextSmallerFromStack(stack, numIndex, array) {
    while (stack.length > 0 && array[stack[stack.length - 1]] >= array[numIndex]) {
        stack.pop();
    }

    return stack[stack.length - 1];
}

console.log(areaOfHistogram([1, 3, 3, 2, 4, 1, 5, 3, 2]));