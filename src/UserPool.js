import {
	AuthenticationDetails,
	CognitoUser,
	CognitoUserPool,
	CognitoUserAttribute,
  } from "amazon-cognito-identity-js";
  import axios from "axios"
  const signIn = (username, password) => {
   
	let cognitoUser = new CognitoUser({
	  Username: username,
	  Pool: new CognitoUserPool({
  
		UserPoolId: 'us-west-2_AigFhw7S7',
		ClientId: '68k34c01spn152t4ho22g60i6e',
		
	  }),
	  
	});
   
   
	let authenticationData = {
	  Username: username,
	  Password: password,
	};
	return new Promise((resolve, reject) => {
	  cognitoUser.authenticateUser(
		new AuthenticationDetails(authenticationData),
		{
		  onSuccess: function (result) {
                   console.log(result);
				   localStorage.setItem('Token',result.getIdToken().getJwtToken())
				   window.location = '/CreateForm'
				   
				},
				onFailure: function (err) {
					console.log('onFailure');
  }
})
	})


}
export default signIn