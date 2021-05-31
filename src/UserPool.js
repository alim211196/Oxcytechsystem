
import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
} from 'amazon-cognito-identity-js';
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var poolData = {
	UserPoolId: 'us-west-2_AigFhw7S7',
	ClientId: '68k34c01spn152t4ho22g60i6e', 
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var attributeList = [];

var dataUsername = {
	Name: 'username',
	Value: 'admin',
};

var dataPassWord = {
	Name: 'password',
	Value: 'admin123',
};
var attributeUsername = new AmazonCognitoIdentity.CognitoUserAttribute(dataUsername);
var attributePassword = new AmazonCognitoIdentity.CognitoUserAttribute(
	dataPassWord
);

attributeList.push(attributeUsername);
attributeList.push(attributePassword);

userPool.signUp('username', 'password', attributeList, null, function(
	err,
	result
) {
	if (err) {
		alert(err.message || JSON.stringify(err));
		return;
	}
	var cognitoUser = result.user;
	console.log('user name is ' + cognitoUser.getUsername());
});

export default new CognitoUserPool(poolData);