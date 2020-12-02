var https = require("https");
var account='rizkymusthofa0509';
var options = {
    host :"api.github.com",
    path: "/users/" +account+ "/repos",
    method : 'GET',
    headers: {'User-Agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'}
  }

var request = https.request(options, function(response){
    var body = '';
    response.on('data',function(chunk){
        body+=chunk;
    });
    response.on('end',function(){
        var json = JSON.parse(body);
        var repos =[]; 
        json.forEach(function(repo){
           repos.push({
               name : repo.name,
               description : repo.description
           });
        });
        console.log('======================================');
        console.log('= Backend Github API                =');
        console.log('= Name : Rizky Musthofa             =');
        console.log('======================================');
        console.log('List => '+ JSON.stringify(repos));
    });

});
request.on('error', function(e) {
    console.error('Error :  '+e);
});
request.end();
