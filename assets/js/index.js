
document.querySelectorAll('.breadcrumb-item .custom-link').forEach(function(link) {
    link.addEventListener('click', function() {
        console.log("clicked");
       
        document.querySelectorAll('.breadcrumb-item .custom-link').forEach(function(link) {
            link.classList.remove('clicked');
        });

        this.classList.add('clicked');
    });
});
