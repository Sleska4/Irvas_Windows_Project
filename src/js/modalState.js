const modalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    const checkNum = (selector) => {
        const numInput = document.querySelectorAll(selector);
        numInput.forEach(el => {
            el.addEventListener('input', () => {
                el.value = el.value.replace(/\D/, '');
            });
        });
    }

    checkNum('#width');
    checkNum('#height');

    const bindActionToElements = (event, element, prop) => {
        element.forEach((el, index) => {
            el.addEventListener(event, () => {
                switch (el.nodeName) {
                    case 'SPAN':
                        state[prop] = index;
                        break;
                    case 'INPUT':
                        if (el.getAttribute('type') === 'checkbox'){
                            index === 0 ? state[prop] = 'Холодное': state[prop] = 'Тёплое';
                            element.forEach((box, i) => {
                                box.checked = false;
                                if(index === i){
                                    box.checked = true
                                }
                            })
                        } else{
                            state[prop] = el.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = el.value;
                }

            })
        })
    }

    bindActionToElements('click', windowForm, 'form');
    bindActionToElements('input', windowHeight, 'height');
    bindActionToElements('input', windowWidth, 'width');
    bindActionToElements('change', windowType, 'type');
    bindActionToElements('change', windowProfile, 'profile');
};

export default modalState;