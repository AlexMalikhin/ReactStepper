export const getValue = (object, key) =>{
    if(object[key] === undefined){
        return ''
    }
    return object[key]
}