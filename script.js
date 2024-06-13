document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');
    const collapsibles = document.querySelectorAll('.collapsible h3');

    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    function deactivateLinks() {
        links.forEach(link => {
            link.classList.remove('active');
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');

            hideAllSections();
            deactivateLinks();

            document.getElementById(target).classList.add('active');
            this.classList.add('active');
        });
    });

    // Initially display the home section
    document.getElementById('home').classList.add('active');

    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
