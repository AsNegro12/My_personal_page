const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

const addHoverClass = () => {
    box1.classList.add('hovered')
    box2.classList.add('hovered')
};

const removeHoverClass = () => {
    box1.classList.remove('hovered');
    box2.classList.remove('hovered');
};

box1.addEventListener('mouseenter', addHoverClass);
box2.addEventListener('mouseenter', addHoverClass);

box1.addEventListener('mouseleave', removeHoverClass);
box2.addEventListener('mouseleave', removeHoverClass);