const authURL = async function(req, res){
	var acceptedUrls = ["http://192.168.0.102", "komrisk-dummy-api.herokuapp.com"];
	var authMap = {};
	console.log(req.body.Url);
	console.log(acceptedUrls.indexOf(req.body.Url.split("//")[1]));
	if(acceptedUrls.indexOf(req.body.Url.split("//")[1]) >= 0) {
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

const compStatus = async function(req, res) {
	var dataMap = {
		title: "Compliance Status",
		subTitle: req.body.start + " - " + req.body.end,
		xAxisName: "Compliance",
		yAxisName: "Compliance(Count)",
		chartData: [{
			label: "NON COMPLIANT",
			color: "FF0000",
			value: 20,
			link: {
				dataFilter: "",
				type: "NON COMPLIANT",
				userFilter: ""
			}
		}, {
			label: "COMPLIANT",
			color: "00FF00",
			value: 7,
			link: {
				dataFilter: "",
				type: "COMPLIANT",
				userFilter: ""
			}
		}, {
			label: "LATE COMPLIANT",
			color: "FFBF00",
			value: 17,
			link: {
				dataFilter: "",
				type: "LATE COMPLIANT",
				userFilter: ""
			}
		}]
	};

	return res.json(dataMap);
}
module.exports.compStatus = compStatus;

const compActStatus = async function(req, res) {
	var dataMap = {
		title: "Compliance Activity Status",
		subTitle: req.body.start + " - " + req.body.end,
		xAxisName: "Compliance",
		yAxisName: "Compliance(Count)",
		chartData: [{
			label: "PENDING",
			color: "FF0000",
			value: 20,
			link: {
				dataFilter: "",
				type: "pending",
				userFilter: ""
			}
		}, {
			label: "COMPLETED",
			color: "00FF00",
			value: 27,
			link: {
				dataFilter: "",
				type: "completed",
				userFilter: ""
			}
		}, {
			label: "INITIATED",
			color: "FFBF00",
			value: 17,
			link: {
				dataFilter: "",
				type: "initiated",
				userFilter: ""
			}
		}]
	};

	return res.json(dataMap);
}
module.exports.compActStatus = compActStatus;

const impactAnalysis = async function(req, res) {
	var dataMap = {
		title: "Impact Analysis of Compliances Pending Completion",
		subTitle: req.body.start + " - " + req.body.end,
		xAxisName: "Compliance",
		yAxisName: "Compliance(Count)",
		chartData: [{
			label: "HIGH",
			color: "FF0000",
			value: 20,
			link: {
				dataFilter: "",
				type: "High",
				userFilter: ""
			}
		}, {
			label: "LOW",
			color: "00FF00",
			value: 27,
			link: {
				dataFilter: "",
				type: "Low",
				userFilter: ""
			}
		}, {
			label: "MEDIUM",
			color: "FFBF00",
			value: 17,
			link: {
				dataFilter: "",
				type: "Medium",
				userFilter: ""
			}
		}]
	};

	return res.json(dataMap);
}
module.exports.impactAnalysis = impactAnalysis;

const incActStatus = async function(req, res) {
	var dataMap = {
		title: "Incident Activity Status",
		subTitle: req.body.start + " - " + req.body.end,
		xAxisName: "Incident",
		yAxisName: "Incident(Count)",
		chartData: [{
			label: "COMPLETED",
			color: "00FF00",
			value: 27,
			status: "completed",
			userFilter: ""
		}, {
			label: "INITIATED",
			color: "FFBF00",
			value: 20,
			status: "initiated",
			userFilter: ""
		}, {
			label: "PENDING",
			color: "FF0000",
			value: 10,
			status: "pending",
			userFilter: ""
		}, {
			label: "REJECTED",
			color: "FF0000",
			value: 12,
			status: "rejected",
			userFilter: ""
		}]
	};

	return res.json(dataMap);
}
module.exports.incActStatus = incActStatus;

const incStatus = async function(req, res) {
	var dataMap = {
		title: "Incident Comparison",
		subTitle: req.body.start + " - " + req.body.end,
		xAxisName: "Incident",
		yAxisName: "Incident(Count)",
		chartData: [{
			label: "NON-COMPLETION",
			color: "FF0000",
			value: 27,
			comparison: "NON-COMPLETION",
			userFilter: ""
		}, {
			label: "LATE-COMPLETION",
			color: "FFBF00",
			value: 10,
			status: "LATE-COMPLETION",
			userFilter: ""
		}]
	};

	return res.json(dataMap);
}
module.exports.incStatus = incStatus;