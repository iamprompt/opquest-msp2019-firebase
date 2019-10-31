/* eslint-disable */
import firebase from '~/utils/firebase'
export default {
  mounted: function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location.href = 'https://mumspquest.web.app/quest/'
      } else {
        // console.log('[INFO] No Signin')
      }
    })
  }
}
