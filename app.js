const openNavbar = () => {
    document.getElementById('navbar').style.cssText = `display:block;
    padding:5px`
    document.getElementById('openNavbar').style.display = 'none'
    document.getElementById('close-nav').style.display = 'block';
}

const closeNavbar = () => {
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('main-container').style.cssText = `width:100%`;
    document.getElementById('openNavbar').style.display = 'block';
}

const handleFormSubmit = () => {
    event.preventDefault();
    document.getElementById('contact-info').style.display = 'none';
    document.getElementById('contact-reply').style.display = 'block';
}