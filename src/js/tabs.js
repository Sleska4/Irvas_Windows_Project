const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(el => {
            el.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    }

    function showTabContent(index= 0) {
        content[index].style.display = 'block';
        tab[index].classList.add(activeClass)
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains(tabSelector.replace(/\./, ""))
        || target.parentNode.classList.contains(tabSelector.replace(/\./, ""))){
            tab.forEach((item, index) => {
                if( target == item || target.parentNode == item){
                    hideTabContent();
                    showTabContent(index);
                }
            })
        }
    })
}

export default tabs;


