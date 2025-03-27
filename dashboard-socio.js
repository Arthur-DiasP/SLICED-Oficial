document.addEventListener("DOMContentLoaded", function() {
  const icons = document.querySelectorAll(".navbar .icon");
  const sections = document.querySelectorAll("section");
  
  icons.forEach(icon => {
    icon.addEventListener("click", function() {
      const targetSection = this.getAttribute("data-section");
      
      // Remove a classe 'active' de todos os ícones e sections
      icons.forEach(i => i.classList.remove("active"));
      sections.forEach(section => section.classList.remove("active"));
      
      // Adiciona a classe 'active' ao ícone clicado e à section correspondente
      this.classList.add("active");
      document.getElementById(targetSection).classList.add("active");
    });
  });
  
  // Ativa a primeira section e o primeiro ícone por padrão
  icons[0].classList.add("active");
  sections[0].classList.add("active");
});