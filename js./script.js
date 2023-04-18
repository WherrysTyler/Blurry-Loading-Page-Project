 const loadText = document.querySelector('.loading-text')
  const bg = document.querySelector('.bg')
   const intro1 = document.querySelector('.intro')

  let load = 0

  let int = setInterval(blurring, 30)

  function blurring() {

    load++

    if (load > 99) {
    clearInterval(int)
    
}
}
  // function introBlur() {

  //   loadIntro++

  //   if (loadIntro > 99) {
  //     clearInterval(int)
  //   }
  // }


  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  intro1.style.opacity = scale(load, 100, 0, 1, 0);
  // intro1.innerText = `${load}%`
  intro1.style.filter = `blur(${scale(load, 0, 100, 40, 0)})`
  bg.style.filter = `blur(${scale(load, 0, 100, 40, 0)})`



// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
