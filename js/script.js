///////////////////////////////////////////////////////////


// const h1 = document.querySelector(".header");
// console.log(h1);


// h1.addEventListener('click', function(){
//   h1.textContent = "kuy";
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem"
// });


// set current year 
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
///////////////////////////////////////////////////////////
// make mobile navigation work

const navbutton = document.querySelector(".nav-button");
const header = document.querySelector(".main-menu");

navbutton.addEventListener('click', function () {
  header.classList.toggle('menu-open');
});

//smooth scrolling
// query every link
const allLink = document.querySelectorAll("a:link");
// console.log(allLink);

// make it individual link by using foreach loop
allLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // get attribute  href from link query from top
    const href = link.getAttribute('href');

    if (href === '#') window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (href !== '#' && href.startsWith('#')) {
      // select id element from href for scrolling
      const el = document.querySelector(href);
      // command to scrool to each section
      el.scrollIntoView({
        behavior: "smooth"
      })
    }
    // if link have classlist name menu-link then open and close nav bar
    if (link.classList.contains("menu-link")) {
      header.classList.toggle('menu-open');
    }
  });
});
///////////////////////////////////////////////////////////

// Fixing flexbox gap property missing in some Safari versions


function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/