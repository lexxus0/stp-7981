document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.play_heading div');
  const arrowIcon = toggleBtn.querySelector('#bottom');
  const cards = document.querySelectorAll('.card_item');

  let isOpen = false;
  const cardHeight = 420;

  gsap.set(cards, { height: 0, opacity: 0, overflow: 'hidden' });
  gsap.set(cards[0], { height: 'auto', opacity: 1 });
  gsap.set(arrowIcon, { rotate: 0 });

  toggleBtn.addEventListener('click', () => {
    if (!isOpen) {
      // window.scrollBy({ top: cardHeight * 1.5, behavior: 'smooth' });

      gsap.to(cards, {
        height: index => (index === 0 ? 'auto' : cardHeight),
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
      });
    } else {
      gsap.to(cards, {
        height: index => (index === 0 ? 'auto' : 0),
        opacity: index => (index === 0 ? 1 : 0),
        duration: 0.5,
        ease: 'power2.in',
        stagger: 0.1,
      });
    }

    gsap.to(arrowIcon, {
      rotate: isOpen ? 0 : 180,
      duration: 0.3,
      ease: 'power2.out',
    });

    isOpen = !isOpen;
  });
});
