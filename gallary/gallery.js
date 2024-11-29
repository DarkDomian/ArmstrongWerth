const $ = selector => {
    return document.querySelector(selector);
  };
  


  /* CHANGING IMAGE LOGIC */
  const images = [
    "img/gallery/processed_DSC_1878.jpg",
    // "img/gallery/processed_DSC_1879.jpg",
    "img/gallery/processed_DSC_1881.jpg",
    "img/gallery/processed_DSC_1885.jpg",
    "img/gallery/processed_DSC_1890.jpg",
    "img/gallery/processed_DSC_1892.jpg",
    "img/gallery/processed_DSC_1923.jpg",
    "img/gallery/processed_DSC_1925.jpg",
    "img/gallery/processed_DSC_1927.jpg",
    "img/gallery/processed_DSC_1928.jpg",
    "img/gallery/processed_DSC_1933.jpg",
  ]

  let correntIndex = 0;

  function changeImages(newIndex, isNext = true) {

    const addedEl = document.createElement('li');
    const img = document.createElement('img');

    addedEl.style.display = 'none';

    if (isNext) {
      correntIndex = (correntIndex + 1) % images.length;
      newIndex = (newIndex + 2) % images.length;

      img.src = images[newIndex];
      img.alt = `Image with oboes №${newIndex + 1}`;
      addedEl.appendChild(img);
      addedEl.dataset.index = `${String(newIndex + 1).padStart(2, "0")}/`;

      $(".new-next").classList.remove("new-next");
  
      $(".list").appendChild(addedEl);
      requestAnimationFrame(() => {
        addedEl.style.display = 'block';
      });
      addedEl.classList.add("next","new-next");
      
    } else {
      correntIndex = (correntIndex - 1 + images.length) % images.length;
      newIndex = (newIndex - 2 + images.length) % images.length;

      img.src = images[newIndex];
      img.alt = `Image with oboes №${newIndex + 1}`;
      addedEl.appendChild(img);
      addedEl.dataset.index = `${String(newIndex + 1).padStart(2, "0")}/`;

      $(".hide").classList.add("prev");
      $(".hide").classList.remove("hide");
    
      $(".list").insertBefore(addedEl, $(".list").firstChild);
      requestAnimationFrame(() => {
        addedEl.style.display = 'block';
      });
      addedEl.classList.add("hide");
    }
  }


  /* ON EVENT LOGINC */
  function next() {
    if ($(".hide")) {
      $(".hide")?.remove(); 
    }
  
    /* Step */
  
    if ($(".prev")) {
      $(".prev").classList.add("hide");
      $(".prev").classList.remove("prev");
    }
  
    $(".act").classList.add("prev");
    $(".act").classList.remove("act");
  
    $(".next").classList.add("act");
    $(".next").classList.remove("next");
  
    /* New Next */
    changeImages(correntIndex + 1);
  }
  
  function prev() {
    $(".new-next")?.remove();
      
    /* Step */
  
    $(".next").classList.add("new-next");
  
    $(".act").classList.add("next");
    $(".act").classList.remove("act");
  
    $(".prev").classList.add("act");
    $(".prev").classList.remove("prev");
  
    /* New Prev */
  
    changeImages(correntIndex - 1, false);
  }
  
  slide = element => {
    /* Next slide */
    
    if (element.classList.contains('next')) {
      next();
      
    /* Previous slide */
      
    } else if (element.classList.contains('prev')) {
      prev();
    }
  }
  
  /* CARUESEL LOGIC */
  let autoPlayInterval;
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      next();
    }, 3000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  startAutoPlay();

  $(".list").addEventListener("mouseenter", () => stopAutoPlay());
  $(".list").addEventListener("mouseleave", () => startAutoPlay());


  /* MAIN LISTENER AND EXECUTOR */
  const slider = $(".list"),
        swipe = new Hammer($(".swipe"));
  
  slider.onclick = event => {
    slide(event.target.parentElement);
    resetIdleTimer();
  }
  
  swipe.on("swipeleft", (ev) => {
    next();
  });
  
  swipe.on("swiperight", (ev) => {
    prev();
  });