const authURL = async function(req, res){
	var acceptedUrls = ["192.168.0.102", "komrisk-dummy-api.herokuapp.com"];
	var authMap = {};
	console.log(req.body.Url);
	console.log(acceptedUrls.indexOf(req.body.Url));
	if(acceptedUrls.indexOf(req.body.Url) >= 0) {
		authMap['status'] = 'SUCCESS';
		res.statusCode = 200;
	} else {
		authMap['status'] = 'NOT FOUND';
		res.statusCode = 401;
	}

	return res.json(authMap);
}
module.exports.authURL = authURL;

const login = async function(req, res) {
	var authMap = {
		contryEnabled: true,
		status: 'SUCCESS',
		token: "eyJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXIiOiJodHRwczpcL1wvd3d3LmtvbXJpc2suY29tIiwiZXhwaXJhdGlvblRpbWUiOjE1NDM0ODc5MzksInVzZXJJZCI6MjZ9.lY2Tl6blZbVKcbDI53R-MZ9rYrAUsnJRE-g0Tw5Dvfw",
		userDetails: {
			company: "Lexplosion Solutions Pvt. Ltd.",
			department: "IT",
			displayName: "Tirthankar Dey",
			firstName: "Tirthankar",
			lastName: "Dey",
			mobile: "9836776023",
			operatingUnit: "Kolkata",
			phone: "9836776023",
			role: "Company Admin",
			username: req.body.username
		}
	};

	if(req.body.password == '1234') {
		return res.json(authMap);
	} else {
		res.statusCode = 401;
		return res.json({status: 'USER_NOT_FOUND'})
	}
}
module.exports.login = login;