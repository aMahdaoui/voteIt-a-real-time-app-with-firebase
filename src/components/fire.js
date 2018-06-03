import firebase from 'firebase'


	//Initialize Firebase 
    var config = {
        apiKey: "AIzaSyCMJqyMIGD33oGgUj2E80e3G4JYPnBFz5o",
        authDomain: "react-real-app.firebaseapp.com",
        databaseURL: "https://react-real-app.firebaseio.com",
        projectId: "react-real-app",
        storageBucket: "react-real-app.appspot.com",
        messagingSenderId: "1094167774491"
	};  

var fire = firebase.initializeApp(config);
export default fire;