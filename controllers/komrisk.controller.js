/* 
	------------------------------
	AUTHENTICATIONS & USER DETAILS
	------------------------------ 
*/

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
	  status: 'SUCCESS',
	  token: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXIiOiJodHRwczpcL1wvd3d3LmtvbXJpc2suY29tIiwiZXhwaXJhdGlvblRpbWUiOjE1NDM0ODc5MzksInVzZXJJZCI6MjZ9.lY2Tl6blZbVKcbDI53R-MZ9rYrAUsnJRE-g0Tw5Dvfw',
	  userDetails: {
	    userId: 26,
	    username: 'tirthankar.dey@lexplosion.in',
	    firstName: 'Tirthankar',
	    lastName: 'Dey',
	    displayName: 'Tirthankar Dey',
	    phone: '41255850',
	    mobile: '8420358610',
	    role: 'Company Admin',
	    company: 'IQSS Test Company',
	    operatingUnit: 'Bangalore Development Centre',
	    department: 'Facilitation',
	    wipEnabled: true,
	    actualDateCompletionAllowed: false,
	    requestReassignmentAllowed: true,
	    uploadLink: false
	  },
	  countryEnabled: true
	};

	if(req.body.password == '1234') {
		return res.json(authMap);
	} else {
		res.statusCode = 401;
		return res.json({status: 'USER_NOT_FOUND'})
	}
}
module.exports.login = login;

const userAccessDetails = async function(req, res) {
	console.log("CALLED");
	var dataMap = {
		countryEnabled: true,
		complianceViewAs: [
			{key: 'COMPANY HEAD', value: 'COMPANY EXECUTIVE'},
			{key: 'ESCALATION POINT', value: 'ESCALATION POINT'},
			{key: 'REVIEW', value: 'REVIEW'},
			{key: 'OWNER', value: 'OWNER'}
		],
		countryList: [
			[1, 'India'],
			[2, 'UAE'],
			[3, 'Bangladesh'],
			[4, 'Egypt']
		],
		entityView: {
			entityEnabled: true,
			entityName: 'View By Entity ',
			options: [
				{entity_name: 'Entity', id: 1},
				{entity_name: 'Entity2', id: 2},
				{entity_name: 'Entity3', id: 3}
			]
		}
	}

	return res.json(dataMap);
}
module.exports.userAccessDetails = userAccessDetails;

/* 
	------------------------------
	REPORT DATA
	------------------------------
*/

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

/* 
	------------------------------
	REPORT DATA LIST
	------------------------------
*/
const compStatusDataList = async function(req, res) {
	var dataMap = {
	  sEcho: null,
	  aaData: [
	    {
	      mapId: 28278,
	      complianceId: 20707,
	      complianceTitle: 'Date of manufacture or packing',
	      taskName: 'Date of manufacture or packing',
	      description: ' What is to be done?   Mention the date, month and year in which the commodity is manufactured, packed or pre-packed, on the label.    When is it to be done?   Regularly.    How is it to be done?   Follow the stipulations mentioned below.  Check below for details.  Mention the date, month and year in which the commodity is manufactured, packed or pre-packed, on the label.  (Note: 1. The month and the year of manufacture, packing or pre-packing shall be given if the “  Best Before   Date” of the products is more than three months.  2. In case any   package   contains commodity which has a short shelf life of less than three months, the date, month and year in which the commodity is manufactured or prepared or pre-packed shall be mentioned on the label.) ',
	      nameOfLaw: 'FOOD SAFETY AND STANDARDS ACT, 2006 | FOOD SAFETY AND STANDARDS (PACKAGING AND LABELLING) REGULATIONS, 2011',
	      department: 'Human Resources',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Subhadeep  Ray Choudhury',
	      currentOwner: 'Subhadeep  Ray Choudhury',
	      reviewer: 'Agnishwar Banerjee',
	      dueDate: '18/12/2018',
	      status: ''
	    },
	    {
	      mapId: 28676,
	      complianceId: 80,
	      complianceTitle: 'Deduction and deposit of PF amount from salary',
	      taskName: 'Deduction and deposit of PF amount from salary',
	      description: '  What is to be done?  \n Deduct and deposit prescribed amount as provident fund from salary. \n   When it is to be done?  \n Within 15 days of close of every month. \n   How it is to be done?  \n Deposit the amount to State Bank of India electronically through the net banking services of the State Bank or any Nationalised bank authorized for collection.  \n  Check below for details.   \n 1. Deposit within 15 days of close of every month the contribution (of employer as well as employee) payable in Provident Fund Account, Pension Fund Account and Insurance Fund Account of the employee (employed directly or through a contractor) through internet banking only of the State Bank of India or any other nationalised bank or through the PayGov platform.   \n   (Note:    \n  1. Vide notification no. 1(4)2010/Online Remittance/12871, it has been mandated that after September, 2015, all employers are required to make contributions to the provdent fund through internet banking only.  Vide notification no G.S.R. 6(E) it has been stated that the online payments may be made either through internet banking only of the State Bank of India or any other nationalised bank or through the PayGov platform or scheduled banks in India including private sector banks.  2. Vide another notification no. Bkg.1(4)2010/Online Remittance/Vol.-II dated 12/02/2016, it has been stated that if an employer has any genuine problem in making the payments through electronic method, he should communicate it to the Regional Provident Fund Commissioner, who may, after assessing the genuineness of the problem, allow an extension upto maximum 30/06/2016 and would also record the reasons for allowing the extension.   \n  3. Register the profile of your establishment by creating user identifier and password for accessing the Employer Portal of Employees\' Provident Fund Organisation ("EPFO"). \n  (Note:   The online generation of challan will not be possible if the employer has not registered the establishment.) \n  4. The contribution rate will be as per the following: \n                                    \n A.   Provident Fund:     \n <em>Employer\'s Contribution</em>: 10 %  or 12% of the emolument (whichever applicable).  \n \n <em>Employee\'s Contribution</em>: 10% or 12% of the emolument (whichever applicable) or higher amount specified by the  employee . \n B.   Pension Fund:   \n <em>Employer\'s Contribution</em>: 8.33% of the emolument(Diverted out of Provident Fund Contribution) \n <em>Employee\'s Contribution</em>: Nil   \n [Note: The Ministry of Labour and Employment has introduced the Pradhan Mantri Rojgar Protsahan Yojna (“PMRPY”) Plan Scheme which will be applicable to those with salary up to Rs. 15,000 per month. The PMRPY Scheme is operational from 9<sup>th</sup> August, 2016. \n   The highlights of the PMRPY Scheme are as follows:   \n 1.  PMRPY Reference Base:  For the purpose of this scheme, the reference base is taken from the Electronic Challan cum return filed by the employer/establishment as on 31<sup>st</sup> March, 2016 and is the number of employees against whom the employer has deposited the employer’s contribution of 12% (3.67% EPF + 8.33% EPS) of wages with the Employee Provident Fund Organisation (“EPFO”).  Similarly, for 2017-18, the reference base will be taken as 31<sup>st</sup> March, 2017 and so on in subsequent years. \n In case of new establishments getting registered with EPFO after 1<sup>st</sup> April, 2016, the reference base would be taken as Zero/NIL and all new employees would be entitled to be covered under the PMRPY, subject to other eligibility conditions. \n 2.  PMRPY Scheme Eligibility:  All the establishments registered with the EPFO can apply for availing benefits under the PMRPY Scheme subject to the following conditions: \n i. Establishments registered with the EPFO should have a Labour Identification Number (“LIN”) allotted to them under the Sham Suvidha Portal. The LIN must be the primary reference number for all communications to be made under the PMRPY Scheme. \n ii. The eligible employer must have added new employees to the reference base of workers in order to avail benefits under the PMRPY Scheme from August, 2016 onwards.The reference base of workers will be determined by the number of employees against whom the employer has deposited the 12% (3.67% EPF + 8.33% EPS) with EPFO as on 31<sup>st</sup> March, 2016. \n iii. The PMRPY Scheme is applicable to employees earning wages up to Rs. 15,000/- per month. Therefore, new employees earning wages more than Rs. 15,000/- per month will not be eligible. \n iv. The employers will continue to get the 8.33% contribution paid by the Government for the eligible new employees for the next 3 years, provided they continue in the employment by the same employer. \n v. The 8.33% contribution which will be paid by the Government only after the employer remits 3.67% EPF contribution for the new employees per month. It is also advised under the PMRPY Scheme that the employer must preferably submit the PMRPY online at the by 10<sup>th</sup> of the following month in order to avoid any penalty regarding EPF/EPS contribution. \n 3.  The PMRPY will be in operation for a period of 3 years. Therefore, all new eligible employees will be covered under the PMRPY Scheme till 2019-20. \n 4.  Eligibility Criteria for establishments claiming benefit under the PMRPY Scheme:  \n i. Establishments must have compulsory registration with EPFO and having valid LIN; \n ii. In case of not having LIN, application can be made through Shram Suvidha Portal; \n iii. Establishments must have valid organization PAN; \n iv. Mandatory valid Bank Account, details of which are required to be entered; \n v. Establishments should have increased the number of employees on or after 1<sup>st</sup> April, 2016; \n vi. Establishment should have submitted their Electronic Challan cum Return for the month of March, 2016. \n 5.  Eligibility Criteria for employees under PMRPY Scheme:  \n i. The new employees should have joined in the establishment on or after 1<sup>st</sup> April, 2016; \n ii. The employees were not regular employees in any EPF registered establishment prior to this; \n iii. New employee must have valid UAN which is Aadhaar linked; \n iv. The monthly wages of the new employee should be less than or up to Rs. 15,000/-. \n For details on the Pradhan Mantri Rojgar Protsahan Yojna, refer to the attached document titled “ Guidelines on Pradhan Mantri Rojgar Protsahan Yojna Plan Scheme ”. \n C.   Insurance Fund :   \n For each  employee  either appointed directly or through a contractor, contribute 0.5% of emolument to the  Insurance Fund . \n 4. Visit the “Employer e-Sewa” portal of EPFO for uploading data for payment of monthly contribution and getting the challan for payment.  \n 5. Make the payment through internet banking of State Bank of India or take a print out of the Challan and pay at any designated branch of State Bank of India. \n 6. Please note that the process as per the EPFO has changed to include payment electronically etc., however the Employees’ Provident Funds and Miscellaneous Provisions Act, 1952, Employees\' Provident Fund Scheme 1952, Employees\' Pension Scheme, 1995 and Employees’ Deposit-Linked Insurance Scheme, 1976 still provides the following: \n A.   For Provident Fund:-   \n Send the employee’s  contribution  and the  employer’s   contribution  (remaining after deducting the  contribution  for  pension fund ) along with the administrative charges (which is 0.50% of the emolument payable)  to the  Provident Fund  Account of each  employee  online through internet banking of the State Bank of India or any other nationalised bank or through the PayGov platform.  \n (Note: \n 1. The Provident Fund Commissioner may for reasons in writing, allow any employer or class of employer to deposit the contributions through any other mode except internet banking. \n 2. While calculating the contribution ensure that 50 (fifty) paisa or more is rounded off to next higher rupee and contribution less than 50 (fifty) paisa is ignored. \n 3. Where the monthly pay of an  employee  exceeds fifteen thousand rupees (Rs. 15000/-) the contribution payable by him, and in respect of him by the  employer , shall be limited to the amount payable on a monthly pay of fifteen thousand rupees (Rs. 15000/-). \n Based on the Supreme Court judgment dated: 9th September, 2011 in the case of Karamchari Sanghatana and Another Vs. Management of Marathwada Gramin Bank and Others, the EPFO has clarified [vide circular no. LC(637) 2009/Vol.I/203 dated  27.05.2014] that the employers can not be compelled to contribute over and above statutory wage ceiling in respect of their employees. It has been further clarified that the option is available for the employees to contribute beyond the statutory wage ceiling if they so desire, subject to fulfillment of the stipulated conditions under the Employees’ Provident Fund Scheme, 1952. \n 4. The deduction has to be totalled up as monthly deduction in all case irrespective of the employees being paid on daily or weekly or fortnightly basis. \n 5. With regard to the  employees  employed through a contractor,  ensure that the contractor recovers the contribution amount from the contract labourers paid by you as principal  employer  towards  Provident Fund  along with the administrative charges and repays you.)    6. Employees Provident Fund Organization (“EPFO”) issued a letter on 2nd February, 2017 clarifying the obligations of Principal Employer for ensuring compliance under the Employees’ Provident Funds and Miscellaneous Provisions Act, 1952 (“EPF Act”) in respect of employees engaged by or through contractors. \n Therefore, as a Principal Employer, you are required to advised to comply with the following: \n i. Ensure that the contractor is registered with EPFO before awarding any contract. After award of the contract, the contractor details should be entered in the EPFO portal. \n ii. Payments due to the contractor should be made only after verifying that the statutory PF payments have been made to EPFO. This can be verified either directly from the EPFO portal or insisting on a payment receipt obtained by the contractor from the EPFO portal while making payment. \n iii. You as a Principal Employer are empowered to deduct EPF dues from the contractor’s bill and deposit the same against the contractor’s code number or their own code number. \n [Note: \n a. If the contractors have separate PF code number, the overall responsibility of ensuring the compliance under the EPF Act, for the employees working through the contractors rests with the Principal Employer. \n b. Also, a provision on the official website of the EPFO, has been added under the “establishment search option” to verify whether the contractors are regularly depositing Provident Fund Contributions in respect of their employees].   \n B.   For Pension Fund:   \n Deposit within 15 days of the close of every calendar month by way of internet banking of the State Bank of India or any other Nationalized Bank authorized for collection, the Employees Pension Fund contribution.  \n (Note: \n 1. If the  Commissioner  of Employees  Provident Fund  has laid down any separate guideline for depositing the cheque or bank draft, then the same has to be followed and  the cost of remittance is to be paid. \n 2. If the contribution amount to Employees Pension exceeds fifteen thousand rupees (Rs. 15000/-) then fifteen thousand rupees (Rs. 15000/-)  would be payable.)                                                                                                                                                                                                                                \n C.   For Insurance Fund :   \n Send the contribution by a separate bank draft or cheque or by any manner specified by the  Commissioner  of  Provident Fund  for the all the  employees  within 15 days of close of a calendar  month. \n (Note: \n 1. While calculating the contribution ensure that 50 (fifty) paisa or more is rounded off to next higher rupee and contribution less than 50 (fifty) paisa is ignored. \n 2. Where the monthly pay of an employee exceeds fifteen thousand rupees (Rs. 15000/-) the contribution payable by him, and in respect of him by the employer, shall be limited to the amount payable on a monthly pay of fifteen thousand rupees (Rs. 15000/-). )                                                                                                                                                                                                       ',
	      nameOfLaw: 'EMPLOYEES PROVIDENT FUNDS AND MISCELLANEOUS PROVISIONS ACT, 1952 | EMPLOYEES\' PROVIDENT FUND SCHEME, 1952 | EMPLOYEES\' PENSION SCHEME, 1995 | EMPLOYEES DEPOSIT-LINKED INSURANCE SCHEME, 1976',
	      department: 'Human Resources',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Agnishwar Banerjee',
	      currentOwner: 'Agnishwar Banerjee',
	      reviewer: 'Zaheer Tarafdar',
	      dueDate: '18/12/2018',
	      status: ''
	    },
	    {
	      mapId: 28680,
	      complianceId: 21587,
	      complianceTitle: 'Application  to obtain license to act as Composite Corporate Agent',
	      taskName: 'Application  to obtain license to act as Composite Corporate Agent',
	      description: ' What is to be done?   Make an application to obtain a   license   to act as a   composite corporate agent  .     When is it to be done?   Prior to start of operations as a   composite corporate agent  .     How is it to be done?   Make two separate applications in Form   IRDA-Corporate Agents-A    and pay the required fees.  Check below for details  1. In case you wish to obtain a   license   to act as a   composite corporate agent  , then make two separate applications in the form   IRDA-Corporate Acgent-A-1   to the   designated person  .  2. Pay fees of Rs. 250/- remitted to the   Authority   and provide evidence of such payment to the   designated person   along with the above application.  3. The Memorandum of Association of your company must contain soliciting or procuring insurance business as a   corporate agent   as one of the main objects.   4. Ensure that your designated corporate insurance executive  i. has the minimum passed 12th standard or equivalent examination conducted by any recognized Board/ Institution, where the applicant resides in a place with a population of five thousand or more as per the last census, or  ii. has at the minimum passed 10th Standard or equivalent examination from a recognized Board/ Institution in all other cases; and iii. has completed, from an approved institution, at least, one hundred hours’ of practical training spread over three to four weeks, in life or general insurance business, or iv. has completed at least, fifty hours’ of practical training from an approved institution, in case the corporate insurance executive appointed is:  a. an Associate/Fellow of the Insurance Institute of India, Mumbai;  b. an Associate/Fellow of the Institute of Chartered Accountants of India, New Delhi;  c. an Associate/Fellow of the Institute of Costs and Works Accountants of India, Calcutta;  d. an Associate/Fellow of the Institute of Company Secretaries of India, New Delhi.  e. an Associate/Fellow of the Actuarial Society of India, Mumbai;  f. a Master of Business Administration of any Institution/ University recognised by any State Government or the Central Government; or  g. Possesses a Certified Associateship of Indian Institute of Bankers (CAIIB); or  h. Possesses any professional qualification in marketing from any Institution/ University recognised by any State Government or the Central Government.  v. is not disqualified due to any of the following reasons  a. found to be of unsound mind by a Court of competent jurisdiction;  b. found guilty of criminal misappropriation or criminal breach of trust or cheating or forgery or an abetment of or attempt to commit any such offence by a Court of competent jurisdiction.  (Note:  Where at least five years have elapsed since the completion of the sentence imposed on any person in respect of the above offence, the Authority shall declare that in respect of such person his conviction will no longer act as a disqualification under this point ii. mentioned above.)  c. does possess the requisite qualifications and practical training for a period exceeding twelve months.  d. does not violate the code of conduct. For details refer to compliance titled “Code of conduct for a corporate agent”.  (Note:  1. The designated person recieving the application, may grant, a licence in Form IRDA-Corporate Agents-L-1, to act as a corporate agent on being satisfied that the designated corporate insurance executive possesses the required minimum qualification, practical training, has passed the relevant examination, has furnished an application complete in all respects; has the requisite knowledge to solicit and procure insurance business; and is capable of providing the necessary service to the policyholders;  2. The licence granted allows you to act as corporate insurance agent for one life insurer or one general insurer or both, as the case may be.  3. The designated person shall also provide the identity card shall be in Form IRDA- Corporate Agents-ID-1.  4. The licence within a period of 3 months from the date of application or the reasons for such a delay are communicated within 60 days of the receipt of the application along with the likely time it would take to do so.  5. The Authority may refuse or reject, an application if it feels that the grant of licence may be against public interest or when the application is from such a person or group of persons who is or are already engaged as insurance agents, brokers, etc.   6.License once granted will be valid for a period of 3 years from the date of issue.) ',
	      nameOfLaw: 'INSURANCE ACT, 1938 | IRDA (LICENSING OF CORPORATE AGENTS) REGULATIONS,2002',
	      department: 'Administration',
	      opUnit: 'Mumbai Center',
	      owner: 'Ayan Roy',
	      currentOwner: 'Ayan Roy',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '18/12/2018',
	      status: ''
	    },
	    {
	      mapId: 28681,
	      complianceId: 19844,
	      complianceTitle: 'Verification of nomination details and return of the duplicate copy',
	      taskName: 'Verification of nomination details and return of the duplicate copy',
	      description: ' What is to be done ?    Verify the service records of the   employee  .    When is to be done ?    Within 30 days of receipt of nomination in   Form F  .    How is to be done ?    Verify   Form F    with reference to records of establishment.   Check below for details.    Upon receiving   Form F   from the   employee   take the following steps within 30 days from the receipt of such nomination in   Form F  :  i. Verify the service record of the   employee   mentioned in   Form F    with reference to the records of the establishment; and   ii. Upon verification,  attest the duplicate copy (through an authorized officer of the company) of such nomination form and return the duplicate copy of nomination   Form F   after obtaining receipt from the   employee   and record the other copy.  (Note:   Each   employee  , shall make nomination within 30 days of completion of 1 year of service) ',
	      nameOfLaw: 'PAYMENT OF GRATUITY ACT 1972 | PAYMENT OF GRATUITY CENTRAL RULES, 1972',
	      department: 'Administration',
	      opUnit: 'Mumbai Center',
	      owner: 'Ayan Roy',
	      currentOwner: 'Ayan Roy',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '18/12/2018',
	      status: ''
	    },
	    {
	      mapId: 28684,
	      complianceId: 17692,
	      complianceTitle: 'Maintain minimum paid-up capital and reserves as a banking company incorporated outside India',
	      taskName: 'Maintain minimum paid-up capital and reserves as a banking company incorporated outside India',
	      description: ' What is it to be done?    Maintain the minimum paid-up capital and reserves as specified herein.      When is it to be done?    In case you are a bank incorporated outside India; on an ongoing basis    Check below for details:    Maintain the minimum aggregate value of your paid-up capital and reserve which shall not be less than the following amount.  - Rs. 20 lakhs if you have a place or places of business in the city of Bombay or Calcutta or both; or  -Rs. 15 lakhs in other cases.        (Note:  1. "Place of business" means any office, sub-office, sub-pay office and any place of business at which deposits are received, cheques cashed, or moneys lent.    2. "Value" means the real or exchangeable value, and not the nominal value which may be shown in the books of the   banking company   concerned.) ',
	      nameOfLaw: 'BANKING REGULATION ACT, 1949',
	      department: 'I.T',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Aditya Chaudhuri',
	      currentOwner: 'Aditya Chaudhuri',
	      reviewer: 'Subash Gmail',
	      dueDate: '18/12/2018',
	      status: ''
	    },
	    {
	      mapId: 28685,
	      complianceId: 17692,
	      complianceTitle: 'Maintain minimum paid-up capital and reserves as a banking company incorporated outside India',
	      taskName: 'Maintain minimum paid-up capital and reserves as a banking company incorporated outside India',
	      description: ' What is it to be done?    Maintain the minimum paid-up capital and reserves as specified herein.      When is it to be done?    In case you are a bank incorporated outside India; on an ongoing basis    Check below for details:    Maintain the minimum aggregate value of your paid-up capital and reserve which shall not be less than the following amount.  - Rs. 20 lakhs if you have a place or places of business in the city of Bombay or Calcutta or both; or  -Rs. 15 lakhs in other cases.        (Note:  1. "Place of business" means any office, sub-office, sub-pay office and any place of business at which deposits are received, cheques cashed, or moneys lent.    2. "Value" means the real or exchangeable value, and not the nominal value which may be shown in the books of the   banking company   concerned.) ',
	      nameOfLaw: 'BANKING REGULATION ACT, 1949',
	      department: 'I.T',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Aditya Chaudhuri',
	      currentOwner: 'Aditya Chaudhuri',
	      reviewer: 'Subash Gmail',
	      dueDate: '18/12/2018',
	      status: ''
	    },
	    {
	      mapId: 28686,
	      complianceId: 442,
	      complianceTitle: 'Hoists and Lifts - Specifications',
	      taskName: 'Hoists and Lifts - Specifications',
	      description: ' What is to be done?    Construct hoists and lifts.    When is to be done?   On intention to use hoists or lifts in   factory  .    How is to be done?   Construct with sound material etc.  Check below for details.   Comply with the following specifications related to hoists and lifts used in the   factory   -  i. All hoists and lifts :  a. shall be of good mechanical construction, sound material and adequate strength;  b. shall be sufficiently protected by enclosures fitted with gates and such enclosures shall be constructed in such a way as to prevent any person or thing from being trapped between any part of the hoist or lift and any fixed structure or moving part;  c. shall be constructed in such a way as to prevent any person or thing from being trapped between any part of the hoist or lift and any fixed structure or moving part;  iv. the maximum safe working load shall be marked clearly on every hoist or lift and no load greater than that shall be carried by such hoist or lift;  v. the cage of every hoist or lift shall be fitted with a gate on each side from which access is afforded to a landing.  vi. such gates of the hoist and lift shall be fitted with interlocking devices so as to secure that the gate cannot be opened except when the cage is at the landing and that the cage cannot be moved unless the gate is closed.  (Refer to the attached   table   for information regarding exemptions granted to certain class of hoists and lifts from the purview of some of the above mentioned provisions.) ',
	      nameOfLaw: 'FACTORIES ACT, 1948 | MAHARASHTRA FACTORIES RULES, 1963',
	      department: 'I.T',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Aditya Chaudhuri',
	      currentOwner: 'Aditya Chaudhuri',
	      reviewer: 'Subash Balakrishnan',
	      dueDate: '18/12/2018',
	      status: ''
	    },
	    {
	      mapId: 28691,
	      complianceId: 17692,
	      complianceTitle: 'Maintain minimum paid-up capital and reserves as a banking company incorporated outside India',
	      taskName: 'Maintain minimum paid-up capital and reserves as a banking company incorporated outside India',
	      description: ' What is it to be done?    Maintain the minimum paid-up capital and reserves as specified herein.      When is it to be done?    In case you are a bank incorporated outside India; on an ongoing basis    Check below for details:    Maintain the minimum aggregate value of your paid-up capital and reserve which shall not be less than the following amount.  - Rs. 20 lakhs if you have a place or places of business in the city of Bombay or Calcutta or both; or  -Rs. 15 lakhs in other cases.        (Note:  1. "Place of business" means any office, sub-office, sub-pay office and any place of business at which deposits are received, cheques cashed, or moneys lent.    2. "Value" means the real or exchangeable value, and not the nominal value which may be shown in the books of the   banking company   concerned.) ',
	      nameOfLaw: 'BANKING REGULATION ACT, 1949',
	      department: 'Administration',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Zaved Akhtar',
	      currentOwner: 'Zaved Akhtar',
	      reviewer: 'Koushik Sinha',
	      dueDate: '18/12/2018',
	      status: ''
	    },
	    {
	      mapId: 28703,
	      complianceId: 25127,
	      complianceTitle: 'Inform the depository of any modification in terms or structure of the issue - Applicable to Issuers ',
	      taskName: 'Inform the depository of any modification in terms or structure of the issue - Applicable to Issuers ',
	      description: '  What is to be done?  Inform the depository immediately, where the terms or structure of the issue is modified.    When it is to be done?  In case there is any modification in terms or structure of the issue.    How it is to be done?  By following the manner discussed below.   Check below for details.  As an Issue, in case there is any modification to the terms of the debt securities such as change in terms of payment, change in interest pay-out frequency, etc.   1. Take prior approval of consent from the Board and the majority of the holders of the debt securities as per Companies Act, 2013 for modification of the terms of debt securities issued on private placement basis.  2. On obtaining approval from the Board and majority holders of the debt securities, additionally take approval from stock exchange before making any material modification in the terms of the debt securities.  3. On modification in the terms/structure of the issue, inform the same to the depository. ',
	      nameOfLaw: 'SEBI ACT, 1992 | SECURITIES AND EXCHANGE BOARD OF INDIA (LISTING OBLIGATIONS AND DISCLOSURE REQUIREMENTS) REGULATIONS, 2015 | SECURITIES AND EXCHANGE BOARD OF INDIA (ISSUE AND LISTING OF DEBT SECURITIES) REGULATIONS, 2008 | THE SECURITIES LAWS (AMENDMENT) ACT, 2014 | SEBI CIRCULAR CIR/IMD/DF-1/ 67 /2017 - SPECIFICATIONS RELATED TO INTERNATIONAL SECURITIES IDENTIFICATION NUMBER (ISINS)',
	      department: 'I.T',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Shantanu Das',
	      currentOwner: 'Shantanu Das',
	      reviewer: 'Aditya Chaudhuri',
	      dueDate: '18/12/2018',
	      status: ''
	    },
	    {
	      mapId: 28769,
	      complianceId: 21614,
	      complianceTitle: 'Payment of Arrear for Minimum and Maximum Bonus - to be calculated with retrospective effect for the financial year 2014-2015 vide Payment of Bonus Amendment Act, 2015 notification',
	      taskName: 'Payment of Arrear for Minimum and Maximum Bonus - to be calculated with retrospective effect for the financial year 2014-2015 vide Payment of Bonus Amendment Act, 2015 notification',
	      description: ' What is to be done?   Pay Minimum and Maximum Bonus\' Arrear - to be calculated with retrospective effect for the financial year 2014-2015.     When is it to be done?   Immediately for the financial year 2014-2015 within 8 months of the end of current accounting year.     How is it to be done?   By taking into account the difference between the new and the previous statutory amounts for calculating the arrear by following the prescribed payment procedure while paying arrear of the bonus.    Check below for details.    1.   For newly set up establishments between 0-5 years  :  In case of a new establishment in the first five  accounting year s following the  accounting year  in which goods produced or manufactured have been sold from the establishment, bonus shall be paid only in respect of the  accounting yea r in which profit has been made. The eligibility criterion for  “Minimum Bonus ” shall apply. The provisions relating to set on and set off of  allocable surplus  must not be considered.    (Note:  If there is no profit during the first 5 years, bonus is not required to be paid.)    2.  For 6th and 7th year of any establishment  :  For the 6th and 7th  accounting year  the eligibility criterion for  “Minimum Bonus ” shall apply subject to the following modifications;  (i) for the sixth  accounting year  -  set on or set off, as the case may be, shall be made in the manner illustrated in the Fourth Schedule taking into account the excess or deficiency, if any, as the case may be, of the  allocable surplus  set on or set off in respect of the fifth and sixth  accounting year ;  (ii) for the seventh  accounting year  -   set on or set off, as the case may be, shall be made in the manner illustrated in the Fourth Schedule taking into account the excess or deficiency, if any, as the case may be, of the  allocable surplus  set on or set off in respect of the fifth, sixth and seventh  accounting year .  (The Fourth Schedule has been mentioned in the Forms)    3. From the 8th  accounting year :  The higher of the minimum or the maximum bonus amount must be paid to all  employee (s) in the factory or establishment, from the 8th  accounting year s from the time goods produced or manufactured in the same were first sold.     (a) - MINIMUM BONUS:  Age of Employee                                                        Bonus  > 15 years                                    8.33% of the  salary or wage  or                                                          Rupees 100.00, whichever is higher    <15 years                                       8.33% of the  salary or wage  or                                                           Rupees 60.00, whichever is                                                              higher.  OR    (b) - MAXIMUM BONUS  i. Maximum bonus has to be paid to every  employee  if the  allocable surplus  for the  accounting year  in which bonus is being paid exceeds the minimum bonus amount payable to the  employee s.  ii. Bonus will be paid in proportion to the  salary or wage  earned by the employee during the accounting year or 20% of the  salary or wage .    [Note:  i. If the  salary or wage  of an employee exceeds Rs 7000 or the minimum wage for the scheduled employment, as fixed by the appropriate Government, whichever is higher per month, then the bonus paid to such employee must be calculated as if his/her  salary or wage  were Rs 7000 or the minimum wage for the scheduled employment, as fixed by the appropriate Government, whichever is higher.  ii. Confirmation of the completion of 7 years is to be obtained from the in-house Legal & Compliance team.  iii. Bonus is to be paid irrespective of whether there is any  allocable surplus .  iv. The age of the  employee  at the beginning of the  accounting year  in which bonus will be paid will be considered for the purpose of calculating the amount payable.  v. The eligibility and computation criteria for “Minimum Bonus” and "Maximum Bonus" have been mentioned in the Forms [Eligibility Criterion - (Minimum Bonus) and Eligibility Criterion (Maximum Bonus)].     4. All amounts payable to an  employee  by way of bonus under this Act Shall be paid in cash within a period of eight months from close of an  accounting year .    [Note:  As an  employer , you are not mandated to pay bonus to  employee s drawing  salary or wage  exceeding Rs.21,000 per month under the Payment of Bonus Act, 1965]',
	      nameOfLaw: 'PAYMENT OF BONUS ACT, 1965 | PAYMENT OF BONUS RULES, 1975',
	      department: 'Administration',
	      opUnit: 'Mumbai Center',
	      owner: 'Ayan Roy',
	      currentOwner: 'Ayan Roy',
	      reviewer: 'Koushik Sinha',
	      dueDate: '18/12/2018',
	      status: ''
	    }
	  ],
	  iTotalRecords: 10,
	  iTotalDisplayRecords: 10
	};

	console.log(dataMap);

	return res.json(dataMap);
}
module.exports.compStatusDataList = compStatusDataList;

const compActStatusDataList = async function(req, res) {
	var dataMap = {
	  sEcho: null,
	  aaData: [
	    {
	      mapId: 28574,
	      complianceId: 25230,
	      title: 'Disclosure and transparency requirements - updating the Board of progress in compliance with corporate governance requirements - applicable to NBFCs-ND-SI and NBFCs-D',
	      taskName: 'Disclosure and transparency requirements - updating the Board of progress in compliance with corporate governance requirements - applicable to NBFCs-ND-SI and NBFCs-D',
	      description: '  What is to be done ?  Disclose before the Board of Directors the effectiveness and progression on the internal risk management system, risk management policy and strategy and whether you are conforming to the standards of corporate governance.     When is it to be done ?  At all times.     How is it to be done ?    Check below for details:    By disclosing the following before the Board of Directors:  i. the progress made in putting in place a progressive risk management system and risk management policy and strategy followed by the NBFC;    ii. conformity with corporate governance standards viz., in composition of various committees, their role and functions, periodicity of the meetings and compliance with coverage and review functions, etc. \n   ',
	      nameOfLaw: 'RESERVE BANK OF INDIA ACT, 1934 | NON-BANKING FINANCIAL COMPANIES – CORPORATE GOVERNANCE (RESERVE BANK) DIRECTIONS, 2015',
	      department: 'Administration',
	      opUnit: 'Mumbai Center',
	      owner: 'Ayan Roy',
	      currOwner: 'Ayan Roy',
	      reviewer: 'Sohom Roy',
	      dueDate: '30/12/2018',
	      impact: 'Medium'
	    },
	    {
	      mapId: 28633,
	      complianceId: 20078,
	      title: 'Appointment of apprentices and submission of contract- applicable for industries undertaking designated trade',
	      taskName: 'Appointment of apprentices and submission of contract- applicable for industries undertaking designated trade',
	      description: '  What is to be done?    Execute contract before engaging apprentice for designated trades relating to hazardous industries.     When is it to be done?    Before appointing an apprentice.      How is it to be done?    Draft contract incorporating the prescribed terms and conditions.     Check below for details.    1. While you appoint/ engage someone as an apprentice in designated trades, ensure that     i. he/she is not below the age of 14 years of age, or    ii. he/she is not be below 18 years of age, in case of designated trades related to hazardous industries.    iii. he/she satisfies the minimum standards of physical fitness as provided in Schedule-II keeping in mind certain cases as maintained in Annexure A.    2. Ensure that a trade apprentice satisfies the minimum educational qualifications specified in Schedule-I. (Refer to the embedded documents titled as Schedule I-2009, Schedule I-2010 and Schedule I-2013 to see the latest amendments in some of the designated trades, period of apprenticeship, desirable qualifications etc.)    3. Ensure that a graduate or technician apprentice or technician vocational apprentice satisfies the minimum educational qualifications specified in Schedule I-A.    4. Send the contract of apprenticeship executed between employer and apprentice to the Apprenticeship Adviser within 30 days of signing the contract until a portal-site for this purpose is developed by the Central Government. Thereafter upload the details of the contract on the portal-site within 7 days.    (Note:  i. The contract for apprenticeship must be drafted incorporating the terms and conditions provided in Schedule V and Schedule VI.    ii. If the apprentice is a minor, ensure that a contract is executed with the guardian of such apprentice.     iii. Keeping in view seasonality in operation or business or flexibility desired by trade apprentice, a trade apprentice may complete his period of apprenticeship training within five years or double the duration of apprenticeship training whichever is less from the date of starting of his apprenticeship training.     iv. Such flexibility shall be permissible in the following manner, namely:   a. Maximum one break for trades having duration two years or less than two years;     b. Maximum two breaks for trades having duration more than two years.)     5. Re[port the start and end date of his apprenticeship training on portal-site.    6. The period of apprenticeship training mentioned in the contract of apprenticeship commencing from the date it is signed must be as per the following guidelines:     i. The period of apprenticeship training for trade apprentices who have undergone institutional training in a school or other institution recognised by the National Council and have passed the trade tests or examinations conducted by that Council or by an institution recognised by that Council, must be such as may be determined by that Council prescribed.    ii. The period of apprenticeship training for trade apprentices who have undergone institutional training in a school or other institution affiliated to or recognised by a Board or State Council of Technical Education or any other authority or courses approved under any scheme which the Central Government may, by notification in the official gazette specify in this behalf and have passed the trade tests or examinations conducted by that Board or State Council or authority or any other agency authorized by the Central Government, must be such as specified in Schedule I-B.     iii. In other cases the period of apprenticeship training must be such as specified in Schedule I.    (Note:   The first 6 months of the period of training shall be treated as period of probation).    iv. The period of apprenticeship training for graduate or technician apprentices or technician vocational apprentices, must be 1 year.    v. For Sandwich Course Students, the period of practical training they undergo as part of apprenticeship course of studies is the period of apprenticeship training.    \n   ',
	      nameOfLaw: 'APPRENTICES ACT, 1961 | APPRENTICESHIP RULES, 1992',
	      department: 'Administration',
	      opUnit: 'Mumbai Center',
	      owner: 'Ayan Roy',
	      currOwner: 'Ayan Roy',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '16/12/2018',
	      impact: 'Medium'
	    },
	    {
	      mapId: 28573,
	      complianceId: 5786,
	      title: 'Submit Statutory Auditors Certificate - All NBFC',
	      taskName: 'Submit Statutory Auditors Certificate - All NBFC',
	      description: '  What is to be done ?   Submit Certificate from your Statutory Auditor to RBI     When is it to be done?   Annually,   One month from the date of finalisation of Balance Sheet. Not later than 31st December.     How is it to be done?   Submit Statutory Auditors Certificate (SAC)     Check below for details:   1. Submit Statutory Auditors Certificate (SAC) every year ensure consistency in the manner in which the information is received  from the Auditors, a uniform format of the SAC as attached herein.  2. Fill in the information, as applicable, in COSMOS.  3. The SAC needs to be scanned and uploaded in COSMOS under the menu “Upload Report. \n   ',
	      nameOfLaw: 'RESERVE BANK OF INDIA ACT, 1934 | MASTER DIRECTION- NON-BANKING FINANCIAL COMPANY RETURNS (RESERVE BANK) DIRECTIONS, 2016 (MASTER DIRECTION DNBS.PPD.02/66.15.001/2016-17)',
	      department: 'Administration',
	      opUnit: 'Mumbai Center',
	      owner: 'Ayan Roy',
	      currOwner: 'Ayan Roy',
	      reviewer: 'Siddharth Singh',
	      dueDate: '15/12/2018',
	      impact: 'High'
	    },
	    {
	      mapId: 28585,
	      complianceId: 201,
	      title: 'Deduction and deposit of contributions',
	      taskName: 'Deduction and deposit of contributions',
	      description: '  What is to be done?   Deposit   contributions.    When it is to be done?   Within 15 days from the end of calendar month    How it is to be done?   Deposit   contribution   to a bank authorised by the   corporation.    Check below for details.    I. Deposit of contribution  :    Deposit   contribution   to a bank authorised by the   corporation   within 15 days of the last day of the calendar month in which the   contributions   fall due; at the following rates:  i.   employer\'s  contribution  : a sum (rounded to the next higher rupee) equal to 4.75% of the wages; and ii.   employee\'s  contribution  : a sum (rounded to the next higher rupee) equal to 1.75% of the wages.     II. Deposit of contribution in case of implementation of the Employees’ State Insurance Act, 1948 (“Act”) for the first time:    In case the Act is implemented for the first time, deposit the deposit the  contribution  for the initial 24 months from the date of implementation at the following rates:  i.  employer’s contribution  - A sum (rounded to the next higher rupee) equal to three per cent of the wages payable to an employee; and ii.  employee’s contribution  – A sum (rounded to next higher rupee) equal to one per cent of the wages payable to an employee.  However, please note that on completion of the 24 months from the date of implementation of the Act, the rate of contribution as provided under the above heading "I. Deposit of contribution" will be applicable.      III.     Liability of Principal Employer  :    Principal employer   shall deposit   contribution   in respect of every   employee   whether directly under the employment of the   principal employer   or a contract employee, employed through a contractor.  (Note:  Principal   employer   shall only be entitled to deduct from wages payable to an   employee   directly under his employment, the amount of contribution paid/ deposited on behalf of the employee directly under his employment and not any amount of contribution deposited/ paid on behalf of any contract   employee   working in the factory /establishment of the principal   employer  .  2. Vide notification No. N-12/13/2/2010-P&D, it has been stated that all establishments/factories where the online system has been introduced, the procedures pertaining to depositing contributions is required to be done through online only and wherever the signature is required, the same has to be put digitally).    IV. Deduction of contribution from wages  :    i. Do not deduct from any   wages   other than the   wages   of the   employee   payable for the period in respect of which   contribution   has been paid/deposited by you.  ii. Do not deduct from   wages   of an   employee   any amount of money which is in excess of the   contribution   paid on behalf of the   employee  .      iii. Do not deduct the part of   contribution   payable/paid as the   employer\'s contribution   from any   wages   payable to an   employee   or otherwise.    V. Expenses  :    All expenses relating to deposition/payment of   contribution   shall be borne by the   employer  .  (Note 1: In respect of an employee with disability under the Persons with Disabilities (Equal Protection of Rights and Full Participation) Act, 1995 and under the National Trust for Welfare of Persons with Autism, Cerebral Palsy, Mental Retardation and Multiple Disabilities Act, 1999, the employer is not required to pay employer\'s share of contribution up to a maximum period of three years from the date of commencement of the contribution period.)  (Note 2: Wherever, "on-line system" of functioning has been introduced, the registration of factory/establishment and employees, filing of contributions, generation of challans, payment of contributions, submission and processing of claim s for benefits and all other related procedures under the Act and the Rules and Regulations made thereunder, shall be submitted/made on-line, with necessary digital signatures, wherever required, under these regulations, as may be specified by the Director General from time to time.)  \r\n   ',
	      nameOfLaw: 'EMPLOYEE STATE INSURANCE ACT, 1948 | EMPLOYEES STATE INSURANCE (CENTRAL) RULES, 1950 | EMPLOYEES STATE INSURANCE (GENERAL) REGULATIONS, 1950',
	      department: 'Administration',
	      opUnit: 'Mumbai Center',
	      owner: 'Ayan Roy',
	      currOwner: 'Ayan Roy',
	      reviewer: 'Atul Sadre',
	      dueDate: '15/12/2018',
	      impact: 'High'
	    },
	    {
	      mapId: 28724,
	      complianceId: 24920,
	      title: 'Furnish Audit Report in Form GSTR-9C- Applicable to registered person whose aggregate turnover exceeds Rs. 2 Crore- West Bengal',
	      taskName: 'Furnish Audit Report in Form GSTR-9C- Applicable to registered person whose aggregate turnover exceeds Rs. 2 Crore- West Bengal',
	      description: ' What is to be done?    Furnish a copy of audited annual accounts.      When is it to be done?    On or before 31st December following the end of financial year.     How is it to be done?    File electronically in   FORM GSTR 9C   on the   Common Portal.      Check below for details:  1. If your   aggregate turnover   during a financial year exceeds two crore rupees, get your accounts audited and furnish a copy of audited annual accounts and a reconciliation statement, duly certified, in   FORM GSTR-9C,   electronically through the   Common Portal   either directly or through a Facilitation Centre notified by the   Commissioner.       Note :    \r\n 1.CBIC has amended the CGST Rule, 2017 vide Notification No 49/2018- Central Tax dated 13th September, 2018 and has inserted Audit Report Form GSTR-9C as attached. \r\n 2. Ministry of Finance has issued an Order called the Central Goods and Services Tax (Removal of Difficulties) Order, 2018 dated 11th December, 2018 to declare that the GST Annual Return in  FORM GSTR-9  from the 1st July, 2017 to the 31st March, 2018 shall be furnished on or before the 31<sup>st</sup> day of March, 2019 .  Wherever copy of audited annual accounts and reconciliation statement duly certified, in  FROM GSTR-9C,  needs to be submitted along with GST Annual return shall also stand extended till  31<sup>st</sup> day of March, 2019 . ',
	      nameOfLaw: 'INTEGRATED GOODS AND SERVICES TAX ACT, 2017 | CENTRAL GOODS AND SERVICES TAX ACT, 2017 | INTEGRATED GOODS AND SERVICES TAX RULES, 2017 | CENTRAL GOODS AND SERVICES TAX RULES, 2017 | THE WEST BENGAL GOODS AND SERVICES TAX ORDINANCE, 2017 | THE WEST BENGAL GOODS AND SERVICES TAX RULES, 2017',
	      department: 'Administration',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Agnishwar Banerjee',
	      currOwner: 'Agnishwar Banerjee',
	      reviewer: 'Ayan Roy',
	      dueDate: '12/12/2018',
	      impact: 'Medium'
	    },
	    {
	      mapId: 28401,
	      complianceId: 2835,
	      title: '"Consent to establish" required before construction  for new establishment',
	      taskName: '"Consent to establish" required before construction  for new establishment',
	      description: '  What is to be done ?   Obtain consent to establish from Tamil Nadu Pollution Control Board ("TNPCB").      When is it to be done ?   Prior to the establishment of an industrial plant.     How is it to be done ?   Apply in  Form II .    Check below for details.    Obtain "Consent to establish"  from  Tamil Nadu Pollution Control Board prior to the establishment of an industrial plant.     (Note:    1. Please check with Tamil Nadu Pollution Control Board whether  Form II  is to be used for applying for “Consent to establish” and the fee attached would be payable with the application.    2. Vide Office Order dated 2nd August, 2016, TNPCB has revised the validity period for which Consent to Establish will be granted in the following manner:  i. Consent to Establish validity period will be 7 years for all EIA Projects  ii. Consent to Establish validity period will be 5 years for all Non-EIA Projects    3. For further extension of consent to establish, apply 60 days prior to expiry of validity period of Consent to Establish that had been issued.    4. Pursuant to Central Pollution Control Board\'s ("CPCB") Notification No. B-29012/ESS(CPA)2015-16/ dated 7th March, 2016, TNPCB has  issued revised categories of Industries under the Red, Green, Orange and White categories on 2nd August, 2016. You may refer to the document titled \'Recategorization of Industries\' in the reference documents tab for the revised list of categorization of Industries.     5.1 According to CPCB’s directions, consent to the industries falling within the given category may be granted in the following manner:  Red category of industries for 5 years.   Orange category of industries for 10 years.   Green category of industries for 15 years.   White Category (non-polluting): No necessity of consent for non-polluting industries    5.2 In pursuance of this, the Orders issued by TNPCB prescribe that in case any industry is not listed in Red, Orange, Green and White Category, but wants to apply then the District Environmental Engineer (“DEE”) will work out the score as per CPCB guidelines and arrive at the category. Then the industry will be asked to select Miscellaneous type available in that category.     6. Consent to establish will be issued after remittance of one fee by the project proponent.    7. The Consent fee slab for industries under Red, Orange and Green category will be considered for one year, two years and two years respectively i. e. Red Category industry one fee is for one year, for Orange category industry, one fee is for two years and for Green category industry, one fee is for two years.    8. The Consent fee should be paid in accordance with the fees prescribed in the document titled ‘Fee’ and ‘Revised Fee’ as available in the Relevant documents tab.    9. The Consent to Establish orders will be issued with validity date ending 31st March.) \r\n   ',
	      nameOfLaw: 'WATER (PREVENTION AND CONTROL OF POLLUTION) ACT, 1974 | TAMIL NADU WATER (PREVENTION AND CONTROL OF POLLUTION) RULES, 1983',
	      department: 'I.T',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Aditya Chaudhuri',
	      currOwner: 'Aditya Chaudhuri',
	      reviewer: 'Subash Balakrishnan',
	      dueDate: '08/12/2018',
	      impact: 'High'
	    },
	    {
	      mapId: 28794,
	      complianceId: 8454,
	      title: 'Time and mode of payment to Government account for TDS or tax paid',
	      taskName: 'Time and mode of payment to Government account for TDS or tax paid',
	      description: ' What is to be done?   Remit TDS amount to Government account for TDS or   tax  .    When is to be done?   On or before 7 days from the end of the month in which the deduction is made.    How is to be done?   By remitting TDS amount in ITNS 281.   Click below for details.  1. Remit TDS amount in ITNS 281 to the Government account on or before 7 days from the end of the month in which the deduction is made and for the month of March remit before 30th day of April.  2. Quote Permanent Account Number (PAN). ',
	      nameOfLaw: 'INCOME-TAX ACT, 1961 | INCOME-TAX RULES, 1962',
	      department: 'Legal and Company Secretarial',
	      opUnit: 'Mumbai Center',
	      owner: 'Zaheer Tarafdar',
	      currOwner: 'Zaheer Tarafdar',
	      reviewer: 'Indranil Choudhury',
	      dueDate: '07/12/2018',
	      impact: 'High'
	    },
	    {
	      mapId: 28261,
	      complianceId: 17692,
	      title: 'Maintain minimum paid-up capital and reserves as a banking company incorporated outside India',
	      taskName: 'Maintain minimum paid-up capital and reserves as a banking company incorporated outside India',
	      description: ' What is it to be done?    Maintain the minimum paid-up capital and reserves as specified herein.      When is it to be done?    In case you are a bank incorporated outside India; on an ongoing basis    Check below for details:    Maintain the minimum aggregate value of your paid-up capital and reserve which shall not be less than the following amount.  - Rs. 20 lakhs if you have a place or places of business in the city of Bombay or Calcutta or both; or  -Rs. 15 lakhs in other cases.        (Note:  1. "Place of business" means any office, sub-office, sub-pay office and any place of business at which deposits are received, cheques cashed, or moneys lent.    2. "Value" means the real or exchangeable value, and not the nominal value which may be shown in the books of the   banking company   concerned.) ',
	      nameOfLaw: 'BANKING REGULATION ACT, 1949',
	      department: 'I.T',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Aditya Chaudhuri',
	      currOwner: 'Aditya Chaudhuri',
	      reviewer: 'Shantanu Das',
	      dueDate: '02/12/2018',
	      impact: 'High'
	    },
	    {
	      mapId: 28265,
	      complianceId: 17701,
	      title: 'Prior approval for remitting debts due to you by the directors etc.',
	      taskName: 'Prior approval for remitting debts due to you by the directors etc.',
	      description: ' What is it to be done?\n   Follow the below procedure for remitting any debt due to you by the directors etc.  \n   \n When is it to be done?  \n In case you intend to remit any debt due to you by the directors etc.\n \n Check below for details:\n \n In case you intend to remit any debt (in whole or in part) due to you by -\n i. any of your directors, or\n ii. any firm or company in which any of your directors is interested as director, partner,   managing agent   or guarantor, or\n iii. any individual, if any of your directors is his partner or guarantor;\n \n take prior approval of RBI for such remittance.\n \n (Note:\n Any remission made in contravention of the provisions stated above shall be void and have no effect.) ',
	      nameOfLaw: 'BANKING REGULATION ACT, 1949',
	      department: 'I.T',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Aditya Chaudhuri',
	      currOwner: 'Aditya Chaudhuri',
	      reviewer: 'Saikat Mondal',
	      dueDate: '02/12/2018',
	      impact: 'High'
	    },
	    {
	      mapId: 28469,
	      complianceId: 17693,
	      title: 'Deposit of minimum paid-up capital and reserves as a banking company incorporated outside India',
	      taskName: 'Deposit of minimum paid-up capital and reserves as a banking company incorporated outside India',
	      description: ' What is it to be done?  \n Deposit the minimum required paid-up capital and reserves with the RBI.\n   \n When is it to be done?  \n In case of being incorporated outside India; on an ongoing basis.\n \n Check below for details:\n \n Deposit and keep deposited in cash or in the form of unencumbered approved securities or a mix of both at the principal office of the Reserve Bank the following amounts-\n \n a.  an amount which shall not be less than\n - Rs. 20 lakhs if you have  a place or places of business in the city of Bombay or Calcutta or both; or\n -- Rs. 15 lakhs in other cases;\n \n (Note:\n "Place of business" means any office, sub-office, sub-pay office and any place of business at which deposits are received, cheques cashed, or moneys lent.)\n \n and\n   \n b. an amount calculated at 20% of your profit for the last year in respect of all business transacted through your   branches   in India, as disclosed in the profit and loss account prepared with reference to that year.  \n \n   (Note:\n 1. Upon receipt of the above deposit,  the principal office of the Reserve Bank shall, as soon as possible, send to your principal office a certificate in   Form II  .\n \n 2. In case a security in deposit matures or any yield on such a security ceases to accrue, send a requisition in writing to the principal office of the Reserve Bank requesting the Reserve Bank to collect the discharge value and hold the amount in deposit.\n Upon the receipt of any such requisition, the principal office of the Reserve Bank, shall, as soon as possible, collect discharge value and hold the amount in deposit stated above.\n \n 3. The value of each security deposited shall be estimated at its market rate, ex-dividend.\n \n 4. The principal office of the Reserve Bank shall not be bound to return securities actually deposited, but may substitute therefor new scrip of securities of the same description and amount.\n \n 5. When the form or amount of deposit is changed by reason of a subsequent deposit or withdrawal, the principal office of the Reserve Bank shall, as soon as possible, send to your principal office  a fresh certificate in   Form II  .\n \n 6. You may at anytime replace-\n i. any securities so deposited by cash or by any other unencumbered approved securities or partly by cash and partly by other such securities, so however, that the total amount deposited is not affected;\n ii. any cash so deposited by unencumbered approved securities of an equal value.\n \n 7.  Any amount deposited with the Reserve Bank as aforesaid, shall be an asset of the   company   in the event of the   company   ceasing for any reason to carry on   banking   business in India. On this asset, the claims of all the creditors of the   company   in India shall be a first charge.) ',
	      nameOfLaw: 'BANKING REGULATION ACT, 1949 | BANKING REGULATION (COMPANIES) RULES, 1949',
	      department: 'I.T',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Aditya Chaudhuri',
	      currOwner: 'Aditya Chaudhuri',
	      reviewer: 'Shantanu Das',
	      dueDate: '02/12/2018',
	      impact: 'High'
	    }
	  ],
	  iTotalRecords: 10,
	  iTotalDisplayRecords: 10
	};

	return res.json(dataMap);
}
module.exports.compActStatusDataList = compActStatusDataList;

const impactAnalysisDataList = async function(req, res) {
	var dataMap = {
	  sEcho: null,
	  aaData: [
	    {
	      mapId: 28697,
	      complianceId: 833,
	      title: 'Prevention of aids to smoking',
	      taskName: 'Prevention of aids to smoking',
	      description: ' What is to be done?    Prevention of aids to smoking.    When is it to be done?   On an ongoing basis.    How is it to be done?    Check below for details.  Do not allow or provide any ashtrays, matches, lighters or other things which facilitate   smoking   in the office or work premises. ',
	      nameOfLaw: 'CIGARETTES AND OTHER TOBACCO PRODUCTS (PROHIBITION OF ADVERTISEMENT AND REGULATION OF TRADE AND COMMERCE, PRODUCTION, SUPPLY AND DISTRIBUTION) ACT, 2003 | PROHIBITION OF SMOKING IN PUBLIC PLACES RULES, 2008 | CIGARETTES AND OTHER TOBACCO PRODUCTS (PROHIBITION OF ADVERTISEMENT AND REGULATION OF TRADE AND COMMERCE, PRODUCTION, SUPPLY AND DISTRIBUTION) RULES, 2004',
	      department: null,
	      operatingUnit: 'ABCDE(DR, gty)',
	      owner: 'Subash Balakrishnan',
	      currOwner: 'Subash Balakrishnan',
	      reviewer: 'Aditya Chaudhuri',
	      dueDate: '31/12/2018',
	      impact: 'Low'
	    },
	    {
	      mapId: 28669,
	      complianceId: 834,
	      title: 'Notify and Display names of persons  for Lodging Complaints',
	      taskName: 'Notify and Display names of persons  for Lodging Complaints',
	      description: ' What is to be done?   Notify/display the names of persons who may receive complaints.    When is it to be done?   Notify and keep it displayed on an ongoing basis.    How is it to be done?    Check below for details.  Notify and prominently display the name of the persons in your work or office premises before whom complaints against contravention of any of the provisions can be lodged.    ',
	      nameOfLaw: 'CIGARETTES AND OTHER TOBACCO PRODUCTS (PROHIBITION OF ADVERTISEMENT AND REGULATION OF TRADE AND COMMERCE, PRODUCTION, SUPPLY AND DISTRIBUTION) ACT, 2003 | PROHIBITION OF SMOKING IN PUBLIC PLACES RULES, 2008 | CIGARETTES AND OTHER TOBACCO PRODUCTS (PROHIBITION OF ADVERTISEMENT AND REGULATION OF TRADE AND COMMERCE, PRODUCTION, SUPPLY AND DISTRIBUTION) RULES, 2004',
	      department: 'Demo Department',
	      operatingUnit: 'Demo Green',
	      owner: 'Anshul Ashish',
	      currOwner: 'Anshul Ashish',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '30/12/2018',
	      impact: 'Low'
	    },
	    {
	      mapId: 28582,
	      complianceId: 13125,
	      title: 'Display notice/s informing employees about the Internal Committee and penal consequences of indulging in sexual harassment acts ',
	      taskName: 'Display notice/s informing employees about the Internal Committee and penal consequences of indulging in sexual harassment acts ',
	      description: '  What is to be done?  Display the order constituting the  Internal Committee  ("IC")  to deal with  complaints  regarding  sexual harassment  and the penal consequences of  sexual harassment  at any conspicuous place in your  workplace .  \n   When is it to be done?  At all times.  \n   How is it to be done?  Identify a common area in your  workplace  which is frequented by most people and display the order forming the IC and the punishment for  sexual harassment  conduct.    \n Check below for details:  \n  As an  employer  ensure that the following notices / orders are displayed in your  workplace  in a place where it can be easily seen or noticed by all:  \n i) notice indicating the penal consequences of  sexual harassment , and,  \n ii) the order constituting the IC.  \n [Note:  \n 1. Please see compliance titled “Constitute and maintain an Internal Committee for each administrative unit or office "for details of constitution and composition of IC. \n 2. Sexual Harassment conduct can attract penal consequences including those leading to termination. The penal consequences of sexual harassment is specified in Section 354A of the Indian Penal Code, 1860 i.e., rigorous imprisonment for a term which may extend to three years, or with fine, or with both]. ',
	      nameOfLaw: 'SEXUAL HARASSMENT OF WOMEN AT WORKPLACE (PREVENTION, PROHIBITION AND REDRESSAL) ACT, 2013 | SEXUAL HARASSMENT OF WOMEN AT WORKPLACE (PREVENTION, PROHIBITION AND REDRESSAL) RULES, 2013',
	      department: 'Human Resources',
	      operatingUnit: 'Demo Green',
	      owner: 'Anshul Ashish',
	      currOwner: 'Anshul Ashish',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '30/12/2018',
	      impact: 'Low'
	    },
	    {
	      mapId: 28581,
	      complianceId: 832,
	      title: 'Display of No-Smoking Signs',
	      taskName: 'Display of No-Smoking Signs',
	      description: '  What is to be done?   Display of No-smoking sign boards in office premises.    When is it to be done?   Immediately.    Check below for details    Display a board (as specified in  Schedule II ) of a minimum size of sixty centimetre by thirty centimetre in the Indian language(s) as applicable, at least one at the entrance of the office and one at conspicuous place(s) inside, containing the warning " No Smoking Area--Smoking Here is an Offence ". This includes:-   i. staircases; and   ii. entrance to lifts (if any) at each floor.    Please refer to  Schedule II  for specifications of the board.  ',
	      nameOfLaw: 'CIGARETTES AND OTHER TOBACCO PRODUCTS (PROHIBITION OF ADVERTISEMENT AND REGULATION OF TRADE AND COMMERCE, PRODUCTION, SUPPLY AND DISTRIBUTION) ACT, 2003 | PROHIBITION OF SMOKING IN PUBLIC PLACES RULES, 2008 | CIGARETTES AND OTHER TOBACCO PRODUCTS (PROHIBITION OF ADVERTISEMENT AND REGULATION OF TRADE AND COMMERCE, PRODUCTION, SUPPLY AND DISTRIBUTION) RULES, 2004',
	      department: 'Demo Department',
	      operatingUnit: 'Demo Green',
	      owner: 'Anshul Ashish',
	      currOwner: 'Anshul Ashish',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '30/12/2018',
	      impact: 'Low'
	    },
	    {
	      mapId: 27274,
	      complianceId: 2661,
	      title: 'Preparation and Filing of Annual Return',
	      taskName: 'Preparation and Filing of Annual Return',
	      description: '  What is to be done ?  File in Form 20B the Annual Return.     When is it to be done ?  File within 60 days from the day on which the annual general meeting is held.     How is it to be done ?  Electronically file the form with the Registrar along with the necessary documents/certificate and fees.    Check below for details.    1. a. Prepare and subsequently electronically file with the  Registrar  every year, a return in  e-Form 20B  within 60 days after the annual general meeting (“AGM”), containing the particulars specified in Part I of  Schedule V , as they stood on that day regarding the following:  i. its registered office;  ii. the register of its  members ;  iii. the register of its  debenture  holders;  iv. its  shares  and  debentures ;  v. its indebtedness;  vi. its  members  and  debenture  holders, past and present; and  vii. its  directors ,  managing directors ,  managers  and  secretaries , past and present.  viii. If the  company  has converted any of its  shares  into stock and notice of the conversion has been submitted with the  Registrar , include the amount of stock held by each of the  members  concerned instead of  shares  so converted previously held by him.    b. Ensure that the annual return contains the following:    i. The address of the registered office of the  company .    ii. A summary specifying the following in respect of each class of  shares :    (a) the amount of the authorised share capital of the company and the number of  shares  into which it is divided;    (b) the number of  shares  issued, from the date of commencement of the  company  to the date aforesaid;    (c) the number of  shares  subscribed up to the date aforesaid;    (d) the paid-up share capital up to that date.    iii. The total number of non-convertible, partly convertible and fully convertible  debentures  issued and outstanding from the date of commencement of the  company  to the date of the  company\'s  last annual general meeting.    iv. Particulars of the total amount of the indebtedness of the  company  from the date of commencement of the  company  to the date of the  company\'s  last annual general meeting; in respect of all charges including mortgages which are required to be registered with the  Registrar  under the Act.    v. A list containing the following:    (a) names and addresses of all persons who, are members or debenture holders of the  company  on the date of the  company\'s  last annual general meeting, and of persons who have ceased to be members or debenture holders on or before that day and since the date of the annual general meeting on which the last return was submitted or in the case of the first return, since the incorporation of the  company ;    (b) the number of  shares  or  debentures  held by each existing member or debenture holder, from the date of commencement of the  company  to the date of the  company\'s  last annual general meeting, specifying the number of shares or debentures transferred since the date of the annual general meeting last held on which the last return was submitted or in the case of the first return, since the date of the incorporation of the  company  by persons who are still members or debenture holders respectively, the dates of registration of transfers, and the names of transferees and the relevant folio containing the particulars of the same;    (c) In case the names aforesaid are not arranged in alphabetical order, provide an index which would help find such names easily.    vi. Particulars specifying name, nationality, date of birth, date of appointment, Election Commission\'s Identity Card Number if issued, and residential address of the persons who at the date of the  company\'s  last annual general meeting are the directors of the  company  and with respect to any person who at the date is the  manager  or the  secretary  of the  company  together with all such particulars, with respect to those who had ceased to hold such office on or before the date of the last annual general meeting and since the date of the annual general meeting on which the last return was submitted or in the case of the first return, since the incorporation of the  company .    c. Disclose the number of meetings of the  Board  held during the year indicating the number of meetings attended by each director in the annual report of the  company .    d. Pay the requisite fees as provided under  Schedule X . Make sure the e-Form is digitally signed by managing director or director or  manager  or  secretary  of the  company  authorized by the  Board of Directors .    (Note: If you have given the full particulars of the past and present members and  shares  held and transferred by them in any of the any of the immediately preceding five returns, then mention in the present return, particulars relating to persons who have ceased to be members and the new members from that date onwards and the changes, if any, in the number of  shares  held by each such member as a result of transfer or acquisition of  shares .)    (Note: Any reference to the day on which an AGM is held or to the date of the AGM shall, where the AGM for any year has not been held, be construed as a reference to the latest day on or before which that meeting should have been held.)    (For detailed compliance on holding an Annual General Meeting, refer to the compliance title “Annual General Meeting ("AGM")”)    2. Make sure the return is in the   form   set out in Part II of  Schedule V  or as near.     3. In case the AGM has not been held, prepare and file the return on or before the latest day by which it should have been held, in form   set out in  Part II of Schedule V , with the  Registrar  along with a statement specifying the reasons for not holding the AGM.     4. Along with the return, furnish a certificate with the  Registrar  stating that the whole of amount of  dividend  remaining unpaid or unclaimed for a period of 7 years from the date they become payable by the  Company  have been credited to the Investor Education and Protection Fund.     (Note: All amounts transferred to the \'unpaid  dividend  account\' of a  company  on or before 30th October, 1995 and which had remained unpaid or unclaimed on 30th October, 1998 should have been transferred to the general revenue account of the Central Government. Therefore, the Companies Unpaid  Dividend  (Transfer to General Revenue Account of the Central Government) Rules, 1978 will have to be followed for such situations. With effect from 31st October, 1998 any moneys transferred to the \'unpaid  dividend  account\' of the  company  and remaining unpaid or unclaimed for a period of 7 years from the date of such transfer shall be transferred to the Investor Education and Protection Fund together with interest accrued , unless they have already been transferred to the general revenue account of the Central Government prior to 31st October, 1998.   Please refer to \'http://www.mca.gov.in/Ministry/circulars/cir2002/cir_23092002.html\' for details. Therefore, currently the Investor Education and Protection Fund (Awareness and Protection of Investors) Rules, 2001 is applicable for such situations.)    5. Make sure the following individuals sign on the copy of annual return before filing:  a.  director ; and   b.  manager  or  secretary  of the  company , or   c. where there is no  manager  or  secretary , by two  directors  of the  company , one of whom shall be the  managing director  where there is one.      6.  Along with the return file a certificate signed by the signatories of the return, stating that:    a. the return states the facts correctly and completely as they stood on the  day of the AGM or the latest day on or before which the AGM should have been held,    b. since the date of the last annual return, the transfer of all  shares  and  debentures  and the issue of all further certificates of  shares  and  debentures  have been appropriately recorded in the books maintained for the purpose;     c.  where the annual return discloses the fact that the number of  members  of the  company  exceeds 50, the excess number consists of former and present employees of the  company .    d. the  company  has not, since the date of the AGM with reference to which the last return was submitted, or in the case of a first return, since the date of the incorporation of the  company ,   issued any invitation to the public to subscribe for any  shares  or  debentures  of the  company , and    7. Compliance Certificate   a. If your  company  has a  paid up capital  Rs. 10 lakhs or more but  less than 5 crores, then, obtain a compliance certificate from a  secretary in whole time practice  to be filed with the  Registrar  in respect of each  financial year  within 30 days from the date on which the company’s AGM was held.  Such ‘compliance certificate’ shall be placed in the AGM.     b. If the annual general meeting of such  company  for any year has not been held, there shall be filed with the  Registrar  such certificate within 30 days from the latest day on or before which that meeting should have been held in accordance with the provisions of the Act.    (For details on  secretary   in whole time practice , refer the Compliance Title “Appointment of  secretary in whole time practice ”)    (For detailed compliance on holding an AGM, refer to the compliance title “Annual General Meeting("AGM")”)    c. Mention in the compliance certificate inter alia that your company has duly filed the returns as stated in Annexure B in  Compliance Certificate Form .    d. File electronically the compliance certificate in  form 66  as an attachment to the  Board  Report. Pay the requisite fees as provided under  Schedule X .     e. Make sure the  Form  is digitally signed by  managing director  or  director  or  manager  or  secretary  of the  company  authorized by the  Board of Directors .      8. Maintenance of Register of Annual Returns  I. Keep/maintain the copies of all annual returns prepared and all certificates and  documents  annexed to annual returns at the registered office for a period of 8 years from the date of filing with the  Registrar .    II. In case you want to keep the returns and copies of certificates and  documents  or any or more of them in a different place in the same city, town, village in which the registered office is situated, do the following:  a. Pass a special resolution to this effect in a general meeting; and  b. Give the  Registrar  in advance, a copy of the special resolution.    (Note: the  Registrar  may, by order in writing, direct any  company  to preserve any the above document beyond the period specified for retention.)    c. With regard to passing of the special resolution, do the following:  i. Print or typewrite the special resolution and the statement of material facts and get the same duly certified under the signature of an  officer  of the  company ;  ii. File the special resolution along with the statement of material facts with the  Registrar  within 30 days of its passing in  Form 23  together with a printed copy of the altered  articles ;   iii. Pay the requisite filing fee for the e-Forms as per  Schedule X ;   iv. Make sure that the e-forms are filed electronically, and authenticated by a  managing director ,  director  or  secretary  or any other authorized signatory under law, by the use of a valid  digital signature ;   v. For the purpose of deciding to and for fixing the date, time, place and agenda for the General Meeting to pass the special resolution, convene a  board  meeting after providing notice. (For detailed compliance on holding a  board  meeting and a general meeting (i.e. annual general meeting or extraordinary general meeting), refer to the compliance title “ Board  Meeting” and “Annual General Meeting("AGM")” or “Extraordinary General Meeting("EGM")” respectively);      9. Destruction of the Registers of Annual Returns   If the register and index of annual returns and certificates and documents annexed to annual return is destroyed after the prescribed period (as mentioned in the  Schedule ), then maintain a register in  Appendix  with brief particulars of the documents destroyed and all entries made therein shall be authenticated by the  secretary  or such other person authorised by the  board of directors  for the purpose.    10. Inspection of the Register of Annual Returns  a. Keep the register of annual returns  documents  annexed to annual returns (subject to such reasonable restrictions), open for inspection during business hours for a minimum period of two hours.  b. Do not charge any inspection fee from  members  or  debenture  holders. Charge a fee of Rs 10/- from other persons.     11. Fees for obtaining copies of Annual Returns  a. Allow any  member ,  debenture  holder or other person to make extracts or copies of the documents annexed to the annual return without the charging of any fee.  b. If a  member  or  debenture  holder or any other person makes a request for a copy of register of annual returns and certificates and  documents  annexed to annual return or of any part thereof, provide the same within 10 days, (exclusive of non-working days), from the date of such request, by charging a fee of Re. 1 for every one 100 words or fractional part required to be copied. \n   ',
	      nameOfLaw: 'COMPANIES ACT, 1956 | CO. FORMS, 1956 | CO. (COMPLIANCE CERTIFICATE) RULES, 2001 | CO. (PRESERVATION OF RECORDS) RULES, 1966',
	      department: 'Administration',
	      operatingUnit: 'Kolkata Delivery Center',
	      owner: 'Koushik Sinha',
	      currOwner: 'Koushik Sinha',
	      reviewer: 'Arnab Sen',
	      dueDate: '30/12/2018',
	      impact: 'Low'
	    },
	    {
	      mapId: 28524,
	      complianceId: 366,
	      title: 'Display notices containing the minimum rates of wages',
	      taskName: 'Display notices containing the minimum rates of wages',
	      description: ' What is to be done?    Display notices containing the minimum rates of   wages.      When is it to be done?    Regularly    How is it to be done?    In the prescribed Form as per the stipulated process.  Check below for details.  1. Display notices -  i. showing the minimum rates of   wages   fixed together with abstracts from the Act in   Form XII   .  ii. containing the name and address of the   Inspector   in English and in the language understood by the majority of workers in the employment at such place as the Inspector may select.  iii. containing the dates on which   wages   will ordinarily be paid, at a conspicuous place at or near the main entrance of the establishment in English and in a language understood by the majority of the   employees  .    (Note: The dates at which the   wages   are to be paid must not be earlier than the expiry of 2 months from the date of display of such notice.)  2. Maintain the notices in a clean and legible condition.  3. Make the notices available at or as near as practicable to the site of employment. Produce the notices at all reasonable hours before an Inspector having jurisdiction over the establishment. ',
	      nameOfLaw: 'MINIMUM WAGES ACT, 1948 | ANDHRA PRADESH MINIMUM WAGES RULES, 1960',
	      department: 'Legal and Company Secretarial',
	      operatingUnit: 'Mumbai Center',
	      owner: 'Sohrab Balsara',
	      currOwner: 'Sohrab Balsara',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '28/12/2018',
	      impact: 'Low'
	    },
	    {
	      mapId: 28523,
	      complianceId: 364,
	      title: 'Fixing one day as the day of rest and number of hours which shall constitute a normal working day for adult, child and adolescent workers- for every new establishment',
	      taskName: 'Fixing one day as the day of rest and number of hours which shall constitute a normal working day for adult, child and adolescent workers- for every new establishment',
	      description: ' What is to be done?    Fixation of day of rest and number of hours which shall constitute a normal working    When is it to be done?    Once    How is it to be done?    Fix rest day, number of hours of work, notify the employee.  Check below for details.  1. Fix the rest day ordinarily to be Sunday but you may fix some other day of the   week   as the rest day for any   employee   or class of   employees   in a   scheduled employment  . (refer embedded document titled as "  schedule  "). Also refer the embedded document titled as "  AP Schedule  " to ascertain the   scheduled employments   notified by the AP Govt for the minimum rates of   wages   to be paid to the   employees  .  2. Inform the   employee   of the day, fixed as the rest day.  3. Fix the number of hours that constitutes a normal working day of any i.   adult     employee   to 9 hours on any day.  ii.   child   workers to 4 and a half hours.   (Note: Do not employ or permit a   child   worker to work for more than 4 hours on any day.)  4. Arrange the period of work of an   adult     employee   in such a way so that no period shall exceed 5 hours before he has had an interval for rest of at least half an hour.  5. Arrange the periods of work of an   adult   worker in a   scheduled employment   in such a way that inclusive of the period of rest his period of work shall not spread over more than 10 and a half hours in any day.  6. Fix the number of hours which shall constitute a normal working day in the case of   adolescent   workers to 9 hours or four and a half hours as the case may be as he is certified to work as an   adult   or a   child   worker respectively by a certifying surgeon appointed under section 10 of the Factories Act, 1948. ',
	      nameOfLaw: 'MINIMUM WAGES ACT, 1948 | ANDHRA PRADESH MINIMUM WAGES RULES, 1960',
	      department: 'Legal and Company Secretarial',
	      operatingUnit: 'Mumbai Center',
	      owner: 'Sohrab Balsara',
	      currOwner: 'Sohrab Balsara',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '28/12/2018',
	      impact: 'Low'
	    },
	    {
	      mapId: 28522,
	      complianceId: 363,
	      title: 'Fixing one day as the day of rest and number of hours which shall constitute a normal working day for adult, child and adolescent workers',
	      taskName: 'Fixing one day as the day of rest and number of hours which shall constitute a normal working day for adult, child and adolescent workers',
	      description: ' What is to be done?    Fixation of day of rest and number of hours which shall constitute a normal working    When is it to be done?    Once    How is it to be done?    Fix rest day, number of hours of work, notify the   employee.    Check below for details.  1. Fix the rest day ordinarily to be Sunday but you may fix some other day of the   week   as the rest day for any   employee   or class of   employees   in a   scheduled employment  . (refer embedded document titled as "  schedule  "). Also refer the embedded document titled as "AP Schedule" to ascertain the   scheduled employments   notified by the AP Govt for the minimum rates of   wages   to be paid to the   employees  .  2. Inform the   employee   of the day, fixed as the rest day.  3. Fix the number of hours that constitutes a normal working day of any i.   adult     employee   to 9 hours on any day.  ii.   child   workers to 4 and a half hours.   (Note: Do not employ or permit a   child   worker to work for more than 4 hours on any day.)  4. Arrange the period of work of an adult   employee   in such a way so that no period shall exceed 5 hours before he has had an interval for rest of at least half an hour.  5. Arrange the periods of work of an   adult   worker in a   scheduled employment   in such a way that inclusive of the period of rest his period of work shall not spread over more than 10 and a half hours in any day.  6. Fix the number of hours which shall constitute a normal working day in the case of   adolescent   workers to 9 hours or four and a half hours as the case may be as he is certified to work as an   adult   or a   child   worker respectively by a certifying surgeon appointed under section 10 of the Factories Act, 1948. ',
	      nameOfLaw: 'MINIMUM WAGES ACT, 1948 | ANDHRA PRADESH MINIMUM WAGES RULES, 1960',
	      department: 'Legal and Company Secretarial',
	      operatingUnit: 'Mumbai Center',
	      owner: 'Sohrab Balsara',
	      currOwner: 'Sohrab Balsara',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '28/12/2018',
	      impact: 'Low'
	    },
	    {
	      mapId: 28521,
	      complianceId: 362,
	      title: 'Fixing the weekly day of rest and payment of wages',
	      taskName: 'Fixing the weekly day of rest and payment of wages',
	      description: ' What is to be done?    Payment of   wages   on the day of rest.    When is it to be done?    Regularly.    How is it to be done?    Follow procedure laid down for paying   wages   on rest days.  Check below for details.  1. Grant weekly day of rest to each   employee   who has been continuously employed in   Scheduled Employment   (refer embedded documents titled as   "schedule"    and   "AP Schedule"   as per the latest notification issued by the appropriate Government in this behalf.)  (Note: The following will be deemed to be days on which the   employee   had been employed in   scheduled employment   (refer embedded document titled as "Schedule" and "AP Schedule)     for a period of 6 days: i. any day on which the   employee   is required to attend for work but given only an allowance for attendance and is not provided with work. ii. any day on which an   employee   is laid off on payment of compensation under the Industrial Disputes Act, 1947 iii. any leave or holiday, with or without pay, granted by the employer to an   employee   in the period of 6 days immediately preceding the rest day.      2  . Grant the   employee,   for the rest day,   wages   equal to the average daily   wages   during the preceding   week  .  3. Pay to the   employee   in addition to the   wages   payable for the rest day on which he has worked,   wages   for the substituted rest day, equal to the average daily   wages   during the preceding week, in case an   employee   has worked on the rest day and has been given a substituted rest day.    4. No   employee   is required or allowed to work in a   scheduled employment   (refer embedded document titled as "  Schedule  ") on a rest day except where:  i. the   employee   has or will have a substituted day of rest, for a whole day on one of the 3 days immediately before or after the day of rest as determined by the   employer  .  ii. the   employee   is informed earlier of his requirement to work on the day of rest and also of the substituted day of rest.      (Note: a. For the purpose of calculating the weekly hours of work, the rest day on which the   employee   works, must be included in the   week   in which the substituted rest occurs.  b. Where the minimum daily   wages   of an   employee   are worked out by dividing the minimum monthly wage rate by 26, no   wages   for rest day or substituted rest day will be payable.)      5. Do not make any substitution which results in the   employee   working for more than 10 days consecutively without a day of rest.  (Note: i. Where the minimum daily   wages   of an   employee   are worked out by dividing the minimum monthly wage rate by 26, no   wages   for rest day or substituted rest day will be payable.  ii. In case an   employee   works on a rest day and has been given a substituted rest day on any of the 3 days before or after the rest day the said rest day shall for the purposes of calculating the weekly hours of work, be included in the   week   in which the substituted rest occurs.)    iii. Where a worker in a   scheduled employment   works on a shift which extends beyond the midnight- a. a holiday for the whole day shall in case a worker works on a shift beyond midnight means a period of 24 consecutive hours beginning from the time when his shift ends. b. the following day in such a case shall be deemed to be the period of 24 hours beginning from the time when such shift ends, and the hours after midnight during which such worker was engaged in work shall be counted towards the previous days.) ',
	      nameOfLaw: 'MINIMUM WAGES ACT, 1948 | ANDHRA PRADESH MINIMUM WAGES RULES, 1960',
	      department: 'Legal and Company Secretarial',
	      operatingUnit: 'Mumbai Center',
	      owner: 'Sohrab Balsara',
	      currOwner: 'Sohrab Balsara',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '28/12/2018',
	      impact: 'Low'
	    },
	    {
	      mapId: 28520,
	      complianceId: 1651,
	      title: 'Display notices containing the minimum rates of wages',
	      taskName: 'Display notices containing the minimum rates of wages',
	      description: ' What is to be done?    Display minimum rates of   wages   and abstracts of the Act .    When is it to be done?    On an ongoing basis.    How is it to be done?    Display minimum rates of   wages   and abstract in   Form XIII  .  Check below for details.  1. Display notices -  i. showing the minimum rates of   wages   fixed together with abstracts from the Act and the Rules in   Form XIII  .  ii. containing the name and address of the     Inspector in English and in a language understood by the majority of the workers in the employment at the main entrance to the establishment and at its office.  2. Maintain the notices in a clean and legible condition.   ',
	      nameOfLaw: 'MINIMUM WAGES ACT, 1948 | WEST BENGAL MINIMUM WAGES RULES, 1951',
	      department: 'Legal and Company Secretarial',
	      operatingUnit: 'Mumbai Center',
	      owner: 'Sohrab Balsara',
	      currOwner: 'Sohrab Balsara',
	      reviewer: 'Baishali Bhattacharjee',
	      dueDate: '28/12/2018',
	      impact: 'Low'
	    }
	  ],
	  iTotalRecords: 23,
	  iTotalDisplayRecords: 23
	};

	return res.json(dataMap);
}
module.exports.impactAnalysisDataList = impactAnalysisDataList;

const incActStatusDataList = async function(req, res) {
	var dataMap = {
	  sEcho: null,
	  aaData: [
	    {
	      incidentId: 407,
	      mapId: 229,
	      incidentTitle: 'Notice',
	      taskName: 'Notice by Tax Department',
	      description: 'Carry out the Audit and provide correct findings',
	      department: 'Support Team',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Sohrab Balsara',
	      reviewer: 'Kanishka Bose',
	      completionDate: ''
	    },
	    {
	      incidentId: 408,
	      mapId: 230,
	      incidentTitle: 'Semon',
	      taskName: 'Notice by Tax Department',
	      description: 'File appeal.',
	      department: '',
	      opUnit: 'Lex Legal 1 Pvt. Ltd',
	      owner: 'Sohrab Balsara',
	      reviewer: 'Kanishka Bose',
	      completionDate: ''
	    },
	    {
	      incidentId: 404,
	      mapId: 228,
	      incidentTitle: 'test 26',
	      taskName: 'abc1',
	      description: 'test',
	      department: 'Human Resources',
	      opUnit: 'Lex Legal 1 Pvt. Ltd',
	      owner: 'Kanishka Bose',
	      reviewer: 'Aditya Chaudhuri',
	      completionDate: ''
	    },
	    {
	      incidentId: 399,
	      mapId: 224,
	      incidentTitle: 'Test Notice',
	      taskName: 'Prepare the reply',
	      description: 'Prepare the reply',
	      department: 'Human Resources',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Kanishka Bose',
	      reviewer: 'Zaheer Tarafdar',
	      completionDate: ''
	    },
	    {
	      incidentId: 383,
	      mapId: 216,
	      incidentTitle: 'Notice from inspector',
	      taskName: 'Notice from inspector',
	      description: 'Act upon the notice recieved',
	      department: '',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Madhura Bagchi',
	      reviewer: 'Ankur Kumar',
	      completionDate: ''
	    },
	    {
	      incidentId: 380,
	      mapId: 214,
	      incidentTitle: 'ABC TEST',
	      taskName: 'Ashgdgh',
	      description: 'hsdj',
	      department: 'Human Resources',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Aditya Chaudhuri',
	      reviewer: 'Shantanu Das',
	      completionDate: ''
	    },
	    {
	      incidentId: 353,
	      mapId: 192,
	      incidentTitle: 'Tech Test',
	      taskName: 'abcdefg',
	      description: 'khe',
	      department: 'I.T',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Aditya Chaudhuri',
	      reviewer: 'Saikat Mondal',
	      completionDate: ''
	    },
	    {
	      incidentId: 135,
	      mapId: 190,
	      incidentTitle: 'shantanu testing',
	      taskName: 'February',
	      description: 'Test',
	      department: 'I.T',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Shantanu Das',
	      reviewer: 'Aditya Chaudhuri',
	      completionDate: ''
	    },
	    {
	      incidentId: 340,
	      mapId: 182,
	      incidentTitle: 'Inspector Visit',
	      taskName: 'Inspector visit',
	      description: 'EPF visit by inspector',
	      department: 'Human Resources',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Aditya Saraswat',
	      reviewer: 'Zaheer Tarafdar',
	      completionDate: ''
	    },
	    {
	      incidentId: 338,
	      mapId: 181,
	      incidentTitle: 'Fire Test',
	      taskName: 'Fire notice',
	      description: 'DESC',
	      department: 'Support Team',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Shantanu Das',
	      reviewer: 'Baishali Bhattacharjee',
	      completionDate: ''
	    }
	  ],
	  iTotalRecords: 10,
	  iTotalDisplayRecords: 10
	};

	return res.json(dataMap);
}
module.exports.incActStatusDataList = incActStatusDataList;

const incStatusDataList = async function(req, res) {
	var dataMap = {
	  sEcho: null,
	  aaData: [
	    {
	      incidentId: 407,
	      mapId: 229,
	      title: 'Notice',
	      taskName: 'Notice by Tax Department',
	      description: 'Carry out the Audit and provide correct findings',
	      department: 'Support Team',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Sohrab Balsara',
	      reviewer: 'Kanishka Bose',
	      completionDate: '30/11/2018'
	    },
	    {
	      incidentId: 408,
	      mapId: 230,
	      title: 'Semon',
	      taskName: 'Notice by Tax Department',
	      description: 'File appeal.',
	      department: '',
	      opUnit: 'Lex Legal 1 Pvt. Ltd',
	      owner: 'Sohrab Balsara',
	      reviewer: 'Kanishka Bose',
	      completionDate: '30/11/2018'
	    },
	    {
	      incidentId: 401,
	      mapId: 227,
	      title: 'Pay Wages for West Bengal Unit',
	      taskName: 'Pay Wages for West Bengal Unit',
	      description: 'Payment of wages for 60 employees',
	      department: 'HR-Statutory Payments',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Ankur Kumar',
	      reviewer: 'Soham Basu',
	      completionDate: '30/10/2018'
	    },
	    {
	      incidentId: 404,
	      mapId: 228,
	      title: 'test 26',
	      taskName: 'abc1',
	      description: 'test',
	      department: 'Human Resources',
	      opUnit: 'Lex Legal 1 Pvt. Ltd',
	      owner: 'Kanishka Bose',
	      reviewer: 'Aditya Chaudhuri',
	      completionDate: '26/10/2018'
	    },
	    {
	      incidentId: 397,
	      mapId: 222,
	      title: 'Showcause notice',
	      taskName: 'Reply to showcause notice',
	      description: 'Reply',
	      department: 'Administration',
	      opUnit: 'Mumbai Center',
	      owner: 'Ayan Roy',
	      reviewer: 'Subhadeep  Ray Choudhury',
	      completionDate: '30/09/2018'
	    },
	    {
	      incidentId: 398,
	      mapId: 223,
	      title: 'fire in neogrowth mumbai office',
	      taskName: 'fire',
	      description: 'fire in the office premise',
	      department: 'Administration',
	      opUnit: 'Mumbai Center',
	      owner: 'Ayan Roy',
	      reviewer: 'Zaheer Tarafdar',
	      completionDate: '30/09/2018'
	    },
	    {
	      incidentId: 399,
	      mapId: 224,
	      title: 'Test Notice',
	      taskName: 'Prepare the reply',
	      description: 'Prepare the reply',
	      department: 'Human Resources',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Kanishka Bose',
	      reviewer: 'Zaheer Tarafdar',
	      completionDate: '30/09/2018'
	    },
	    {
	      incidentId: 396,
	      mapId: 221,
	      title: 'Labour inspector walks in',
	      taskName: 'Prepare a response to the show cause notice ',
	      description: ' the format mentioned  ',
	      department: 'Human Resources',
	      opUnit: 'Mumbai Center',
	      owner: 'Ayan Roy',
	      reviewer: 'Subash Balakrishnan',
	      completionDate: '26/09/2018'
	    },
	    {
	      incidentId: 386,
	      mapId: 218,
	      title: 'CERTIFICATE',
	      taskName: 'Test',
	      description: 'complete',
	      department: 'Human Resources',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Anshul Ashish',
	      reviewer: 'Ankur Kumar',
	      completionDate: '31/08/2018'
	    },
	    {
	      incidentId: 388,
	      mapId: 219,
	      title: 'TODAY',
	      taskName: 'TODAY',
	      description: 'sldkflskdjfdskfjg',
	      department: 'Logistics and Transportation',
	      opUnit: 'Kolkata Delivery Center',
	      owner: 'Ankur Kumar',
	      reviewer: 'Shantanu Das',
	      completionDate: '31/08/2018'
	    }
	  ],
	  iTotalRecords: 43,
	  iTotalDisplayRecords: 43
	};

	return res.json(dataMap);
}
module.exports.incStatusDataList = incStatusDataList;

/* 
	------------------------------
	COMPLIANCE ALERTS
	------------------------------
*/

const compAlertList = async function(req, res) {
	var dataMap = {
	  sEcho: null,
	  aaData: [
	    {
	      id: 158,
	      complianceId: '16969',
	      complianceTitle: 'Auto Law',
	      complianceNo: 'AUTOOS000100002',
	      complianceNature: 'Contingent',
	      updatedField: ' Name of Law ',
	      oldValue: '  AUTO PUBLISHING  ',
	      newValue: '  ',
	      updatedOn: '03-Oct-2018 17:05:15',
	      status: 'Old',
	      whatHasChanged: 'mn',
	      lawNames: 'JSD'
	    },
	    {
	      id: 159,
	      complianceId: '16969',
	      complianceTitle: 'Auto Law',
	      complianceNo: 'AUTOOS000100002',
	      complianceNature: 'Contingent',
	      updatedField: ' Name of Law ',
	      oldValue: '  LAW NAME ONE HH  ',
	      newValue: '  ',
	      updatedOn: '03-Oct-2018 17:05:15',
	      status: 'Old',
	      whatHasChanged: 'mn',
	      lawNames: 'JSD'
	    },
	    {
	      id: 163,
	      complianceId: '17046',
	      complianceTitle: 'Prohibition of charge on unpaid capital',
	      complianceNo: 'BNKGC000100004',
	      complianceNature: 'Contingent',
	      updatedField: ' Name of Law ',
	      oldValue: '  ',
	      newValue: '  WEJH  ',
	      updatedOn: '03-Oct-2018 17:05:15',
	      status: 'Old',
	      whatHasChanged: 'jas',
	      lawNames: 'BANKING REGULATION ACT, 1949 | BANKING REGULATION (COMPANIES) RULES, 1949 | MASTER CIRCULAR ON BRANCH AUTHORISATION DATED JULY 01, 2013 | MASTER CIRCULAR ON LOANS AND ADVANCES - STATUTORY AND OTHER RESTRICTIONS DATED JULY 01, 2013 | WEJH'
	    },
	    {
	      id: 160,
	      complianceId: '16969',
	      complianceTitle: 'Auto Law',
	      complianceNo: 'AUTOOS000100002',
	      complianceNature: 'Contingent',
	      updatedField: ' Name of Law ',
	      oldValue: '  LAW NAME TWO  ',
	      newValue: '  ',
	      updatedOn: '03-Oct-2018 17:05:15',
	      status: 'New',
	      whatHasChanged: 'mn',
	      lawNames: 'JSD'
	    },
	    {
	      id: 161,
	      complianceId: '16969',
	      complianceTitle: 'Auto Law',
	      complianceNo: 'AUTOOS000100002',
	      complianceNature: 'Contingent',
	      updatedField: ' Name of Law ',
	      oldValue: '  LAW NAME THREE  ',
	      newValue: '  ',
	      updatedOn: '03-Oct-2018 17:05:15',
	      status: 'New',
	      whatHasChanged: 'mn',
	      lawNames: 'JSD'
	    },
	    {
	      id: 162,
	      complianceId: '16969',
	      complianceTitle: 'Auto Law',
	      complianceNo: 'AUTOOS000100002',
	      complianceNature: 'Contingent',
	      updatedField: ' Name of Law ',
	      oldValue: '  ',
	      newValue: '  JSD  ',
	      updatedOn: '03-Oct-2018 17:05:15',
	      status: 'New',
	      whatHasChanged: 'mn',
	      lawNames: 'JSD'
	    },
	    {
	      id: 157,
	      complianceId: '17046',
	      complianceTitle: 'Prohibition of charge on unpaid capital',
	      complianceNo: 'BNKGC000100004',
	      complianceNature: 'Contingent',
	      updatedField: ' Description ',
	      oldValue: '   What is it to be done?   nasnsjjds Do not create any charge upon any of your unpaid capital.      When is it to be done?    On an ongoing basis. asjkkae   (Note:  Any charge created upon any of the fkke unpaid capital of your   company   shall be invalid.)  ',
	      newValue: '   What is it to be done?  \n Do not create any charge upon any of your unpaid capital.\n   \n When is it to be done?  \n On an ongoing basis.\n \n (Note:\n Any charge created  upon any of the unpaid capital of your   company   shall be invalid.)  ',
	      updatedOn: '25-Sep-2018 11:01:13',
	      status: 'New',
	      whatHasChanged: 'm mmn',
	      lawNames: 'BANKING REGULATION ACT, 1949 | BANKING REGULATION (COMPANIES) RULES, 1949 | MASTER CIRCULAR ON BRANCH AUTHORISATION DATED JULY 01, 2013 | MASTER CIRCULAR ON LOANS AND ADVANCES - STATUTORY AND OTHER RESTRICTIONS DATED JULY 01, 2013 | WEJH'
	    },
	    {
	      id: 145,
	      complianceId: '17046',
	      complianceTitle: 'Prohibition of charge on unpaid capital',
	      complianceNo: 'BNKGC000100004',
	      complianceNature: 'Contingent',
	      updatedField: ' Description ',
	      oldValue: '   What is it to be done?   nasnsjjds Do not create any charge upon any of your unpaid capital.      When is it to be done?    On an ongoing basis.    (Note:  Any charge created upon any of the fkke unpaid capital of your   company   shall be invalid.)  ',
	      newValue: '   What is it to be done?   nasnsjjds Do not create any charge upon any of your unpaid capital.      When is it to be done?    On an ongoing basis. asjkkae   (Note:  Any charge created upon any of the fkke unpaid capital of your   company   shall be invalid.)  ',
	      updatedOn: '24-Sep-2018 10:00:50',
	      status: 'New',
	      whatHasChanged: 'm mmn',
	      lawNames: 'BANKING REGULATION ACT, 1949 | BANKING REGULATION (COMPANIES) RULES, 1949 | MASTER CIRCULAR ON BRANCH AUTHORISATION DATED JULY 01, 2013 | MASTER CIRCULAR ON LOANS AND ADVANCES - STATUTORY AND OTHER RESTRICTIONS DATED JULY 01, 2013 | WEJH'
	    },
	    {
	      id: 143,
	      complianceId: '17046',
	      complianceTitle: 'Prohibition of charge on unpaid capital',
	      complianceNo: 'BNKGC000100004',
	      complianceNature: 'Contingent',
	      updatedField: ' Description ',
	      oldValue: '   What is it to be done?    Ddsgsr  ',
	      newValue: '   What is it to be done?   nasnsjjds Do not create any charge upon any of your unpaid capital.      When is it to be done?    On an ongoing basis.    (Note:  Any charge created upon any of the fkke unpaid capital of your   company   shall be invalid.)  ',
	      updatedOn: '24-Sep-2018 09:49:33',
	      status: 'New',
	      whatHasChanged: 'm mmn',
	      lawNames: 'BANKING REGULATION ACT, 1949 | BANKING REGULATION (COMPANIES) RULES, 1949 | MASTER CIRCULAR ON BRANCH AUTHORISATION DATED JULY 01, 2013 | MASTER CIRCULAR ON LOANS AND ADVANCES - STATUTORY AND OTHER RESTRICTIONS DATED JULY 01, 2013 | WEJH'
	    },
	    {
	      id: 144,
	      complianceId: '17046',
	      complianceTitle: 'Prohibition of charge on unpaid capital',
	      complianceNo: 'BNKGC000100004',
	      complianceNature: 'Contingent',
	      updatedField: ' Penalty ',
	      oldValue: '   Imprisonment - Upto 3 years; or  Fine - Upto Rs. 1 crore; or         ',
	      newValue: '   Imprisonment - Upto 3 years; or  Fine - Upto Rs. 1 crore; or  Both.        Offences by companies:     Where an offence under this Act has been committed, persons liable in case of companies:-  1. every, person who, at the time the offence was committed, was in charge of, and was responsible to, the company for the conduct of business of the company, as well as the company, shall be deemed to be guilty of the offence; unless he proves that the contravention or default was committed without his knowledge or that he exercised all due diligence to prevent the contravention or default.    2. if proved that offence was committed with consent or connivance of, or on negligence of any manager, director secretary or other officer of the company, then such director, manager, secretary or other officer and will be deemed to be guilty of that offence and shall be liable to be proceeded against and punished accordingly.        ',
	      updatedOn: '24-Sep-2018 09:49:33',
	      status: 'New',
	      whatHasChanged: 'm mmn',
	      lawNames: 'BANKING REGULATION ACT, 1949 | BANKING REGULATION (COMPANIES) RULES, 1949 | MASTER CIRCULAR ON BRANCH AUTHORISATION DATED JULY 01, 2013 | MASTER CIRCULAR ON LOANS AND ADVANCES - STATUTORY AND OTHER RESTRICTIONS DATED JULY 01, 2013 | WEJH'
	    }
	  ],
	  iTotalRecords: 14,
	  iTotalDisplayRecords: 14
	};

	return res.json(dataMap);
}
module.exports.compAlertList = compAlertList;

const compDetails = async function(req, res) {
	var dataMap = {};

	return res.json(dataMap);
}
module.exports.compDetails = compDetails;

const updateCompAlertStatus = async function(req, res) {
	var dataMap = {
		status: 'UPDATED'
	};

	return res.json(dataMap);
}
module.exports.updateCompAlertStatus = updateCompAlertStatus;

/* 
	------------------------------
	TASK
	------------------------------
*/

const taskMapDetails = async function(req, res) {
	var dataMap = {
	  mapId: 15818,
	  mapName: 'Authentication of documents by a company Applicable to all companies',
	  mapDesc: ' What is to be done ? Ensure to authenticate documents or proceedings. When is it to be done ? On an ongoing basis. How is it to be done ? Have a process in place for proper authentication of documents or proceedings. Check below for details. When documents or proceedings need to be authenticated by the company, then ensure that such document or proceeding is signed by key managerial personnel or an officer of the company duly authorized by the B oard. ',
	  operatingUnit: 'Kolkata Delivery Center',
	  department: 'I.T',
	  owner: 'Tirthankar Dey',
	  approver: 'Shantanu Das',
	  dueDate: '10/12/2016',
	  frequency: 'Daily',
	  requiresProof: false,
	  alertBeforeDue: 15,
	  failureImpact: 'High',
	  recurringYear: null,
	  reminderFrequency: null,
	  operatingUnitId: 5,
	  userMapRole: 'owner',
	  info: 'success'
	};

	return res.json(dataMap);
}
module.exports.taskMapDetails = taskMapDetails;

const incidentMapDetails = async function(req, res) {
	var dataMap = {
	  mapId: 1,
	  name: 'Reply Notice',
	  description: 'Reply to the notice recieved',
	  owner: 7,
	  ownerDisp: 'Tarun Pandey',
	  reviewer: 5,
	  reviewerDisp: 'Shiv Dubey',
	  response: '30/03/2012',
	  requiresProof: false,
	  info: 'success',
	  mapStarted: 'started',
	  userMapRole: 'others'
	};

	return res.json(dataMap);
}
module.exports.incidentMapDetails = incidentMapDetails;

const uploadTaskProofs = async function(req, res) {
	var dataMap = {
		status: 'UPLOADED'
	};

	return res.json(dataMap);
}
module.exports.uploadTaskProofs = uploadTaskProofs;