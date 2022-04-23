const searchFlickr = function(keywords) {
    console.log('search for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search', //not to be confused with http methods like POST
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallbak: 1
    }).done(showImages);
};

const showImages = function(results) {
    results.photos.photo.forEach(function (photo) {
        const thumbnailURL = generateURL(photo);
        console.log(thumbnailURL);
        const $img = $('<img>', {src: thumbnailURL});
        $img.appendTo('#images');
    });
};

const generateURL = function(p) {
    return [
        'http//farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // change q to something else for different sizes
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit',function(e) {
        e.preventDefault();
        const searchTerm = $('#query').val();
        searchFlickr(searchTerm);
    });
});