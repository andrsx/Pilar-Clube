/* HEADER */

var sidemenu = document.getElementById('sidemenu')

function openMenu() {
  sidemenu.style.right = '0';
}

function closeMenu() {
  sidemenu.style.right = '-200px';
}

/* SOBRE */

function adicionarClassesAtivas() {
  const links = document.querySelectorAll('.sobre__coluna-2-tabs-links')
  // Loop através de cada link
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault()
      const tag = event.target
      console.log(tag.id)
      // Remova a classe ativa de todos os links
      links.forEach(link => {
        link.classList.remove('link-ativo')
        removeConteudo()
      })
      // Adicione a classe ativa no link clicado
      this.classList.add('link-ativo')
      adicionaConteudo(tag.id)
    })
  })
}

adicionarClassesAtivas()

function removeConteudo() {
  const conteudo = document.querySelectorAll('.sobre__coluna-2-conteudo')
  conteudo.forEach(Conteudo => {
    Conteudo.classList.remove('tab-ativo')
  })
}

function adicionaConteudo(id) {
  const conteudo = document.getElementById(`${id}-conteudo`)
  conteudo.classList.add('tab-ativo')
  //console.log(conteudo)
}