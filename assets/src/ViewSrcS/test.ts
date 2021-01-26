function addToArrayForm(A:[], K) {
    let strings = K.toString().split("").reverse()
    console.log(strings)
    let len = A.length
    A.reduceRight((p,val,idx,arr)=>{
        let i = len- idx
        console.log(i)
        console.log(p,val,idx,arr)
        return p
    })
    return []
};
