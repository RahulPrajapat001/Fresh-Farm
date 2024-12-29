// Add necessary CSS variables for animations
document.documentElement.style.setProperty('--primary-color', '#ff6b6b');
document.documentElement.style.setProperty('--secondary-color', '#4ecdc4');
document.documentElement.style.setProperty('--accent-color', '#ffe66d');

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create border animation
function createBorderAnimation(element) {
    const borderDiv = document.createElement('div');
    borderDiv.className = 'border-animation';
    element.appendChild(borderDiv);
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card, index) => {
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
            card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
            
            // Change colors on hover
            const randomColor = getRandomColor();
            card.style.borderColor = randomColor;
            
            // Animate price
            const priceElement = card.querySelector('.current-price');
            priceElement.style.color = randomColor;
            priceElement.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            
            // Reset price animation
            const priceElement = card.querySelector('.current-price');
            priceElement.style.color = '';
            priceElement.style.transform = 'scale(1)';
        });

        // Add floating animation
        card.style.animation = `float 3s ease-in-out infinite ${index * 0.2}s`;

        // Create and add border animation
        createBorderAnimation(card);

        // Add click effect on button
        const button = card.querySelector('.action-button');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);

            // Add to cart animation
            const circle = document.createElement('div');
            circle.className = 'click-effect';
            button.appendChild(circle);
            setTimeout(() => circle.remove(), 500);
        });
    });

    // Add save badge animation
    const saveBadges = document.querySelectorAll('.save-badge');
    saveBadges.forEach(badge => {
        badge.style.animation = 'pulse 2s infinite';
    });
});

// Add necessary CSS
const style = document.createElement('style');
style.textContent = `
    .product-card {
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        border: 2px solid transparent;
    }

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    .border-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid transparent;
        animation: borderRotate 4s linear infinite;
    }

    @keyframes borderRotate {
        0% { border-color: var(--primary-color); }
        33% { border-color: var(--secondary-color); }
        66% { border-color: var(--accent-color); }
        100% { border-color: var(--primary-color); }
    }

    .click-effect {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        animation: clickRipple 0.5s ease-out;
    }

    @keyframes clickRipple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }

    .action-button {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .current-price {
        transition: all 0.3s ease;
    }

    .product-image {
        transition: all 0.3s ease;
    }

    .product-card:hover .product-image {
        transform: scale(1.1);
    }

    .save-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;
        background: var(--primary-color);
        color: white;
        padding: 5px 10px;
        border-radius: 20px;
        font-weight: bold;
    }
`;

document.head.appendChild(style);

<script>
            const slides = document.querySelector('.slides');
            const slideCount = document.querySelectorAll('.slide').length;
            let currentIndex = 0;
        
            function showNextSlide() {
                currentIndex = (currentIndex + 1) % slideCount;
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
        
            setInterval(showNextSlide, 3000); // Change image every 3 seconds
        </script>