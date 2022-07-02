const panels = document.querySelectorAll('.panel');

//add active class on the clicked panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    })
});
//remove active class
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
