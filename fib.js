function fibinnaci(n){
    if(n <= 1 ) return n;

    return fibinnaci(n-2) + fibinnaci(n-1);
}

var a = [];
for( var i=0; i<6; i++){
    a.push(fibinnaci(i));
}

console.log(a.join(' '));
