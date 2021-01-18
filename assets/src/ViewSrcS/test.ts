// function accountsMerge(accounts: string[][]): string[][] {
//     let map = new Map()
//     accounts.forEach((val, idx, arr) => {
//         let key = val[0];
//         val.splice(0, 1)
//         if (!map.has(key)) {
//             map.set(key, [val])
//         } else {
//             let list = map.get(key)
//             list.push(val)
//             map.set(key, list)
//         }
//     })
//     console.log(map)
//     let ddd = []
//
//
//     map.forEach((val, key) => {
//         let a = val
//         for (let i = 0; i < a.length - 1; i++) {
//             console.log("i", i)
//             for (let j = i + 1; j < a.length; j++) {
//                 console.log("j", j)
//                 let res = a[i].filter(v => {
//                     return a[j].includes(v)
//                 })
//                 if (res.length > 0) {
//                     a[i] = [...new Set(a[i].concat(a[j]))]
//                     a.splice(j, 1)
//                 }
//                 console.log(a[i], a[j], res)
//             }
//         }
//
//
//         console.log(a)
//
//         if (a.lenth == 2) {
//             let res = a[0].filter(v => {
//                 return a[1].includes(v)
//             })
//             if(res.length > 0){
//                 a = [...new Set(a[0].concat(a[0]))]
//
//             }
//         }
//         a.forEach((v, i, a) => {
//
//             v = v.sort((d, f) => {
//                 let len = d.length
//                 for (let i = 0; i < len; i++) {
//                     if (d[i] != f[i]) {
//                         if (f[i].charCodeAt() > d[i].charCodeAt()) return -1
//                     }
//                 }
//             })
//             ddd.push([key, ...new Set(v)])
//         })
//     })
//     console.log(ddd)
//     return []
// };
//
//
