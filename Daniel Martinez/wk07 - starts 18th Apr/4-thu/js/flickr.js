const searchFlickr = function (keywords){
    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL,{
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1
    }).done(showImages);
};
const showImages = function(results){
    results.photos.photo.forEach(function(photo){
        const thumbnailURL = generateURL(photo);
      const $img = $('<img>', {src: thumbnailURL});
      $img.appendTo('#images');
    });
};

const generateURL = function (p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // change 'q' to something else for different sizes (see docs)
    ].join('');
};



$(document).ready(function(){
    $('#search').on('submit', function (event){
        event.preventDefault();

        const searchTerm = $('#query').val();
        searchFlickr(searchTerm);

    });
});

$(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 777) { // TODO: adjust the number to suit your taste.
        const searchTerm = $('#query').val();
        searchFlickr(searchTerm);
    }
});

