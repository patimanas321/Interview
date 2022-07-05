// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

function generateParenthesis(n) {
    const generate = (openCount, closeCount, prefix = '', res = []) => {
        if (openCount === 0 && closeCount === 0) {
            res.push(prefix);
            return res;
        }

        const options = getValidOptions(openCount, closeCount);
        options.forEach(paren => {
            generate(
                paren === '(' ? openCount - 1 : openCount,
                paren === ')' ? closeCount - 1 : closeCount,
                prefix + paren,
                res
            );
        });

        return res;
    };

    const getValidOptions = (openCount, closeCount) => {
        // Equally used
        if (openCount === closeCount) {
            return ['('];
        }
        // Only closing remaining
        if (openCount === 0) {
            return [')'];
        }

        return ['(', ')'];
    };

    return generate(n, n);
}

console.log(JSON.stringify(generateParenthesis(4)));