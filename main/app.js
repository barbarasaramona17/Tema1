function distance(first, second){

if ( first instanceof Array && second instanceof Array) {

    if(first.length==0 && second.length==0){
    return 0;
    }
    else{
        first= Array.from(new Set(first));
	    second= Array.from(new Set(second));
	    var k=0;
        for(let i = 0; i < first.length; i++) { 
        for(let j = 0; j < second.length; j++) { 
            
            if(first[i] != second[j])
            { 
                k++;
                return k;
            } 
            else{
                 if(first instanceof Array && second instanceof Array){
                    let unique1 = first.filter((o) => second.indexOf(o) === -1);
                    let unique2 = second.filter((o) => first.indexOf(o) === -1);
                    const unique = unique1.concat(unique2);
                    return unique.length;
                 }
            }
        } 
    }
     
    }
}
else{
 throw new Error(`InvalidType`);
}
}
module.exports.distance = distance








