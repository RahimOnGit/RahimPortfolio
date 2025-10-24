document.addEventListener('DOMContentLoaded', function() {
  const hireButton = document.getElementById('hireButton');

  if (hireButton) {
    hireButton.addEventListener('click', function() {
      // Option 1: Open email client
      window.location.href = 'mailto:abdalraheem.saif7777@gmail.com?subject=Job Opportunity&body=Hello Rahim, I would like to discuss a potential opportunity with you.';

      // Option 2: Open contact form/modal (uncomment if you prefer)
      // openContactModal();

      // Option 3: Scroll to contact section (if you have one)
      // document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Add hover effects
    hireButton.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });

    hireButton.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  }
});

// Optional: If you want a modal contact form
function openContactModal() {
  // Create a simple modal
  const modal = document.createElement('div');
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

  modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 500px; width: 90%;">
            <h2>Get In Touch</h2>
            <form id="contactForm">
                <input type="text" placeholder="Your Name" required style="width: 100%; margin: 0.5rem 0; padding: 0.5rem;">
                <input type="email" placeholder="Your Email" required style="width: 100%; margin: 0.5rem 0; padding: 0.5rem;">
                <textarea placeholder="Your Message" required style="width: 100%; margin: 0.5rem 0; padding: 0.5rem; height: 100px;"></textarea>
                <button type="submit" style="background: #000; color: white; padding: 0.5rem 1rem; border: none; cursor: pointer;">Send</button>
                <button type="button" onclick="this.closest('.modal-container').remove()" style="background: #666; color: white; padding: 0.5rem 1rem; border: none; cursor: pointer; margin-left: 0.5rem;">Close</button>
            </form>
        </div>
    `;

  modal.querySelector('#contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
    modal.remove();
  });

  document.body.appendChild(modal);

  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.remove();
    }
  });
}
