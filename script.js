document.addEventListener('DOMContentLoaded', () => {
    
    // Create stars dynamically
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100;
 
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Randomize position and size
        const size = Math.random() * (3 - 1) + 1; // Size between 1 and 3
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
        
        // Add random animation duration
        star.style.animationDuration = `${Math.random() * (2 - 1) + 1}s`; // Duration between 1s and 2s
 
        starsContainer.appendChild(star);
    }
    
    const goals = document.querySelectorAll('.goal');
     
    goals.forEach((goal, index) => {
        goal.style.transitionDelay = `${index * 100}ms`;
        goal.style.opacity = '1'; // Fade in effect
        goal.style.animation = `fadeIn 0.5s forwards`;
        goal.style.transform = 'translateY(20px)'; // Start slightly lower
        setTimeout(() => {
            goal.style.transform = 'translateY(0)';
        }, index * 100); // Delay each goal's appearance
    });
 });

 document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const countdownDate = new Date("December 31, 2024 23:59:59").getTime();
 
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
 
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
        // Output the result in elements with corresponding ids
        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
 
        // If the countdown is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    };
 
    // Update the countdown every second
    const x = setInterval(updateCountdown, 1000);
 
    // Initial call to display immediately
    updateCountdown();
 
    // Existing star and comet creation code...
 });