/*sangam text changer*/
document.getElementById("hindi").onclick = function() {myHindi()};
document.getElementById("english").onclick = function() {myEnglish()};

function myHindi() {
	document.getElementById("change-logo").innerHTML = "<img src='images/h-logo.png' alt='मुख्यमंत्री हेल्पलाइन  '/>";
	
	document.getElementById("menu1").innerHTML = "होम";
	document.getElementById("menu2").innerHTML = "योजनायें";
	document.getElementById("menu3").innerHTML = "संपर्क ";
	
    document.getElementById("sandesh").innerHTML = " शासन और नागरिकों के मध्य अब केवल एक कॉल का फासला है | प्रदेश की जनता को सीएम हेल्पलाइन से मिलेगी त्वरित जानकारी और होगा शिकायतों का त्वरित समाधान | सुशासन की और बेहतर बनाने की दिशा में राज्य सरकार की यह महत्वपूर्ण एवं दूरगामी पहल है | ";
    document.getElementById("sign").innerHTML = "शिवराज सिंह जी चौहान <br/><small> (  मुख्यमंत्री  मध्य प्रदेश  )</small>";
    document.getElementById("scheme").innerHTML = "योजना";
    document.getElementById("complaintreg").innerHTML = "शिकायत दर्ज करें";
    
	document.getElementById("com-position").innerHTML = "शिकायत  की  स्थिति";
	document.getElementById("officer-login").innerHTML = "अधिकारी लॉगिन";
	document.getElementById("onlineuser").innerHTML = "ऑनलाइन यूजर्स :";
	 	
	
	document.getElementById("scheme-title").innerHTML = "मध्य प्रदेश शासन की मुख्य <span class='bold'>योजनाएं </span><div class='main-title'></div>";
	
	document.getElementById("total-comp-title").innerHTML = "कुल शिकायतों का विवरण";
	document.getElementById("total-comp").innerHTML = " कुल दर्ज शिकायतें ";
	document.getElementById("comp-run").innerHTML = " कुल निराकृत शिकायतें  ";
//	document.getElementById("comp-close").innerHTML = " कुल बंद शिकायतें";

	document.getElementById("testimonial-title").innerHTML = " <h2 class='space40' style='color:#fff;'>संतोषप्रद निराकरण <div class='main-title2'></div>";
	
	document.getElementById("sl").innerHTML = "त्वरित संपर्क ";
	document.getElementById("con").innerHTML = " हमसे संपर्क करें";
	document.getElementById("down").innerHTML = "डाउनलोड एप्लीकेशन";

	


//    ------Added By Girjesh-------
	document.getElementById("ComplaintGenerateLink").href = "Public/OnlineCitizenComplaintRegistration.aspx?type=hi";
	document.getElementById("misLink").href = "MIS/Default.aspx?type=hi";
	document.getElementById("faqLink").href = "faq-hindi.html";
	
	}

function myEnglish() {
	document.getElementById("change-logo").innerHTML = "<img src='images/e-logo.png' alt='CM Helpline'/>";;
	
	document.getElementById("menu1").innerHTML = "Home";
	document.getElementById("menu2").innerHTML = "Schemes";	
	document.getElementById("menu3").innerHTML = "Contact";
	
    document.getElementById("sandesh").innerHTML = "Now the citizens are just a call away from reaching the government.CM Helpline will prompt information to the public and will quickly resolve complaints. This is the strong initiative by the state government in order to improve good governance in the state.";
	 document.getElementById("sign").innerHTML = "Shivraj Singh Chauhan<br/><small> (  Chief Minister of M.P.  )</small>";
	 document.getElementById("scheme").innerHTML = "Schemes";
	 document.getElementById("complaintreg").innerHTML = "Register Complaint";
	 	document.getElementById("com-position").innerHTML = "Grievance Status";
	 	document.getElementById("officer-login").innerHTML = "Officer Login";
	 	document.getElementById("onlineuser").innerHTML = "Online User :";
	 	
		
		document.getElementById("scheme-title").innerHTML = " <span class='e-title'>Schemes of M.P. Government</span><div class='main-title'></div>";
		
	document.getElementById("total-comp-title").innerHTML = " <span class='e-title'>Complaint Details</span>";
	document.getElementById("total-comp").innerHTML = "Registered Complaints";
	document.getElementById("comp-run").innerHTML = "Resolved Complaints";
//	document.getElementById("comp-close").innerHTML = "Closed Complaints";
	
		document.getElementById("testimonial-title").innerHTML = " <h2 class='space40 e-title' style='color:#fff;'>Testimonial<div class='main-title2'></div>";
		
			document.getElementById("sl").innerHTML = " Quick links";
	document.getElementById("con").innerHTML = " Contact Us";
	document.getElementById("down").innerHTML = "Download Aplication";

	//---Added By Girjesh Kumar on 07-11-2016
	document.getElementById("ComplaintGenerateLink").href = "Public/OnlineCitizenComplaintRegistration.aspx?type=en";
	document.getElementById("misLink").href = "MIS/Default.aspx?type=en";
	document.getElementById("faqLink").href = "faq.html";

	
	
}