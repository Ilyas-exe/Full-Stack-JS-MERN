/**
 * @param {string} s
 * @return {boolean}
 */
// function isValid(s) {
//     s = s.split('')
//     const opened = ['(', '[', '{']
//     const closed = [')', ']', '}']
//     let t = 0
//     for (let i = 0; i < s.length; i++) {
//         if (closed.includes(s[0])) return false
//         if (opened.includes(s[s.length - 1])) return false
//         if (opened.includes(s[i])) {
//             for (let j = i + 1; j < s.length; j++) {
//                 if (closed[opened.indexOf(s[i])] == s[j]) {
//                     t = 1
//                     break
//                 }

//                 t = 0
//             }
//         }
//     }
//     if (t == 0) { return false } else { return true }
// };
function isValid(s) {
    s = s.split('')
    const opened = ['(', '[', '{']
    const closed = [')', ']', '}']
    let stack = [];
    let skipIndex = [];
    if (closed.includes(s[0])) return false
    if (opened.includes(s[s.length - 1])) return false
    for (let i = 0; i < s.length; i++) {
        if (!(skipIndex.includes(i))) {
            if (opened.includes(s[i])) {
                stack.push(s[i])
                for (let j = i + 1; j < s.length; j++) {
                    if (!(skipIndex.includes(j))) {
                        if (s[j] == closed[opened.indexOf(s[i])]) {
                            stack.push(s[j])
                            skipIndex.push(j)
                        }
                    }
                }
            } else if (closed.includes(s[i])) {
                for (let j = stack.length-1; j > -1; j--) {
                    if (!(skipIndex.includes(j))) {
                        if (stack[j] == opened[closed.indexOf(s[i])]) {
                            stack.push(s[j])
                            skipIndex.push(i)
                        }
                    }
                }
            }
        }
    }
    return true

};
console.log(isValid('()'))