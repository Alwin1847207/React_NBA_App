import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCP8wZZIGRgqPJFuL7CLXzCHwjSx4OS6lI",
    authDomain: "nba-react-55e79.firebaseapp.com",
    databaseURL: "https://nba-react-55e79.firebaseio.com",
    projectId: "nba-react-55e79",
    storageBucket: "nba-react-55e79.appspot.com",
    messagingSenderId: "537258001795",
    appId: "1:537258001795:web:54ce6402097ce1f6c3e2b6"
};


firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams  = firebaseDB.ref('teams');
const firebaseVideos  = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot)=>{
      data.push({
          ...childSnapshot.val(),
          id:childSnapshot.key
      })
  });

  return data;
};

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
}