const stringLength=(string)=>{
    if(string.length>0 && string.length <10){
    return string.length;
    } else {
        throw new Error('String is empty or very long');
    }
}
module.exports= stringLength;