let feed = new Instafeed({
    get: 'user',
    userId: '11825143043',
    template: '<a href="{{link}}"><img class="insta-image" src="{{image}}" /></a>',
     accessToken: '11825143043.1677ed0.a22281bd420e43f2b1fdf21a33182975'
    });
    
    feed.run();