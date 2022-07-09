class MinHeap {
    heap = [];

    isEmpty() {
        return this.heap.length === 0;
    }

    size () {
        return this.heap.length;
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length -1, this.heap);
    }

    remove() {
        this.swap(0, this.heap.length - 1, this.heap);
        const valueToRemove = this.heap.pop();
        this.shiftDown(0, this.heap.length - 1, this.heap);

        return valueToRemove;
    }

    peek() {
        return this.heap[0];
    }

    shiftUp(currentIndex, heap) {
        let parentIndex = Math.floor((currentIndex - 1) / 2);
        while (currentIndex > 0 && heap[currentIndex] < heap[parentIndex]) {
            this.swap(currentIndex, parentIndex, heap);
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }

    shiftDown(currentIndex, endIndex, heap) {
        let childOneIndex = currentIndex * 2 + 1;
        while (childOneIndex <= endIndex) {
            const childTwoIndex = (currentIndex * 2 + 2) <= endIndex 
                ? (currentIndex * 2 + 2)
                : -1;
            let indexToSwap;
            if (childTwoIndex !== -1 && heap[childOneIndex] < heap[childOneIndex]) {
                indexToSwap = childTwoIndex;
            } else {
                indexToSwap = childOneIndex;
            }
            if (heap[indexToSwap] < heap[currentIndex]) {
                this.swap(currentIndex, indexToSwap, heap);
                currentIndex = indexToSwap;
                childOneIndex = currentIndex * 2 + 1;
            } else {
                return;
            }
        }
    }

    swap (i, j, heap) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }
}


function sortKSortedArray(array, k) {
    const minHeap = new MinHeap();
    const res = [];

    for (const num of array) {
        minHeap.insert(num);

        if (minHeap.size() > k) {
            res.push(minHeap.remove());
        }
    }

    while (!minHeap.isEmpty()) {
        res.push(minHeap.remove());
    }

    return res;
}

console.log(
    sortKSortedArray([3, 2, 1, 5, 4, 7, 6, 5], 3)
);
