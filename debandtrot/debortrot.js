let count = 0

const button = document.getElementById('btn')
const throttleFunc = (func,delay)=>{
    let timeout;
    return function(){
        if(timeout){
            return;
        }
        timeout = setTimeout(() => {
            timeout = null;
            func()
        }, delay);
    }
}

let callFunctionT = ()=>{
    console.log(count++)
}
window.addEventListener('scroll',callFunctionT = throttleFunc(callFunctionT,2000))



const debounceFunc = function debounce(func,delay){
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(() => {
            func()
        }, delay);
    }
}

let callFunctionD = ()=>{
    console.log(count++)
}

button.addEventListener('click',callFunctionD = debounceFunc(callFunctionD,1000))