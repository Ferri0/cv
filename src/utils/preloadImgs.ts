function preloadImgs(imgUrls: string[]) {
  imgUrls.forEach((imgUrl: string) => {
    const img = new Image();
    img.src = imgUrl;
  });
}

export {preloadImgs};
