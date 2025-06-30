const inputs = document.querySelectorAll('.submit_content');

inputcheck = () => {
    for (i=0;i<inputs.length;i++){
        if (inputs[i].children[0].value===""){
            inputs[i].classList.remove('filling')
        } else {
            inputs[i].classList.add('filling')
        }
    }
}

window.oninput = ()=>{inputcheck()};
window.onload = ()=>{inputcheck()};



// const test = document.querySelectorAll('.submit_content');
// console.log(inputs[0].children[1].value);