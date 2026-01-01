// SIMPLIFIED BATTS MARKETING SITE - 2026

// 1. Initialize
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buttons-section').style.display = 'flex';
});

// 2. Video files
const videoFiles = {
    writing: 'writing-intro.mp4',
    music: 'music-intro.mp4', 
    art: 'art-intro.mp4'
};

// 3. Enter a world with video
function enterWorld(world) {
    // Hide homepage
    document.querySelector('.logo-section').style.display = 'none';
    document.getElementById('buttons-section').style.display = 'none';
    
    // Get video player
    const videoPlayer = document.getElementById('video-player');
    const videoElement = document.getElementById('world-video');
    
    // Set and play video (muted for autoplay)
    videoElement.src = videoFiles[world];
    videoElement.muted = true;
    videoPlayer.style.display = 'flex';
    videoElement.play();
    
    // When video ends, show the page
    videoElement.onended = function() {
        videoPlayer.style.display = 'none';
        if (world === 'writing') {
            showWritingPage();
        } else if (world === 'music') {
            showMusicPage();
        } else if (world === 'art') {
            showArtPage();
        }
    };
}

// 4. Skip video
function skipVideo() {
    const videoElement = document.getElementById('world-video');
    const videoPlayer = document.getElementById('video-player');
    
    videoElement.pause();
    videoPlayer.style.display = 'none';
    
    // Check which video was playing
    const videoSrc = videoElement.src;
    if (videoSrc.includes('writing')) {
        showWritingPage();
    } else if (videoSrc.includes('music')) {
        showMusicPage();
    } else if (videoSrc.includes('art')) {
        showArtPage();
    } else {
        goBackHome();
    }
}

// 5. WRITING PAGE - SIMPLIFIED
function showWritingPage() {
    const page = document.getElementById('writing-page');
    
    page.innerHTML = `
        <!-- Back Button -->
        <button onclick="goBackHome()" style="
            position: fixed; top: 20px; left: 20px; 
            background: #1e90ff; color: white; 
            padding: 12px 25px; border: none; 
            border-radius: 30px; 
            font-family: 'Luckiest Guy', cursive; 
            font-size: 1.1rem; cursor: pointer; z-index: 1000;
        ">
            <i class="fas fa-arrow-left"></i> Back Home
        </button>
        
        <!-- Content -->
        <div style="padding: 80px 20px 40px; max-width: 1200px; margin: 0 auto;">
        
            <!-- Title -->
            <h1 style="font-family: 'Luckiest Guy', cursive; font-size: 3rem; color: white; text-align: center; margin-bottom: 50px;">
                Writing & Books
            </h1>
            
            <!-- Author Intro -->
            <div style="text-align: center; margin-bottom: 50px;">
                <p style="color: #ccc; font-size: 1.2rem; line-height: 1.6; max-width: 800px; margin: 0 auto 30px;">
                    Explore the literary world of Desmond Batts—where street wisdom meets spiritual insight, 
                    and every story is a journey toward truth and transformation.
                </p>
            </div>
            
            <!-- Books Showcase -->
            <div style="display: flex; justify-content: center; gap: 40px; margin-bottom: 60px; flex-wrap: wrap;">
                <!-- Book 1 -->
                <div style="text-align: center; width: 200px;">
                    <img src="images/think-big-cover.png" alt="Think Big and Live Large" 
                         style="width: 200px; height: 300px; border-radius: 8px; object-fit: cover; margin-bottom: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);">
                    <p style="color: white; font-weight: bold;">Think Big and Live Large</p>
                </div>
                
                <!-- Book 2 -->
                <div style="text-align: center; width: 200px;">
                    <img src="images/mind-garden-cover.png" alt="The Mind Garden" 
                         style="width: 200px; height: 300px; border-radius: 8px; object-fit: cover; margin-bottom: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);">
                    <p style="color: white; font-weight: bold;">The Mind Garden</p>
                </div>
                
                <!-- Book 3 -->
                <div style="text-align: center; width: 200px;">
                    <img src="images/random-af-cover.jpg" alt="Random AF" 
                         style="width: 200px; height: 300px; border-radius: 8px; object-fit: cover; margin-bottom: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);">
                    <p style="color: white; font-weight: bold;">Random AF</p>
                </div>
            </div>
            
            <!-- SINGLE AMAZON AUTHOR LINK -->
            <div style="text-align: center; margin-bottom: 60px;">
                <a href="https://www.amazon.com/stores/Desmond-Batts/author/B0F7851XBF" target="_blank" 
                   style="display: inline-block; background: #FF9900; color: black; padding: 15px 35px; border-radius: 30px; text-decoration: none; font-family: 'Luckiest Guy', cursive; font-size: 1.5rem; letter-spacing: 1px; transition: all 0.3s;">
                    <i class="fab fa-amazon"></i> View All Books on Amazon
                </a>
                <p style="color: #ccc; margin-top: 15px; font-size: 1rem;">
                    Visit my Amazon Author Page to explore all available books
                </p>
            </div>
            
            <!-- Script Section -->
            <div style="background: rgba(255,107,139,0.1); border-radius: 15px; padding: 30px; margin-bottom: 50px;">
                <h3 style="font-family: 'Luckiest Guy', cursive; font-size: 2rem; color: white; margin-bottom: 15px;">
                    Werewolves in Brooklyn
                </h3>
                <p style="color: #ff6b8b; font-size: 1.2rem; font-style: italic; margin-bottom: 20px;">
                    "Get Out meets Attack the Block with the visceral body horror of An American Werewolf in London."
                </p>
                <a href="mailto:battsmarketing@gmail.com?subject=Script Inquiry: Werewolves in Brooklyn" 
                   style="display: inline-block; background: #ff6b8b; color: white; padding: 12px 30px; border-radius: 30px; text-decoration: none; font-weight: bold;">
                    Inquire About Script
                </a>
            </div>
            
            <!-- Coming Soon -->
            <div style="text-align: center; padding: 30px; background: rgba(255,255,255,0.03); border-radius: 15px;">
                <h3 style="font-family: 'Luckiest Guy', cursive; font-size: 1.8rem; color: #d4af37; margin-bottom: 15px;">
                    More Stories Coming Soon
                </h3>
                <p style="color: #ccc; line-height: 1.6;">
                    With multiple books in development including "Beneath the Cherry Blossom Tree" and "The Aurora Cycle" trilogy, 
                    the journey continues. Stay tuned for new releases.
                </p>
            </div>
            
        </div>
    `;
    
    page.style.display = 'flex';
}

// 6. MUSIC PAGE - SIMPLIFIED
function showMusicPage() {
    const page = document.getElementById('music-page');
    
    page.innerHTML = `
        <!-- Back Button -->
        <button onclick="goBackHome()" style="
            position: fixed; top: 20px; left: 20px; 
            background: #ff6b8b; color: white; 
            padding: 12px 25px; border: none; 
            border-radius: 30px; 
            font-family: 'Luckiest Guy', cursive; 
            font-size: 1.1rem; cursor: pointer; z-index: 1000;
        ">
            <i class="fas fa-arrow-left"></i> Back Home
        </button>
        
        <!-- Content -->
        <div style="padding: 80px 20px 40px; max-width: 1200px; margin: 0 auto;">
        
            <!-- Title -->
            <h1 style="font-family: 'Luckiest Guy', cursive; font-size: 3rem; color: white; text-align: center; margin-bottom: 50px;">
                Music & Film
            </h1>
            
            <!-- Music Intro -->
            <div style="text-align: center; margin-bottom: 50px;">
                <p style="color: #ccc; font-size: 1.2rem; line-height: 1.6; max-width: 800px; margin: 0 auto 30px;">
                    Where sound meets story. Original music that moves the soul and film projects that challenge perspectives.
                </p>
            </div>
            
            <!-- YouTube Channel Link -->
            <div style="text-align: center; margin-bottom: 60px;">
                <a href="https://www.youtube.com/@BattsMarketing" target="_blank" 
                   style="display: inline-block; background: #FF0000; color: white; padding: 15px 35px; border-radius: 30px; text-decoration: none; font-family: 'Luckiest Guy', cursive; font-size: 1.5rem; letter-spacing: 1px; transition: all 0.3s;">
                    <i class="fab fa-youtube"></i> Visit YouTube Channel
                </a>
                <p style="color: #ccc; margin-top: 15px; font-size: 1rem;">
                    Subscribe to hear all original music and watch film projects
                </p>
            </div>
            
            <!-- Music Stats -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 60px; text-align: center;">
                <div style="padding: 25px; background: rgba(255,255,255,0.05); border-radius: 15px;">
                    <div style="font-size: 2.5rem; color: #ff6b8b; font-weight: bold; margin-bottom: 10px;">24+</div>
                    <div style="color: #ccc;">Original Songs</div>
                </div>
                
                <div style="padding: 25px; background: rgba(255,255,255,0.05); border-radius: 15px;">
                    <div style="font-size: 2.5rem; color: #ff6b8b; font-weight: bold; margin-bottom: 10px;">2026</div>
                    <div style="color: #ccc;">New Releases Coming</div>
                </div>
                
                <div style="padding: 25px; background: rgba(255,255,255,0.05); border-radius: 15px;">
                    <div style="font-size: 2.5rem; color: #ff6b8b; font-weight: bold; margin-bottom: 10px;">Film</div>
                    <div style="color: #ccc;">Projects in Development</div>
                </div>
            </div>
            
            <!-- Film Projects -->
            <div style="background: rgba(255,107,139,0.1); border-radius: 15px; padding: 30px; margin-bottom: 50px;">
                <h3 style="font-family: 'Luckiest Guy', cursive; font-size: 2rem; color: white; margin-bottom: 15px;">
                    Film Projects
                </h3>
                <p style="color: #ccc; line-height: 1.6; margin-bottom: 20px;">
                    From music videos to short films and feature scripts in development, we're exploring visual storytelling 
                    that complements our musical journey.
                </p>
            </div>
            
        </div>
    `;
    
    page.style.display = 'flex';
}

// 7. ART PAGE - SIMPLIFIED
function showArtPage() {
    const page = document.getElementById('art-page');
    
    page.innerHTML = `
        <!-- Back Button -->
        <button onclick="goBackHome()" style="
            position: fixed; top: 20px; left: 20px; 
            background: #FFD700; color: black; 
            padding: 12px 25px; border: none; 
            border-radius: 30px; 
            font-family: 'Luckiest Guy', cursive; 
            font-size: 1.1rem; cursor: pointer; z-index: 1000;
        ">
            <i class="fas fa-arrow-left"></i> Back Home
        </button>
        
        <!-- Content -->
        <div style="padding: 80px 20px 40px; max-width: 1200px; margin: 0 auto;">
        
            <!-- Title -->
            <h1 style="font-family: 'Luckiest Guy', cursive; font-size: 3rem; color: white; text-align: center; margin-bottom: 50px;">
                Art & Design
            </h1>
            
            <!-- Art Philosophy -->
            <div style="text-align: center; margin-bottom: 50px; padding: 30px; background: rgba(212,175,55,0.1); border-radius: 15px;">
                <p style="color: #d4af37; font-size: 1.4rem; line-height: 1.6; font-style: italic; margin-bottom: 20px;">
                    "Desmond Batts (aka Dez), founder of Batts Marketing, believes there is beauty in everything if we take the time to look..."
                </p>
                <p style="color: #ccc; font-size: 1.2rem; line-height: 1.6;">
                    From murals to mosaics, we at Batts Marketing are only limited by our imaginations and the grace of God. 
                    If you need an artistic eye, reach out—and if it's God's plan, we will make it happen.
                </p>
            </div>
            
            <!-- Art Showcase -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 60px;">
                <!-- Art 1 -->
                <div style="text-align: center;">
                    <img src="images/cherry-blossom-cover.png" alt="Artwork 1" 
                         style="width: 100%; height: 250px; border-radius: 8px; object-fit: cover; margin-bottom: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);">
                    <p style="color: white;">Concept Art</p>
                </div>
                
                <!-- Art 2 -->
                <div style="text-align: center;">
                    <img src="images/aurora-cycle-trilogy-cover.png" alt="Artwork 2" 
                         style="width: 100%; height: 250px; border-radius: 8px; object-fit: cover; margin-bottom: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);">
                    <p style="color: white;">Digital Design</p>
                </div>
                
                <!-- Art 3 -->
                <div style="text-align: center;">
                    <img src="images/werewolves-brooklyn-mood.png" alt="Artwork 3" 
                         style="width: 100%; height: 250px; border-radius: 8px; object-fit: cover; margin-bottom: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);">
                    <p style="color: white;">Visual Storytelling</p>
                </div>
            </div>
            
            <!-- Services -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-bottom: 50px;">
                <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 25px;">
                    <h3 style="font-family: 'Luckiest Guy', cursive; font-size: 1.5rem; color: #d4af37; margin-bottom: 15px;">
                        Murals & Large-Scale Art
                    </h3>
                    <p style="color: #ccc; line-height: 1.6;">
                        Transform spaces with custom murals that tell stories and inspire communities.
                    </p>
                </div>
                
                <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 25px;">
                    <h3 style="font-family: 'Luckiest Guy', cursive; font-size: 1.5rem; color: #d4af37; margin-bottom: 15px;">
                        Digital & Graphic Design
                    </h3>
                    <p style="color: #ccc; line-height: 1.6;">
                        Logos, branding, book covers, and digital artwork for your creative projects.
                    </p>
                </div>
            </div>
            
            <!-- Contact CTA -->
            <div style="text-align: center; padding: 40px; background: rgba(212,175,55,0.15); border-radius: 15px;">
                <h3 style="font-family: 'Luckiest Guy', cursive; font-size: 2rem; color: #d4af37; margin-bottom: 20px;">
                    Need an Artistic Eye?
                </h3>
                <p style="color: #ccc; margin-bottom: 25px; font-size: 1.1rem;">
                    Whether it's a mural, design project, or creative consultation, let's discuss how art can enhance your vision.
                </p>
                <a href="mailto:battsmarketing@gmail.com?subject=Art Project Inquiry" 
                   style="display: inline-block; background: #d4af37; color: black; padding: 15px 35px; border-radius: 30px; text-decoration: none; font-family: 'Luckiest Guy', cursive; font-size: 1.3rem; letter-spacing: 1px;">
                    Discuss a Project
                </a>
            </div>
            
        </div>
    `;
    
    page.style.display = 'flex';
}

// 8. Go back home
function goBackHome() {
    // Hide all pages
    document.getElementById('video-player').style.display = 'none';
    document.querySelectorAll('.world-page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Reset video
    const videoElement = document.getElementById('world-video');
    videoElement.pause();
    videoElement.currentTime = 0;
    
    // Show homepage
    document.querySelector('.logo-section').style.display = 'flex';
    document.getElementById('buttons-section').style.display = 'flex';
}

// 9. ESC key to go back
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        goBackHome();
    }
});