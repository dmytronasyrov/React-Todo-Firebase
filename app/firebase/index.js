import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCcwN3_GASYF9XLh4K_IVWtq2e45PP3m4I",
    authDomain: "pharos-todo.firebaseapp.com",
    databaseURL: "https://pharos-todo.firebaseio.com",
    projectId: "pharos-todo",
    storageBucket: "pharos-todo.appspot.com",
    messagingSenderId: "1098868099303"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
