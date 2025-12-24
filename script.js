// Wait for page to load
window.addEventListener('DOMContentLoaded', function() {
    console.log("Batts Marketing website loaded!");
    
    // Show buttons after page loads (they fade in via CSS animation)
    document.getElementById('buttons-section').style.display = 'flex';
});

// Video files for each world (UPDATE THESE WITH YOUR ACTUAL VIDEO FILES)
const videoFiles = {
    writing: 'writing-intro.mp4',
    music: 'music-intro.mp4', 
    art: 'art-intro.mp4'
};

// Function to enter a world
function enterWorld(world) {
    console.log("Entering " + world + " world");
    
    // 1. Hide logo and buttons
    document.querySelector('.logo-section').style.display = 'none';
    document.getElementById('buttons-section').style.display = 'none';
    
    // 2. Show and play video
    const videoPlayer = document.getElementById('video-player');
    const videoElement = document.getElementById('world-video');
    
    // Set video source
    videoElement.src = videoFiles[world];
    
    // Show video player
    videoPlayer.style.display = 'flex';
    
    // Play video with sound
    videoElement.play();
    
    // When video ends, show the world page
    videoElement.onended = function() {
        showWorldPage(world);
    };
}

// Function to skip video
function skipVideo() {
    const videoElement = document.getElementById('world-video');
    videoElement.pause();
    
    // Hide video player
    document.getElementById('video-player').style.display = 'none';
    
    // Determine which world we're in based on video source
    const videoSrc = videoElement.src;
    let world = '';
    
    if (videoSrc.includes('writing')) world = 'writing';
    else if (videoSrc.includes('music')) world = 'music';
    else if (videoSrc.includes('art')) world = 'art';
    
    if (world) {
        showWorldPage(world);
    } else {
        // If we can't determine, go back home
        goBackHome();
    }
}

// Function to show world page
function showWorldPage(world) {
    // Hide video player
    document.getElementById('video-player').style.display = 'none';
    
    // Hide all world pages first
    document.querySelectorAll('.world-page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Show the selected world page
    document.getElementById(world + '-page').style.display = 'flex';
}

// Function to go back home
function goBackHome() {
    console.log("Going back home");
    
    // Hide everything
    document.getElementById('video-player').style.display = 'none';
    document.querySelectorAll('.world-page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Reset video
    const videoElement = document.getElementById('world-video');
    videoElement.pause();
    videoElement.currentTime = 0;
    
    // Show logo and buttons again
    document.querySelector('.logo-section').style.display = 'flex';
    document.getElementById('buttons-section').style.display = 'flex';
}