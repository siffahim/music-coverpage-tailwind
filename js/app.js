const btn = document.querySelector(".btn");
const video = document.querySelector(".video");



btn.addEventListener('click', () => {
    video.style.display = 'block';
    document.getElementsByTagName('video').setAttribute("autoplay", "autoplay");
})
