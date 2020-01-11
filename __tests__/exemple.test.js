function soma(a, b) {
    return a + b;
}

test('if a call some function with 4 or 5 it should return 9', () => {
    const result = soma(4, 5);

    expect(result).toBe(9);
});
