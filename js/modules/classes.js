function classes(){
     // // Classes=================================================
  const getResource = async (url)=>{
    const res = await fetch(url);
    
    if(!res.ok){
      throw new Error(`Couldnt fetch${url}, status ${res.status}`)
    }
    return await res.json()
  }

  class CarCard{
    constructor(src, alt, title, desc, price, parentSelector, ...classes){
      this.src = src,
      this.alt = alt,
      this.title = title,
      this.desc = desc,
      this.price = price,
      this.parent = document.querySelector(parentSelector)
      // this.transform = 10500,
      // this.changeToUSD()
    }
    // changeToUSD(){
    //   this.price = Math.floor(this.price / this.transform)
    // }
    render(){
      const element = document.createElement('div');
      element.innerHTML = `
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.desc}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> $</div>
        </div>
      </div>`;
          this.parent.append(element)
    }
  }
  axios.get('http://localhost:3000/menu')
  .then(data=>{
    const objects = data.data
    objects.forEach(({img, altImg, title, descr, price})=>{
      new CarCard(img, altImg, title, descr, price, '.menu .container').render()
    })
    // data.forEach(obj=>{
    //   new CarCard(obj.img, obj.altImg, obj.title, obj.descr, obj.price, '.menu .container').render()
    // })
  })
  // getResource('http://localhost:3000/menu')
  // .then(data=>{
  //   data.forEach(obj=>{
  //     new CarCard(obj.img, obj.altImg, obj.title, obj.descr, obj.price, '.menu .container').render()
  //   })
  // })
  // new CarCard(
  //   'img/tabs/1.jpg',
  //   'vegy',
  //   '2021 Mercedes-Benz C-Class',
  //   `The 2021 Mercedes-Benz C-Class finishes in the top half of our
  //   luxury small car rankings. It's powerful and upscale, but it has
  //   so-so handli...`,
  //   125000000,
  //   '.menu .container'
  // ).render();
  // new CarCard(
  //   'img/tabs/3.jpg',
  //   'elite',
  //   '2021 Mercedes-Benz CLA-Class',
  //   `The 2021 Mercedes-Benz CLA offers punchy powertrains, an elegant
  //   interior, and easy-to-use tech features, but it also has a firm
  //   ride and a ..`,
  //   432000000,
  //   '.menu .container'
  // ).render();
  // new CarCard(
  //   'img/tabs/2.jpg',
  //   'post',
  //   '2021 Mercedes-Benz SCLA-Class',
  //   `The German luxury car-manufacturer has been around for more than a
  //   century, having elegantly drifted rough curves of automobile`,
  //   436000000,
  //   '.menu .container'
  // ).render();
  
} 

// module.exports = classes;
export default classes;