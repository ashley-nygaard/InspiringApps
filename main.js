

function setupDots() {
    location.reload();
}

// dragstart event
function moveDot(event){
    event.dataTransfer.setData("text", event.target.id);
    event.dataTransfer.dropEffect = "move";
}

// dragover event
function validDrop(event){
    event.preventDefault();
}

// drop event
function drop(event, color) {
    event.preventDefault();
    let showText = document.getElementById("helpful-text");
    let dotSelected = event.dataTransfer.getData("text"); // id of element attached to DRAGEVENT

    if(event.target.parentElement.id !== 'logo' && event.target.parentElement.childElementCount > 0  ){
        return showError('duplicate', showText);
    }

    if(dotSelected.includes(color)){
        event.target.appendChild(document.getElementById(dotSelected));
        if(document.getElementById('dots').children.length === 0){
            showText.style.display = 'block';
            showText.style.color = "green";
            showText.innerHTML= "Congratulations!! You did it!"
        }
    }

    else {
        showError('incorrect', showText)
    }

}

function showError(type, showText){
    showText.style.display = 'block';
    switch(type){
        case 'incorrect':
            showText.innerHTML= "Nice try, but that was an incorrect guess!";
            break;
        case 'duplicate':
            showText.innerHTML= "Oops!! There is already a dot there!";

    }
    setTimeout(() => {
        showText.style.display = 'none';
    }, 3000);
}

