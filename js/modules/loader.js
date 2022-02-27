function loader(){
          // LOADER--------------------------------------------
  const loader = document.querySelector('.loader');
  setTimeout(function(){
    loader.style.opacity = '0';
    setTimeout(function(){
      loader.style.display = 'none';
    }, 1000);
  }, 2000);


  const tabs = document.querySelectorAll('.tabheader__item'),
      tabContent = document.querySelectorAll('.tabcontent'),
      tabHeader = document.querySelector('.tabheader__items');

  function hideTabContent(){
    tabs.forEach(item =>{
      item.classList.remove('tabheader__item_active');
    });
    tabContent.forEach(item =>{
      item.style.display = 'none'
    })
  }

  function showTabContent(i = 0){
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active')
    // console.log(tabs);
  }
  hideTabContent();
  showTabContent();

  tabHeader.addEventListener('click', (e)=>{
    if(e.target && e.target.classList.contains('tabheader__item')){
      tabs.forEach((item, i) =>{
        if(e.target == item){
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })
}

export default loader;