// Fuente:
// https://www.tutorialspoint.com/how-to-add-an-active-class-on-click-event-in-a-custom-list-group-in-bootstrap

function activeLinkOn(event) {
    let activeTags = document.getElementsByClassName('active');
    if (activeTags.length > 0)
        activeTags[0].className = activeTags[0].className.replace(' active', '');
    event.target.className += ' active';
};