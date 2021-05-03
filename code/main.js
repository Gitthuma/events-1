let btn = document.querySelector('.off');

// Add your code here

/*Create a simple event handler that causes the text inside the button (btn) to change when it is clicked on, and change back when it is clicked again.*/

btn.onclick = function(e) {
    if (btn.textContent === 'Machine is off') {
        btn.textContent = 'Machine is on';
    } else {
        btn.textContent = 'Machine is off'
    }
    
}