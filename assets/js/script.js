'use strict';

/**
 * Mobile Navbar Toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNavbar);

/**
 * Header Active
 */

const header = document.querySelector("[data-header]");

const handleScroll = () => {
  const shouldAddClass = window.scrollY > 50;
  header.classList.toggle("active", shouldAddClass);
};

window.addEventListener("scroll", handleScroll);
