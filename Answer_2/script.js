document.addEventListener('DOMContentLoaded', function() {
    const progressCircle = document.getElementById('progress-circle');
    const progressText = document.getElementById('progress-text');
    const progress = 4000; 
    
    const degrees = progress /100* 180;
    
    
    progressCircle.style.setProperty('--rotation', degrees + 'deg');
    progressCircle.style.transform = `rotate(${degrees}deg)`;

    
    progressText.textContent = `${progress}%`;
});

