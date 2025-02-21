document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.play_heading div');
  const arrowIcon = toggleBtn.querySelector('#bottom');
  const cardList = document.querySelector('.card_list');
  const cards = document.querySelectorAll('.card_item');

  let isOpen = false;

  gsap.set(cardList, { maxHeight: cards[0].offsetHeight + 'px', opacity: 1 });
  gsap.set(cards, { opacity: index => (index === 0 ? 1 : 0) });

  toggleBtn.addEventListener('click', () => {
    if (!isOpen) {
      gsap.to(cardList, {
        maxHeight: cardList.scrollHeight,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(cards, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
      });
    } else {
      gsap.to(cardList, {
        maxHeight: cards[0].offsetHeight + 'px',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.in',
      });

      gsap.to(cards, {
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
