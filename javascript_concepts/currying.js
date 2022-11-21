const sum = (a, b, c, d) => {
    return a + b + c + d;
}

console.log(sum(1, 2, 3, 4));

const sum1 = a => {
    return b => {
        if (!b) return a;
        return sum1(a + b);
    }
}

console.log(sum1(1)(2)(3)(4)())