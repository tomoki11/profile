document.addEventListener('DOMContentLoaded', function () {
    var youtubeDivs = document.querySelectorAll('.youtube');

    youtubeDivs.forEach(function (youtube) {
        youtube.addEventListener('click', function () {
            var videoId = youtube.getAttribute('data-video-id');
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            youtube.innerHTML = '';
            youtube.appendChild(iframe);
        });
    });
});
