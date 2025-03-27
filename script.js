document.addEventListener('DOMContentLoaded', function() {
  const navIcons = document.querySelectorAll('.nav-icon');
  const sections = document.querySelectorAll('section');
  
  // Função para destacar o ícone ativo
  function highlightActiveIcon() {
    let currentSection = '';
    
    // Verifica qual seção está visível na tela
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Ajuste para o header fixo
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });
    
    // Remove a classe 'active' de todos os ícones
    navIcons.forEach(icon => {
      icon.classList.remove('active');
    });
    
    // Adiciona a classe 'active' ao ícone correspondente à seção visível
    const activeIcon = document.querySelector(`.nav-icon[href="#${currentSection}"]`);
    if (activeIcon) {
      activeIcon.classList.add('active');
    }
  }
  
  // Adiciona o evento de scroll para destacar o ícone ativo
  window.addEventListener('scroll', highlightActiveIcon);
  
  // Adiciona o evento de clique para rolar suavemente até a seção
  navIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.preventDefault(); // Evita o comportamento padrão do link
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Ajuste para o header fixo
          behavior: 'smooth' // Rola suavemente
        });
        
        // Remove a classe 'active' de todos os ícones
        navIcons.forEach(icon => {
          icon.classList.remove('active');
        });
        
        // Adiciona a classe 'active' ao ícone clicado
        this.classList.add('active');
      }
    });
  });
  
  // Destaca o ícone ativo ao carregar a página
  highlightActiveIcon();
});