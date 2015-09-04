	//Method to fill local storage.
	function populateStorage(id, value){
		localStorage.setItem(id, value);
	}
	
	//check to see if they've completed the initial sign up
	function checkRegistered(){
		var signUp = [
		'<section class="form">',
		'		<p class="whiteText">If you haven"t registered, please do so before booking your child into Holly Club',
		'<br>',
		'<br><a class="btn" onclick="amRegistered()">Already Registered</a>',
		'</p>',
		'		<iframe src="https://docs.google.com/forms/d/10hIrmJoZ5X8FpNiRUw8p4SGhUCQdBnp_XCtTsfoUUWU/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>',
		'	</section>'
		].join('');
		
		if(!localStorage.getItem('registered')){
			document.getElementById('formContainer').innerHTML = signUp;
		}
		if(localStorage.getItem('registered') == 'yes'){
			checkPreference();
		}
	}
	
	//Set the browser as registered and remember it
	function amRegistered(){
		populateStorage('registered','yes');
		location.reload();
	}
	
	function setSignUp(){
		var signUp = [
		'<section class="form">',
		'		<p class="whiteText">If you haven"t registered, please do so before booking your child into Holly Club',
		'<br>',
		'<br><a class="btn" onclick="amRegistered()">Already Registered</a>',
		'</p>',
		'		<iframe src="https://docs.google.com/forms/d/10hIrmJoZ5X8FpNiRUw8p4SGhUCQdBnp_XCtTsfoUUWU/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>',
		'	</section>'
		].join('');
		
		document.getElementById('formContainer').innerHTML = signUp;
	}
	
	//check whether the last selected option was cal or form
	function checkPreference(){
		if(!localStorage.getItem('formItem')){
			populateStorage('formItem', 'cal');
		}
		if(localStorage.getItem('formItem') == 'cal'){
			//method to set calendar on page
			setCal();
		}
		if(localStorage.getItem('formItem') == 'form'){
			//method to set form on page
			setForm();
		}
	}
	
	//lazy code but fits the UI design
	function setCal(){
		var cal = [
		'<section class="calendar">',
		'		<p class="whiteText">Here are the bookings:<p>',
		'		<iframe src="https://www.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=g5j01cjf5mg2nbch8r0r1d8s78%40group.calendar.google.com&amp;color=%23AB8B00&amp;ctz=Europe%2FLondon" style=" border:solid 1px #777 " width="500" height="350" frameborder="0" scrolling="no"></iframe>',
		'	</section>'
		].join('');
		
		populateStorage('formItem', 'cal');
		document.getElementById('formContainer').innerHTML = cal;
	}
	
	//Set the form in the UI & remember it
	function setForm(){
		var form = [
		'<section class="form">',
		'		<p class="whiteText">Complete this form to book:<p>',
		'		<iframe src="https://docs.google.com/forms/d/1yU395r48chSvXm0U1Ys4ucAe_lSaDbuI-k7Be8OnXfU/viewform?embedded=true" style=" border:solid 1px #777 " width="500" height="350" frameborder="0" marginheight="0" marginwidth="0">form</iframe>',
		'	</section>'
		].join('');
		
		populateStorage('formItem', 'form');
		document.getElementById('formContainer').innerHTML = form;
	}