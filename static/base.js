const header=document.getElementById('site-header')


function changeheader(){
    if (header.classList.contains('header-transparent')){
        if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
    }
}

window.addEventListener('scroll',changeheader);

changeheader()


