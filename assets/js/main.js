    document.addEventListener('DOMContentLoaded', function() {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

      mobileMenuButton.addEventListener('click', function() {
        if (mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.remove('hidden');
          mobileMenuButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          `;
          document.body.style.overflow = 'hidden';
        } else {
          mobileMenu.classList.add('hidden');
          mobileMenuButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          `;
          document.body.style.overflow = 'unset';
        }
      });

      
      mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const headerHeight = 64;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            `;
            document.body.style.overflow = 'unset';
          }
        });
      });

      
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
              const headerHeight = 64;
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }
        });
      });

      
      const particlesContainer = document.getElementById('particles-container');
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const colorClass = i % 5 === 0 ? 'bg-pink-500' : 
                          i % 5 === 1 ? 'bg-cyan-500' : 
                          i % 5 === 2 ? 'bg-amber-500' : 
                          i % 5 === 3 ? 'bg-purple-500' : 'bg-green-500';
        
        particle.className = `absolute w-1 h-1 rounded-full ${colorClass}`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        particle.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
        
        
        particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite alternate`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
      }

      
      const gradientBlobs = document.getElementById('gradient-blobs');
      for (let i = 0; i < 6; i++) {
        const blob = document.createElement('div');
        const size = Math.random() * 300 + 100;
        
        blob.className = 'absolute rounded-full bg-gradient-to-r blur-3xl opacity-20';
        blob.style.width = `${size}px`;
        blob.style.height = `${size}px`;
        blob.style.left = `${Math.random() * 100}%`;
        blob.style.top = `${Math.random() * 100}%`;
        
        
        if (i % 3 === 0) {
          blob.style.background = 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)';
        } else if (i % 3 === 1) {
          blob.style.background = 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, rgba(34,211,238,0) 70%)';
        } else {
          blob.style.background = 'radial-gradient(circle, rgba(217,119,6,0.3) 0%, rgba(217,119,6,0) 70%)';
        }
        
        
        blob.style.animation = `float ${Math.random() * 20 + 20}s ease-in-out infinite alternate`;
        blob.style.animationDelay = `${Math.random() * 10}s`;
        
        gradientBlobs.appendChild(blob);
      }

      
      document.querySelectorAll('.group-hover-arrow').forEach(arrow => {
        const parent = arrow.closest('.group');
        if (parent) {
          parent.addEventListener('mouseenter', () => {
            arrow.style.transform = 'translateX(4px)';
          });
          parent.addEventListener('mouseleave', () => {
            arrow.style.transform = 'translateX(0)';
          });
        }
      });

      
      const animateOnScroll = () => {
        const featureCards = document.querySelectorAll('.feature-card');
        const commandCards = document.querySelectorAll('.command-card');
        
        const isInViewport = (element) => {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
            rect.bottom >= 0
          );
        };
        
        featureCards.forEach((card, index) => {
          if (isInViewport(card) && !card.classList.contains('animated')) {
            card.classList.add('animated', 'fade-in');
            card.style.animationDelay = `${index * 0.1}s`;
          }
        });
        
        commandCards.forEach((card, index) => {
          if (isInViewport(card) && !card.classList.contains('animated')) {
            card.classList.add('animated', 'fade-in');
            card.style.animationDelay = `${index * 0.05}s`;
          }
        });
      };
      
      
      animateOnScroll();
      window.addEventListener('scroll', animateOnScroll);
    });
