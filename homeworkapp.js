var http = require('http');
var hellosign = require('hellosign-sdk')({key : 'e96f6f11381877807f80faeeb446f4f076494245b8325dacf5f1f041d76c0b3c'}); // your HelloSign API Key here
var port = (process.env.PORT || process.env.VCAP_APP_PORT || 6500);

// follow the Embedded Signing Walkthrough to tell us why this isn't working
// go ahead and fix the issue(s)
// then print out the sign_url once you get it working

http
.createServer(
		function(req, res) {
			res.writeHead(200, {
				'Content-Type' : 'text/html'
			});
			res.write('<body><h1>Isn\'t this cool??</h1></body></html>');
			var options = {
					test_mode : 1,
					clientId : 'eba963c9302dbc5c91d07ac3fe100c18', // your HelloSign Client ID here
					subject : 'My First embedded signature request' ,
					message : 'Awesome, right? I know.',
					signers : [{
						email_address : 'signer0@example.com',
						name : 'Susan'
					}],
					file_url : ['http://www.pdf995.com/samples/pdf.pdf'],
			};
			hellosign.signatureRequest.createEmbedded(options)
			.then(function(response){
				var signatureRequestId = response.signature_request.signatures[0].signature_id;
				console.log(response);
				return hellosign.embedded.getSignUrl(signatureRequestId);
			})
			.catch(function(err){
				if (err !== null) {
					console.log('Bummer - we got an error here');
					console.log(err);
				}
			});

			// put all test code above this line
			res.end('\n');
		}).listen(port);

console.log('Server running at http://127.0.0.1:' + port);
