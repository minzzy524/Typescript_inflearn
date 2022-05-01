let arr22 = [
    { age : 30, name : '민성'},
    { age : 30, name : '민성2'},
    { age : 32, name : '민성3'},
    { age : 33, name : '민성4'},
]

let asdasd = arr22.filter(function(item){
    if(item.age==30)
    return item;
})

console.log(asdasd);