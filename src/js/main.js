import './slider';
import './service'
import tabs from "./tabs";
import modals from "./modals";
import forms from "./service";
import modalState from "./modalState";
import timer from "./timer";
import img from './img'

window.addEventListener('DOMContentLoaded', () => {

    let state = {};
    let deadline = '2021-12-19';

    modalState(state)
    modals();
    tabs('.glazing_slider' ,'.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(state);
    timer('.container1', deadline);
    img();
})