let btnMore1 = document.querySelector('#more2');
let currentItem1 = 4;

btnMore1.onclick = () => {
    let boxes = {...document.querySelectorAll(
        '.box_container_1 .box'
    )};

    for(var i = currentItem1; i < currentItem1 + 4; i++){
        boxes[1].style.display = 'inline-block';
    }
    currentItem1 += 4;
    if(currentItem1 <= boxes.length){
        btnMore1.style.display = 'none'
    }
}