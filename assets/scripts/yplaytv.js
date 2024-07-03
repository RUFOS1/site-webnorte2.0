const divYplaytv = document.querySelector('.div-yplaytv');
const videoElement = divYplaytv.querySelector('.video-yplaytv');

let isVideoPlaying = false;

function handleYplaytvIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //verifica se  a div "div-yplaytv" esta visivel
      if (!isVideoPlaying) {
        //fazer o video tocar
        videoElement.play();
        isVideoPlaying = true;
      }
    } else {
      //verifica se  a div "div-yplaytv" não esta visivel
      if (isVideoPlaying) {
        //fazer o video pausar
        videoElement.pause();
        isVideoPlaying = false;
      }
    }
  });
}

const yplaytvObserver = new IntersectionObserver(handleYplaytvIntersect, {
  threshold: 0.5, 
});

yplaytvObserver.observe(divYplaytv);

// para reiniciar o vídeo quando acaba
videoElement.addEventListener("ended", () => {
  isVideoPlaying = false;
});
