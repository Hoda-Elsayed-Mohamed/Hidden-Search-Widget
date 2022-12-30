  const searchEl = document.querySelector('button')
  const inputEl = document.querySelector('input')
  searchEl.addEventListener('click', ()=>{
 inputEl.classList.toggle('active')
 inputEl.focus()
  })