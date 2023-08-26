function toggleMenu() {
  // Obtém o elemento com a classe .menu-links
  const menu = document.querySelector('.menu-links');
  // Obtém o elemento com a classe .hamburger-icon
  const icon = document.querySelector('.hamburger-icon');
  // Adiciona ou remove a classe 'aberto' do elemento .menu-links
  menu.classList.toggle('aberto');
  // Adiciona ou remove a classe 'aberto' do elemento .hamburger-icon
  icon.classList.toggle('aberto');
}
