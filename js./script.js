 const loadText = document.querySelector('.loading-text')
  const bg = document.querySelector('.bg')
   const intro1 = document.querySelector('.intro')

  let loadNumber = 0
  let loadIntro = 0

  let int = setInterval(blurring, 30)

  function blurring() {

    loadNumber++

    if (loadNumbeir > 99) {
    clearInterval(int)
    
  print(intro);
}
}
  // function introBlur() {

  //   loadIntro++

  //   if (loadIntro > 99) {
  //     clearInterval(int)
  //   }
  // }


  loadText.innerText = `${loadNumber}%`
  loadText.style.opacity = scale(loadNumber, 0, 100, 1, 0);
  intro1.style.opacity = scale(loadNumber, 100, 0, 1, 0);
  // intro1.innerText = `${load}%`
  intro1.style.filter = `blur(${scale(loadNumber, 0, 100, 20, 0)})`
  bg.style.filter = `blur(${scale(loadNumber, 0, 100, 20, 0)}px)`



// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
