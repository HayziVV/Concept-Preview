const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');

   
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        navLinks.forEach(nav => {
            nav.classList.remove('active');
        });


        const targetSection = document.getElementById(targetId);
        targetSection.classList.remove('hidden');
        
        this.classList.add('active');
    });
});