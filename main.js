const list = document.getElementsByTagName('ul')[0];

const itemClickHandler = (item) => {
    list.removeChild(item.nextElementSibling);
};

const buttonClickHandler = () => {
    console.log('Clicked on Button');
    
    const id = setInterval(() => {
        const index = list.children.length - 1;
        
        if (index < 0) {
            console.log('clearInterval');
            
            clearInterval(id);
            return;
        }
        
        list.removeChild(list.children[index]);
    }, 1000);
};

const inputChangeHandler = (e) => {
    const name = e.target.value;
    
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerHTML = name;
    
    const eventListener = (event) => {
        itemClickHandler(event.target);
    };
    
    item.addEventListener('click', eventListener);
    
    item.removeEventListener('click', eventListener);
    
    list.appendChild(item);
};
