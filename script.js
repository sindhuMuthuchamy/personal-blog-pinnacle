<script>
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    );
</script>
// footer
document.querySelectorAll('footer button, header .subscribe-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 8px 12px rgba(56, 178, 172, 0.5)';
        button.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseout', () => {
        button.style.boxShadow = 'none';
        button.style.transform = 'none';
    });
});
