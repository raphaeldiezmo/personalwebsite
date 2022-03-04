const sections = document.querySelectorAll('section');
const nav_list = document.querySelectorAll('.nav-container ul li');

window.addEventListener('scroll', ()=>{
  let current = '';

  section.forEach(section =>{
    const section_top = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop ))
  })
  nav_list.forEach(li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
})
