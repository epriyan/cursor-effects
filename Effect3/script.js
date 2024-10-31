const cursor = document.querySelector('.cursor');
const cursor_dot = document.querySelector('.cursor_dot');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    cursor_dot.setAttribute("style", "top: "+(e.pageY - 2)+"px; left: "+(e.pageX - 2)+"px;")
})