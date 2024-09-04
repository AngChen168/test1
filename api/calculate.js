module.exports = function handler(req, res) {
    const { a, b, c } = req.body;

    // 計算判別式
    const discriminant = b * b - 4 * a * c;
    let roots;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        roots = { root1, root2 };
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        roots = { root };
    } else {
        roots = 'No real roots';
    }
    // 將計算過程和結果寫入日誌
    console.log(`Equation: ${a}x² + ${b}x + ${c} = 0`);
    console.log(`Discriminant: ${discriminant}`);
    console.log(`Roots: ${JSON.stringify(roots)}`);

    // 返回計算結果


    
    res.status(200).json({ roots });
};
