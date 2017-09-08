var http = require('http');

var port = (process.env.PORT || process.env.VCAP_APP_PORT || 8999);
	
var apiKey = process.env.HS_APIKEY_PROD;
console.log(apiKey);

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var hellosign = require('hellosign-sdk')({key: 'apikey'});

//	exports.requestEmbeddedSignatureRequestTest = functions.https.onRequest((req, res) => { 
	hellosign.template.get('11b43cd9cd2ddd97a378899a447a955219f0274c')
		.then(function(response) { 
			console.log(response); 
		}) 
		.catch(function(err) { 
			console.log(err); 
	});	
	
	// put all test code above this line
	res.end('\n');
}).listen(port);

console.log('Server running at http://127.0.0.1:'+port);
	
//	res.write('Isn\'t this cool??\n');
//	var hellosign = require('hellosign-sdk')({key: 'apiKey', client_id : 'd7219512693825facdd9241f458decf2'});
	
//	var hellosign = require('hellosign-sdk')({key: 'apiKey'});
//	hellosign.template.get('5f5650f1cbfd497393cfa426d7d8d81e2a62a1f4')
//	    .then(function(response){
//	        //parse response
////	    	console.log(response);
//	    	console.log(response);
//	    })
//	    .catch(function(err){
//	        //catch error
//	    });
	
	
//	var options = {
//	                    name: 'Updated Name',
//	                    'domain': 'http://hstests.ngrok.io'
//	                    };
//	hellosign.apiApp.update('d7219512693825facdd9241f458decf2', options)
//	                        .then(function(response){
//	                        // parse response
//                        	res.write(response)
//	                    })
//	                        .catch(function(err){
//	                        // catch error
//                        	res.write(err)
//	                    })
//	
//	var options = {
//	    test_mode : 1,
////	    clientId : 'd7219512693825facdd9241f458decf2',
//	    subject : 'My First embedded signature request',
//	    message : 'Awesome, right?',
//	    signers : [
//	        {
////	        role: 'Role1',
//	            email_address : 'alex+test@hellosign.com',
//	            name : 'Jack'
//	        },	    
////	    {
////	        role: 'Role2',
////	     	email_address : 'alex+test2@hellosign.com',
////	        name : 'Jill'
////	    }
//	    ],
//		//files : ['a.pdf']
//	    file_url : ['http://www.pdf995.com/samples/pdf.pdf'],
////	    template_id: '5f5650f1cbfd497393cfa426d7d8d81e2a62a1f4',
////    	custom_fields: {
////    		Cost: '$10,000',
////    		Amount: 'A lot!',
////    		Applicant: 'Bob is the applicant'
////    		}
//	};
//
////	hellosign.signatureRequest.createEmbeddedWithTemplate(options)
//	hellosign.signatureRequest.createEmbedded(options)
//	    .then(function(response){
//	    	var signatureId = response.signature_request.signatures[0].signature_id;
//
//	    	//res.json({signatureId: signatureId}) 
//	    	return hellosign.embedded.getSignUrl(signatureId);
//	    })
//    	.then(function (response) { 
//    		console.log('URL = ' + response.embedded.sign_url); 
//    		res.json({ url: response.embedded.sign_url }); 
//    	}) 
//	    .catch(function(err){
//	    	res.json({ error: err });
//	    });
////	var options1 = {
////			  host: url,
////			  port: 80,
////			  path: 'https://hstests.ngrok.io/callback.php',
////			  method: 'GET'
////			};
////	http.request(options1, function(res) {
////		  console.log('STATUS: ' + res.statusCode);
////		  console.log('HEADERS: ' + JSON.stringify(res.headers));
////		  res.setEncoding('utf8');
////		  res.on('data', function (chunk) {
////		    console.log('BODY: ' + chunk);
////		  });
////		}).end();
//	res.write('<!DOCTYPE html>\n<head>\n<title>Signers Here</title>\n<body>\n<button onclick=">Try it</button>\n</body>\n</html>');
//	var request = require('request');
//	var fs = require('fs');
////	request('https://apiKey:@api.hellosign.com/v3/signature_request/list?page_size=50&page=2', function (error, response, body) {
//	request('https://apiKey:@api.hellosign.com/v3/signature_request/files/148405c73b6f150ad9e4c2555d51c0c02208e153').pipe(fs.createWriteStream('148405c73b6f150ad9e4c2555d51c0c02208e153.pdf'))
	
