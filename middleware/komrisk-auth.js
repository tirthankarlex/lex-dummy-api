let authenticateApiKey = async function (req, res, next) {
	console.log(req.headers);
	var apiKey = req.headers['api-key'];
	var authMap = {status: 'UNAUTHORISED_TO_USE_THIS_SERVICE'};
	if(apiKey == '1d339a8918bfd92522267f0dd76415f8') {
		next();
	} else {
		res.statusCode = 401
		res.json(authMap);
	}
}
module.exports.authenticateApiKey = authenticateApiKey;

let authenticateToken = async function(req, res, next) {
	var token = req.headers['authorization'];
	if(token == 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXIiOiJodHRwczpcL1wvd3d3LmtvbXJpc2suY29tIiwiZXhwaXJhdGlvblRpbWUiOjE1NDM0ODc5MzksInVzZXJJZCI6MjZ9.lY2Tl6blZbVKcbDI53R-MZ9rYrAUsnJRE-g0Tw5Dvfw') {
		next();
	} else {
		res.statusCode = 401;
		res.json({status: 'AUTH_MISSING'});
	}
}
module.exports.authenticateToken = authenticateToken;