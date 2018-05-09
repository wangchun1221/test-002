function anagram(str){
    // var result=[]

    // if(str.length===0)
    // return result

    if(!str){
        return []
    }

    if(str.length===1){
        return [str]
    }

    if(str.length===2){
        return [str[0]+str[1],str[1]+str[0]]
    }

    var result=[];
    for(var i=0;i<str.length;i++){
        for(var j=0;j<2;j++){
            result.push(str[i]+anagram(drop(str,i))[j])
        }
    }
 
    

    // result.push(str[1]+anagram(drop(str,1))[0])
    // result.push(str[1]+anagram(drop(str,1))[1])

    // result.push(str[2]+anagram(drop(str,2))[0])
    // result.push(str[2]+anagram(drop(str,2))[1])

    // return result


    // if(str.length===3){
    //     return []
    // }
    // result.push(str);
    // return result

}


function drop(str,n){
    var result=""

    for(i=0;i<str.length;i++){
        if(i===n){
            continue
        }
        result +=str[n]
    }
    return result
}


module.exports = anagram