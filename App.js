import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfig';




const App = () => {
  const[user, setUser] = useState();
  const fetchUser = async () => {
    try {
      const docRef = doc(db, "users", "jvrdc3rSqErFc78SaYu8");
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (docSnap.exists()) {
          console.log(data.first_name, data.surname, data.street_name, data.user_type)
          console.log(data)
          setUser(data.surname)
          
      } else {
        console.log("No such table!");
      }
    } catch (error) {
      console.error("Error fetching table: ", error);
    }
  };
  fetchUser();
  return (
    <View style={styles.container}>
      <Text>Welcome you to React Native Development! {user} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default App;
//npm install firebase
//npm install @react-native-firebase/app @react-native-firebase/firestore