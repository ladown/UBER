"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector(`.hamburger`);
    const navMenu = document.querySelector(`.menu`);
    const menuItem = document.querySelectorAll(`.menu_item`);

    hamburgerBtn.addEventListener(`click`, () => {
        navMenu.classList.toggle(`menu_active`);
        hamburgerBtn.classList.toggle(`hamburger_active`);
    });

    menuItem.forEach((item) => {
        item.addEventListener(`click`, () => {
            navMenu.classList.toggle(`menu_active`);
            hamburgerBtn.classList.toggle(`hamburger_active`);
        });
    });
});