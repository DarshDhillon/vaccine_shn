import { useSelector } from 'react-redux';
import { firebaseDatabase } from '../firebase';
// import { firestore } from '../firebase';

const UserDashboard = () => {
  const currentUserUid = useSelector(
    (state) => state.usersSlice.currentUser.uid
  );

  const currentUser = useSelector((state) => state.usersSlice.currentUser);

  console.log(currentUser);

  const getInfo = () => {
    const docRef = firebaseDatabase.users.doc(currentUserUid);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  };

  // const handleSetFirstName = () => {
  //   firebaseDatabase.users.doc(currentUserUid).set({
  //     firstName: 'Marlon',
  //     lastName: 'Brando',
  //     age: 40,
  //     alive: false,
  //     date: new Date().getDate(),
  //   });
  // };

  // const handleGetName = () => {
  //   firebaseDatabase.users.add.currentUserUid({
  //     lastName: 'Jones',
  //   });
  // };

  // const handleGetName = () => {
  //   firebaseDatabase.users
  //     .doc(currentUserUid)
  //     .onSnapshot((snapshot) => console.log(snapshot));
  // };

  // const setCurrentUserDisplayName = () => {
  //   currentUser
  //     .updateProfile({
  //       displayName: 'Test1User',
  //     })
  //     .then(() => {
  //       console.log('that worked');
  //     })
  //     .catch((error) => {
  //       console.log(`that did not work, ${error}`);
  //     });
  // };

  return (
    <div>
      <h1>Welcome back, {currentUser.displayName}</h1>
      <p>Your user ID is {currentUserUid}</p>

      <button onClick={getInfo}>Get info</button>
    </div>
  );
};

export default UserDashboard;
