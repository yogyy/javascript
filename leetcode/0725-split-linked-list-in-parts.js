function splitListToParts(root, k) {
    const res = new Array(k).fill(null);
    let len = 0;
    let t = root;
    while (t) {
        len++;
        t = t.next;
    }
    let avg = Math.floor(len / k);
    let ext = len % k;
    let i = 0;
    while (i < k && root) {
        res[i] = root;
        let j = 1;
        while (j < avg + (i < ext)) {
            root = root.next;
            j++;
        }
        let t = root.next;
        root.next = null;
        root = t;
        i++;
    }
    return res;
}

