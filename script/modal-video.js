document.addEventListener('DOMContentLoaded', function () {
    // Ensure the code runs after the DOM is fully loaded
    const testimonialModal = document.getElementById('testimonialModal');
    const testimonialVideo = document.getElementById('testimonialVideo');
  
    if (testimonialModal && testimonialVideo) {
      // Add event listener to play the video when modal is shown
      testimonialModal.addEventListener('shown.bs.modal', function () {
        testimonialVideo.play(); // Play the video
      });
  
      // Add event listener to pause and reset the video when modal is hidden
      testimonialModal.addEventListener('hidden.bs.modal', function () {
        testimonialVideo.pause(); // Pause the video
        testimonialVideo.currentTime = 0; // Reset video to start
      });
    }
  });
  