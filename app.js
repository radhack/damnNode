var http = require('http');
//var express = require('express');
//var res = require('res');
//const fs = require('fs');
var hellosign = require('hellosign-sdk')({key : 'e96f6f11381877807f80faeeb446f4f076494245b8325dacf5f1f041d76c0b3c'});
var port = (process.env.PORT || process.env.VCAP_APP_PORT || 8999);

//var temp = require('templatesjs');
////var data = templatesjs.renderSync("name", "Person Of The World");
//fs.readFile('./www/index.html', function(err,data) {
//    if(err) throw err;
//    var output = temp.setSync(data);
//    res.end(output);
// });

http
		.createServer(
				function(req, res) {
					res.writeHead(200, {
						'Content-Type' : 'text/html'
					});
//					res.write('<html><head><script type="text/javascript" src="//s3.amazonaws.com/cdn.hellosign.com/public/js/hellosign-embedded.LATEST.min.js"></script></head>');
//					var options = {
//						    test_mode : 1,
//						    clientId : 'd7219512693825facdd9241f458decf2',
//						    subject : 'My First embedded signature request',
//						    message : 'Awesome, right?',
//						    signers : [
//						        {
//						        	role: 'Role1',
//						        	email_address : 'alex+test@hellosign.com',
//						        	name : 'Jack'
//						        },	    
//						 	    {
//						 	        role: 'Role2',
//						 	     	email_address : 'alex+test2@hellosign.com',
//						 	        name : 'Jill'
//						 	    }
//						 	    ],
//						 		// files : ['a.pdf']
////					 	    file_url : ['http://www.pdf995.com/samples/pdf.pdf'],
//						 	template_id: '5f5650f1cbfd497393cfa426d7d8d81e2a62a1f4',
//						    custom_fields: {
//						     		Cost: '$10,000',
//						     		Amount: 'A lot!',
//						     		Applicant: 'Bob is the applicant'
//				     		}
//						};
//					console.log("made it here");
//						 
//				     		hellosign.signatureRequest.createEmbeddedWithTemplate(options)
//						 	// hellosign.signatureRequest.createEmbedded(options)
//						 	    .then(function(response){
//						 	    	var signatureId = response.signature_request.signatures[0].signature_id;
//						 	    	console.log(signatureId);
//						 include
//						 	    	// res.json({signatureId: signatureId})
//						 	    	return hellosign.embedded.getSignUrl(signatureId);
//						 	    })
//						     	.then(function (response) { 
////						     		console.log('URL = ' + response.embedded.sign_url); 
////						     		res.json({ url: response.embedded.sign_url });
//						     		var sign_url = response.embedded.sign_url;
//						     		console.log(sign_url);
//						     		res.write('<script type="text/javascript">');
////						     			res.write('HelloSign.init("'+ clientId +'");');
////						     			res.write('HelloSign.open({');
////						     		    res.write('url: '+ sign_url +',');
////						     		    res.write('allowCancel: true,');
////						     		    res.write('skipDomainVerification: true,');
////						     		    res.write('uxVersion: 2,');
////						     		    res.write('debug: true,');
////						     		    res.write('messageListener: function (eventData) {');
////						     		    	res.write('(console.log(">-*>-*>-*> Got message data: " + JSON.stringify(eventData)));');
////						     		                
////						     		            res.write('}');
////					     		            res.write('});');
//			     		           res.write('</script>');
//			     		          res.write('</body></html>');
//						     	}) 
//						 	    .catch(function(err){
//						     	res.json({ error: err });
//						 	    });
					// exports.requestEmbeddedSignatureRequestTest =
					// functions.https.onRequest((req, res) => {
					// hellosign.template.get('7a53ee8da4a63dccf2e181e652c9518d988ff675')
					// .then(function(response) {
					// // console.log(response.resHeaders['x-ratelimit-limit']);
					// console.log(response.resHeaders);
					// })
					// .catch(function(err) {
					// console.log(err);
					// console.log(response);
					// });

					// // var hellosign = require('hellosign-sdk')({key:
					// 'apiKey', client_id :
					// 'd7219512693825facdd9241f458decf2'});
					//	
					// // var hellosign = require('hellosign-sdk')({key:
					// 'apiKey'});
					// hellosign.template.get('5f5650f1cbfd497393cfa426d7d8d81e2a62a1f4')
					// .then(function(response){
					// //parse response
					// console.log(response);
					// })
					// .catch(function(err){
					// //catch error
					// });
					//	
					//	
					// var options = {
					// name: 'Updated Name',
					// domain: 'hstests.ngrok.io'
					// };
					// hellosign.apiApp.update('d7219512693825facdd9241f458decf2',
					// options)
					// .then(function(response){
					// // parse response
					// console.log(response)
					// })
					// .catch(function(err){
					// // catch error
					// console.log(err)
					// })

					res.write('<body><h1>Isn\'t this cooll??</h1>\n');
					
//					 var i = 0;
//					 while (i < 52) {
						 var options = {
								 test_mode : 1,
								 clientId : 'd7219512693825facdd9241f458decf2',
								 subject : 'My First embedded signature request' ,
								 message : 'Awesome, right? I know.',
								 signers : [{
								 				email_address : 'alex@hellosign.com',
								 				name : 'Jack'
								 }],
							 	file_url : ['http://www.pdf995.com/samples/pdf.pdf'],
						 	};
						 hellosign.signatureRequest.createEmbedded(options)
						 	.then(function(response){
//						 		response.signature_request.signature_request_id;
						 		var signatureId = response.signature_request.signatures[0].signature_id;
						 		console.log(response);
						 		console.log(signatureId);
//						 		res.json({signatureId: signatureId});
//						 		function getSignUrl(signatureId) {
////						 			console.log("Here's the response" + response.signature_request);
////						 			var signatureId = response.signature_request.signatures[0].signature_id;
////						 			console.log(response);
////						 			res.json({signatureId: signatureId})
//						 			return hellosign.embedded.getSignUrl(signatureId);
//						 			console.log('URL = ' + response.embedded.sign_url);
//						 		};
//						 		setTimeout(getSignUrl, 3000, signatureId);
						 		response = null;
					 		return hellosign.embedded.getSignUrl(signatureId);
						 	})
						 	.then(function (response) {
//						 		function getSignUrl(signatureId) {
////						 			console.log("Here's the response" + response.signature_request);
////						 			var signatureId = response.signature_request.signatures[0].signature_id;
////						 			console.log(response);
////						 			res.json({signatureId: signatureId})
//						 			return hellosign.embedded.getSignUrl(signatureId);
//						 			console.log('URL = ' + response.embedded.sign_url);
//						 		};
//						 		setTimeout(getSignUrl, 3000, signatureId);
//						 		response = null;
						 		console.log('URL = ' + response.embedded.sign_url);
						 	})
						 	.catch(function(err){
					 		if (err !== null) {
					 			console.log('I got here');
					 			console.log(err);
					 		}
					 		err = null;
						 	});
							
//						 var signature_id = 'bf461ed8f3ffee782d08331d8075440f';
//						 hellosign.embedded.getSignUrl(signature_id).then(
//						 function(response) {
//						 console.log('URL = '
//						 + response.embedded.sign_url);
//						 });
//					 i++;
//					 }
					 
					 
					// //// var options1 = {
					// //// host: url,
					// //// port: 80,
					// //// path: 'https://hstests.ngrok.io/callback.php',
					// //// method: 'GET'
					// //// };
					// //// http.request(options1, function(res) {
					// //// console.log('STATUS: ' + res.statusCode);
					// //// console.log('HEADERS: ' +
					// JSON.stringify(res.headers));
					// //// res.setEncoding('utf8');
					// //// res.on('data', function (chunk) {
					// //// console.log('BODY: ' + chunk);
					// //// });
					// //// }).end();
					// // res.write('<!DOCTYPE html>\n<head>\n<title>Signers
					// Here</title>\n<body>\n<button onclick=">Try
					// it</button>\n</body>\n</html>');
					// // var request = require('request');
					// // var fs = require('fs');
					// ////
					// request('https://apiKey:@api.hellosign.com/v3/signature_request/list?page_size=50&page=2',
					// function (error, response, body) {
					// //
					// request('https://apiKey:@api.hellosign.com/v3/signature_request/files/148405c73b6f150ad9e4c2555d51c0c02208e153').pipe(fs.createWriteStream('148405c73b6f150ad9e4c2555d51c0c02208e153.pdf'))
					//	
					//	
					// put all test code above this line
			     		res.end('\n');
				}).listen(port);

console.log('Server running at http://127.0.0.1:' + port);
