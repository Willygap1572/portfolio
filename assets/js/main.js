/*SHOW MENU*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SEND EMAIL ===============*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault()
    /*=================LOADER==================*/
    var button = document.getElementById("contact-button");
    button.disabled = true
    button.innerHTML = '<span class="contact__loader contact__button">';

    // service - templateID - #form - publicKey
    emailjs.sendForm('Portfolio', 'template_nl7zkd8', '#contact-form', 'Y2j8UWuhEfDZ-3eqC' )
    .then(()=>{
        contactForm.reset()
        button.innerHTML = 'Send Message';
        button.disabled = false
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'
        setTimeout(()=>{
             contactMessage.textContent = ''
        }, 5000);


    }, ()=> {
        contactForm.reset()
        button.innerHTML = 'Send Message';
        button.disabled = false
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
        setTimeout(()=>{
            contactMessage.textContent = ''
       }, 5000);
    })
}

contactForm.addEventListener('submit', sendEmail)


/*SHOW SCROLLUP*/

const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'): scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*SCROLLREVEAL ANIMATION*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    //reset: true
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin:'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin:'left'})
sr.reveal(`.about__image, .skills__content`, {origin:'right'})
sr.reveal(`.services__card, .projects__card`, {interval:100})

/*CHANGE LANGUAJE*/

var languageSelect = document.getElementById('nav-select')
languageSelect.addEventListener('change',()=>{
    var language = languageSelect.options[languageSelect.selectedIndex].value;
    if (language === 'ES')
    {
        location.href="es/index.html";
        languageSelect.selectedIndex = 1
    }
    else
    {
        location.href="../index.html";
        languageSelect.selectedIndex = 0
    }
})

