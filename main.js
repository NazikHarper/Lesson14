(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_fvh6bRMXyxFM0VuHUA74z');
})();
window.onload = function() {
    document.getElementById('contat-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_axryuau', 'template_7ubyzzq', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}