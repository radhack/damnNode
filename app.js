var http = require('http');

var port = (process.env.PORT || process.env.VCAP_APP_PORT || 8999);
	
var apiKey = '02b35105d83ab3170140283bd44ff05c958c87fa5a7c7346de1eb83d07f3715f';
console.log(apiKey);

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var hellosign = require('hellosign-sdk')({key: '02b35105d83ab3170140283bd44ff05c958c87fa5a7c7346de1eb83d07f3715f'});

//	exports.requestEmbeddedSignatureRequestTest = functions.https.onRequest((req, res) => { 
//	hellosign.template.get('7a53ee8da4a63dccf2e181e652c9518d988ff675')
//		.then(function(response) { 
////			console.log(response.resHeaders['x-ratelimit-limit']);
//			console.log(response.resHeaders);
//		}) 
//		.catch(function(err) { 
//			console.log(err);
//			console.log(response);
//	});	
	
	
	
////	var hellosign = require('hellosign-sdk')({key: 'apiKey', client_id : 'd7219512693825facdd9241f458decf2'});
//	
////	var hellosign = require('hellosign-sdk')({key: 'apiKey'});
//	hellosign.template.get('5f5650f1cbfd497393cfa426d7d8d81e2a62a1f4')
//	    .then(function(response){
//	        //parse response
//	    	console.log(response);
//	    })
//	    .catch(function(err){
//	        //catch error
//	    });
//	
//	
//	var options = {
//	                    name: 'Updated Name',
//	                    domain: 'hstests.ngrok.io'
//	                    };
//	hellosign.apiApp.update('d7219512693825facdd9241f458decf2', options)
//	                        .then(function(response){
//	                        // parse response
//                        	console.log(response)
//	                    })
//	                        .catch(function(err){
//	                        // catch error
//                        	console.log(err)
//	                    })
	
	res.write('Isn\'t this cool??\n');
	var i = 0;
	while (i < 52) {
		var options = {
	
	    test_mode : 1,
	    clientId : 'd7219512693825facdd9241f458decf2',
	    subject : 'My First embedded signature request' ,
	    message : 'Awesome, right? I know. Also, this is number' + i + 'out of 52',
	    signers : [
	        {
	            email_address : 'alex+' + i + '@hellosign.com',
	            name : 'Jack'
	        },	    
	    ],
	    file_url : ['http://www.pdf995.com/samples/pdf.pdf'],
	};
	hellosign.signatureRequest.createEmbedded(options)
	    .then(function(response){
	    	var signatureId = response.signature_request.signatures[0].signature_id;	    	
	    	console.log(response);
	    	//res.json({signatureId: signatureId}) 
	    	return hellosign.embedded.getSignUrl(signatureId);
	    })
    	.then(function (response) { 
    		console.log('URL = ' + response.embedded.sign_url);
    		response = null;
    	}) 
	    .catch(function(err){
	    	if (err !== null) {
	    	console.log('I got here');
	    	console.log(err);
	    	}
	    	err = null;
	    });
	i++;
	}
//////	var options1 = {
//////			  host: url,
//////			  port: 80,
//////			  path: 'https://hstests.ngrok.io/callback.php',
//////			  method: 'GET'
//////			};
//////	http.request(options1, function(res) {
//////		  console.log('STATUS: ' + res.statusCode);
//////		  console.log('HEADERS: ' + JSON.stringify(res.headers));
//////		  res.setEncoding('utf8');
//////		  res.on('data', function (chunk) {
//////		    console.log('BODY: ' + chunk);
//////		  });
//////		}).end();
////	res.write('<!DOCTYPE html>\n<head>\n<title>Signers Here</title>\n<body>\n<button onclick=">Try it</button>\n</body>\n</html>');
////	var request = require('request');
////	var fs = require('fs');
//////	request('https://apiKey:@api.hellosign.com/v3/signature_request/list?page_size=50&page=2', function (error, response, body) {
////	request('https://apiKey:@api.hellosign.com/v3/signature_request/files/148405c73b6f150ad9e4c2555d51c0c02208e153').pipe(fs.createWriteStream('148405c73b6f150ad9e4c2555d51c0c02208e153.pdf'))
//	
//	
	// put all test code above this line
	res.end('\n');
}).listen(port);

console.log('Server running at http://127.0.0.1:'+port);
