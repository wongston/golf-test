// Golf player data with realistic stats
const golfersData = [
    {
        id: 1,
        name: "Tiger Woods",
        country: "🇺🇸 USA",
        avatar: "TW",
        stats: {
            worldRanking: 15,
            majorWins: 15,
            pgatourWins: 82,
            drivingDistance: 302.1,
            drivingAccuracy: 61.3,
            greensInRegulation: 66.2,
            putting: 1.714,
            scoringAverage: 69.3,
            earnings: 120445109,
            cutsMade: 142,
            top10s: 198
        }
    },
    {
        id: 2,
        name: "Rory McIlroy",
        country: "🇮🇪 Ireland",
        avatar: "RM",
        stats: {
            worldRanking: 2,
            majorWins: 4,
            pgatourWins: 23,
            drivingDistance: 326.3,
            drivingAccuracy: 57.8,
            greensInRegulation: 68.9,
            putting: 1.732,
            scoringAverage: 69.1,
            earnings: 65789432,
            cutsMade: 156,
            top10s: 89
        }
    },
    {
        id: 3,
        name: "Jon Rahm",
        country: "🇪🇸 Spain",
        avatar: "JR",
        stats: {
            worldRanking: 1,
            majorWins: 2,
            pgatourWins: 11,
            drivingDistance: 309.2,
            drivingAccuracy: 63.1,
            greensInRegulation: 71.2,
            putting: 1.698,
            scoringAverage: 68.9,
            earnings: 45321876,
            cutsMade: 98,
            top10s: 67
        }
    },
    {
        id: 4,
        name: "Scottie Scheffler",
        country: "🇺🇸 USA",
        avatar: "SS",
        stats: {
            worldRanking: 3,
            majorWins: 2,
            pgatourWins: 12,
            drivingDistance: 314.7,
            drivingAccuracy: 64.8,
            greensInRegulation: 72.1,
            putting: 1.689,
            scoringAverage: 68.7,
            earnings: 38976543,
            cutsMade: 87,
            top10s: 54
        }
    },
    {
        id: 5,
        name: "Viktor Hovland",
        country: "🇳🇴 Norway",
        avatar: "VH",
        stats: {
            worldRanking: 4,
            majorWins: 0,
            pgatourWins: 6,
            drivingDistance: 311.8,
            drivingAccuracy: 59.2,
            greensInRegulation: 69.7,
            putting: 1.745,
            scoringAverage: 69.2,
            earnings: 28654321,
            cutsMade: 76,
            top10s: 42
        }
    },
    {
        id: 6,
        name: "Xander Schauffele",
        country: "🇺🇸 USA",
        avatar: "XS",
        stats: {
            worldRanking: 5,
            majorWins: 2,
            pgatourWins: 7,
            drivingDistance: 306.4,
            drivingAccuracy: 62.7,
            greensInRegulation: 70.3,
            putting: 1.712,
            scoringAverage: 69.0,
            earnings: 34567890,
            cutsMade: 89,
            top10s: 58
        }
    },
    {
        id: 7,
        name: "Collin Morikawa",
        country: "🇺🇸 USA",
        avatar: "CM",
        stats: {
            worldRanking: 6,
            majorWins: 2,
            pgatourWins: 6,
            drivingDistance: 295.8,
            drivingAccuracy: 65.9,
            greensInRegulation: 71.8,
            putting: 1.701,
            scoringAverage: 68.8,
            earnings: 25432109,
            cutsMade: 72,
            top10s: 39
        }
    },
    {
        id: 8,
        name: "Justin Thomas",
        country: "🇺🇸 USA",
        avatar: "JT",
        stats: {
            worldRanking: 7,
            majorWins: 2,
            pgatourWins: 15,
            drivingDistance: 308.9,
            drivingAccuracy: 58.4,
            greensInRegulation: 68.1,
            putting: 1.723,
            scoringAverage: 69.4,
            earnings: 52341876,
            cutsMade: 124,
            top10s: 71
        }
    },
    {
        id: 9,
        name: "Patrick Cantlay",
        country: "🇺🇸 USA",
        avatar: "PC",
        stats: {
            worldRanking: 8,
            majorWins: 0,
            pgatourWins: 8,
            drivingDistance: 301.2,
            drivingAccuracy: 63.5,
            greensInRegulation: 69.9,
            putting: 1.695,
            scoringAverage: 69.1,
            earnings: 31789654,
            cutsMade: 94,
            top10s: 52
        }
    },
    {
        id: 10,
        name: "Matt Fitzpatrick",
        country: "🇬🇧 England",
        avatar: "MF",
        stats: {
            worldRanking: 9,
            majorWins: 1,
            pgatourWins: 2,
            drivingDistance: 289.7,
            drivingAccuracy: 68.2,
            greensInRegulation: 70.8,
            putting: 1.708,
            scoringAverage: 69.3,
            earnings: 18765432,
            cutsMade: 78,
            top10s: 34
        }
    },
    {
        id: 11,
        name: "Dustin Johnson",
        country: "🇺🇸 USA",
        avatar: "DJ",
        stats: {
            worldRanking: 12,
            majorWins: 2,
            pgatourWins: 24,
            drivingDistance: 317.9,
            drivingAccuracy: 56.8,
            greensInRegulation: 67.4,
            putting: 1.731,
            scoringAverage: 69.5,
            earnings: 74987654,
            cutsMade: 187,
            top10s: 104
        }
    },
    {
        id: 12,
        name: "Cameron Smith",
        country: "🇦🇺 Australia",
        avatar: "CS",
        stats: {
            worldRanking: 11,
            majorWins: 1,
            pgatourWins: 6,
            drivingDistance: 304.6,
            drivingAccuracy: 61.7,
            greensInRegulation: 68.8,
            putting: 1.687,
            scoringAverage: 69.2,
            earnings: 23456789,
            cutsMade: 85,
            top10s: 41
        }
    }
];

// DOM elements
const golfersGrid = document.getElementById('golfersGrid');
const searchInput = document.getElementById('searchInput');
const shuffleBtn = document.getElementById('shuffleBtn');
const modal = document.getElementById('statsModal');
const closeBtn = document.getElementById('closeBtn');
const modalBody = document.getElementById('modalBody');

let currentGolfers = [...golfersData];

// Initialize the app
function init() {
    renderGolfers(currentGolfers);
    setupEventListeners();
    addLoadingAnimation();
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    shuffleBtn.addEventListener('click', shuffleGolfers);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'Enter' && document.activeElement === searchInput) {
            e.preventDefault();
        }
    });
}

// Add loading animation to cards
function addLoadingAnimation() {
    const cards = document.querySelectorAll('.golfer-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Render golfers grid
function renderGolfers(golfers) {
    golfersGrid.innerHTML = '';
    
    golfers.forEach((golfer, index) => {
        const card = createGolferCard(golfer);
        golfersGrid.appendChild(card);
    });
    
    addLoadingAnimation();
}

// Create individual golfer card
function createGolferCard(golfer) {
    const card = document.createElement('div');
    card.className = 'golfer-card';
    card.onclick = () => showGolferStats(golfer);
    
    card.innerHTML = `
        <div class="golfer-header">
            <div class="golfer-avatar">${golfer.avatar}</div>
            <div class="golfer-info">
                <h3>${golfer.name}</h3>
                <div class="country">${golfer.country}</div>
            </div>
        </div>
        <div class="stats-preview">
            <div class="stat-item">
                <div class="stat-value">#${golfer.stats.worldRanking}</div>
                <div class="stat-label">World Rank</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${golfer.stats.majorWins}</div>
                <div class="stat-label">Majors</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${golfer.stats.pgatourWins}</div>
                <div class="stat-label">PGA Wins</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${golfer.stats.scoringAverage}</div>
                <div class="stat-label">Avg Score</div>
            </div>
        </div>
    `;
    
    return card;
}

// Show detailed golfer statistics in modal
function showGolferStats(golfer) {
    const earnings = formatCurrency(golfer.stats.earnings);
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-avatar">${golfer.avatar}</div>
            <h2 class="modal-name">${golfer.name}</h2>
            <div class="modal-country">${golfer.country}</div>
        </div>
        <div class="modal-stats">
            <div class="stats-grid">
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-trophy"></i></div>
                    <div class="detailed-stat-value">#${golfer.stats.worldRanking}</div>
                    <div class="detailed-stat-label">World Ranking</div>
                    <div class="detailed-stat-desc">Official World Golf Ranking position</div>
                </div>
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-crown"></i></div>
                    <div class="detailed-stat-value">${golfer.stats.majorWins}</div>
                    <div class="detailed-stat-label">Major Championships</div>
                    <div class="detailed-stat-desc">Masters, PGA, US Open, The Open</div>
                </div>
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-medal"></i></div>
                    <div class="detailed-stat-value">${golfer.stats.pgatourWins}</div>
                    <div class="detailed-stat-label">PGA Tour Wins</div>
                    <div class="detailed-stat-desc">Total professional victories</div>
                </div>
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-bullseye"></i></div>
                    <div class="detailed-stat-value">${golfer.stats.scoringAverage}</div>
                    <div class="detailed-stat-label">Scoring Average</div>
                    <div class="detailed-stat-desc">Average strokes per round</div>
                </div>
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-golf-ball"></i></div>
                    <div class="detailed-stat-value">${golfer.stats.drivingDistance}</div>
                    <div class="detailed-stat-label">Driving Distance (yds)</div>
                    <div class="detailed-stat-desc">Average distance off the tee</div>
                </div>
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-crosshairs"></i></div>
                    <div class="detailed-stat-value">${golfer.stats.drivingAccuracy}%</div>
                    <div class="detailed-stat-label">Driving Accuracy</div>
                    <div class="detailed-stat-desc">Percentage of fairways hit</div>
                </div>
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-flag"></i></div>
                    <div class="detailed-stat-value">${golfer.stats.greensInRegulation}%</div>
                    <div class="detailed-stat-label">Greens in Regulation</div>
                    <div class="detailed-stat-desc">Percentage of greens hit in regulation</div>
                </div>
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-golf-club"></i></div>
                    <div class="detailed-stat-value">${golfer.stats.putting}</div>
                    <div class="detailed-stat-label">Putting Average</div>
                    <div class="detailed-stat-desc">Average putts per green in regulation</div>
                </div>
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-dollar-sign"></i></div>
                    <div class="detailed-stat-value">${earnings}</div>
                    <div class="detailed-stat-label">Career Earnings</div>
                    <div class="detailed-stat-desc">Total prize money won</div>
                </div>
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="detailed-stat-value">${golfer.stats.cutsMade}</div>
                    <div class="detailed-stat-label">Cuts Made</div>
                    <div class="detailed-stat-desc">Tournaments played to weekend</div>
                </div>
                <div class="detailed-stat">
                    <div class="detailed-stat-icon"><i class="fas fa-star"></i></div>
                    <div class="detailed-stat-value">${golfer.stats.top10s}</div>
                    <div class="detailed-stat-label">Top 10 Finishes</div>
                    <div class="detailed-stat-desc">Number of top 10 tournament finishes</div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation to stats
    setTimeout(() => {
        const stats = document.querySelectorAll('.detailed-stat');
        stats.forEach((stat, index) => {
            stat.style.opacity = '0';
            stat.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                stat.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                stat.style.opacity = '1';
                stat.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }, 100);
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Handle search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        currentGolfers = [...golfersData];
    } else {
        currentGolfers = golfersData.filter(golfer =>
            golfer.name.toLowerCase().includes(searchTerm) ||
            golfer.country.toLowerCase().includes(searchTerm)
        );
    }
    
    renderGolfers(currentGolfers);
    
    // Show no results message
    if (currentGolfers.length === 0) {
        golfersGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: rgba(255,255,255,0.6);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>No golfers found</h3>
                <p>Try searching for a different name or country</p>
            </div>
        `;
    }
}

// Shuffle golfers array
function shuffleGolfers() {
    // Add shuffle animation to button
    shuffleBtn.style.transform = 'rotate(360deg)';
    shuffleBtn.disabled = true;
    
    setTimeout(() => {
        currentGolfers = shuffleArray([...golfersData]);
        renderGolfers(currentGolfers);
        
        shuffleBtn.style.transform = 'rotate(0deg)';
        shuffleBtn.disabled = false;
    }, 300);
}

// Utility function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Format currency
function formatCurrency(amount) {
    if (amount >= 1000000) {
        return '$' + (amount / 1000000).toFixed(1) + 'M';
    } else if (amount >= 1000) {
        return '$' + (amount / 1000).toFixed(0) + 'K';
    }
    return '$' + amount.toLocaleString();
}

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const balls = document.querySelectorAll('.golf-ball');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    balls.forEach((ball, index) => {
        const speed = (index + 1) * 0.5;
        const x = mouseX * speed;
        const y = mouseY * speed;
        
        ball.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
    });
});

// Initialize the application
document.addEventListener('DOMContentLoaded', init);

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';
