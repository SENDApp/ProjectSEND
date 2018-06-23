// CORS redirect to fix SuperHeroAPI CORS issue
jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

const superAPI = {
    callAPI: function () {
        // function for superheroapi
        var heroSearch = "Batman"; //just an exampe search
        var superAPI = 'http://superheroapi.com/api/10160533766455290/search/' + heroSearch  + '/';
        $.getJSON(superAPI).then(function(response) {
            console.log(response);
        });
    },
}


    