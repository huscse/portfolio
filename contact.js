// Initialize EmailJS with your public key
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Add your EmailJS public key here
})();

// Add event listener to form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show loading state
    const btn = this.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    // Get form data
    const formData = {
        from_name: this.querySelector('input[name="from_name"]').value,
        from_email: this.querySelector('input[name="from_email"]').value,
        message: this.querySelector('textarea[name="message"]').value
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function() {
            // Show success message
            alert('Message sent successfully!');
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Reset button
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, function(error) {
            // Show error message
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
            
            // Reset button
            btn.innerHTML = originalText;
            btn.disabled = false;
        });
});