const projectObjs = document.querySelectorAll('.project_content');
const serviceObjs = document.querySelectorAll('.service_card');
//ratio height/width
let ratio = [2/3,2/3,2/3,2/3]


let gird1 = document.querySelector('.service_grid');
let gird2 = document.querySelector('.projects_grid');

gridfit = () => {
    width = window.innerWidth;
    if(width<900){
        gird1.style.gridTemplateColumns = '1fr'
        gird2.style.gridTemplateColumns = '1fr'
    } else if (width<1300){
        gird1.style.gridTemplateColumns = 'repeat(2,1fr)'
        gird2.style.gridTemplateColumns = 'repeat(2,1fr)'
    } else {
        gird1.style.gridTemplateColumns = 'repeat(4,1fr)'
        gird2.style.gridTemplateColumns = 'repeat(4,1fr)'
    }
}



applyGridHeight = () => {
    for (i = 0;i<projectObjs.length;i++){
        let gridHeight = 0;
        gridHeight = projectObjs[i].offsetWidth*ratio[i];
        projectObjs[i].style.height = gridHeight+"px";
    }

    for (i = 0;i<serviceObjs.length;i++){
        let gridHeight = 0;
        gridHeight = serviceObjs[i].offsetWidth*ratio[i];
        serviceObjs[i].style.height = gridHeight+"px";
    }
}

window.onresize = ()=>{
    gridfit();
    applyGridHeight();
}; 

window.onload = ()=>{
    gridfit();
    applyGridHeight();
}; 



// console.log(projectObj);
// console.log(ratio[0]);


