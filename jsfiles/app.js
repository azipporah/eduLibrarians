

//Selecting different role on registration.
function selectRole(){
    //    return false;
    window.location.href=document.getElementById('role').value;
   }
function check(){

let name = document.getElementById('username').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

if(name.length < 3){
    alert ("name must conatin more than 3 characters");
    return false;
} else if(email.length < 4){
    alert ("Inavlid email try again.");
    return false;
} else if(password.length < 3 ){
    alert ("password is too short");
    return false;
} else{
    insert();
    
}


}   

   //Validation on kind of input required
    function regEx(){
    function testName(){
            let name = document.getElementById('username').value;
            let nameTest = name.search(/[a-zA-Z]/g);
            if (nameTest == -1 || name == ""){
                alert ("please enter only letters here");
            };

    }
    function testEmail(){
            let email = document.getElementById('email').value;
            let emailTest = name.search( /^\w+([\.-]?\w+)*@\w+(\.-]?w+)*(\.\w{2,3})+$/);
            if (emailTest == -1 || email == ""){
                alert ("/home/zipporah/workspace/eduLibrarians/index.html please enter valid email here");
            };

    }
    testEmail();
    testName();
    insetName();    
    
    }

   //function to validate user login 
function validate(){
	
	let username1 = document.getElementById("username").value;
	let password1 = document.getElementById("password").value;
 
	let name = ["cris","doe"];
    let pass = ["123","111"];
    

	for (let i = 0; i < name.length; i++) {
		
		if (username1 == name[i] && password1 == pass[i]) {
		alert ("Succefully Logged in!");
		window.location = "./Pages/dash1.html";
		return false;
	}
	else{
		
		alert ("invalid user name or password");
		document.getElementById("submit").disable = true;
	}
regEx();

}
}


    const data = new Array();
   
   
    function insert() {
      data.push(document.getElementById('username').value);
      data.push(document.getElementById('password').value);
      data.push(document.getElementById('email').value);
      data.push(document.getElementById('role').value);
      

      document.getElementById('username').value ='';
      document.getElementById('password').value ='';
      document.getElementById('email').value ='';

      
    
        check();
      selectRole();
      
    }
                
        
            
