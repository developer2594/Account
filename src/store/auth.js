import firebase from "firebase/app";
export default {
  actions: {
    async login({ email, password }) {
      try {
        await firebase.auth().signInWithEmailPassword(email, password);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
