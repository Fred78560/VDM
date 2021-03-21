exports.action = function(data){

  url = 'http://www.viedemerde.fr/aleatoire';

  if(url){
	var request = require('request');
	request({ 'uri' : url }, function (err, response, body){    
		var $ = require('cheerio').load(body, { xmlMode: true, ignoreWhitespace: false, lowerCaseTags: false });
		txt  = $('div.article-contents').first().find('a.article-link').text();  // On remplace le proverbe pour la lecture
		console.log(txt);
		JarvisIASpeech(txt);
		return;
	});
  } 
}
