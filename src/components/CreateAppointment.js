import { useSelector } from 'react-redux';
import { firebaseDatabase } from '../firebase';

const CreateAppointment = () => {
  const currentUserUid = useSelector(
    (state) => state.usersSlice.currentUser.uid
  );

  //   const currentUser = useSelector((state) => state.usersSlice.currentUser);

  console.log(currentUserUid);

  return (
    <div>
      <h1>This is the create appointment page</h1>
    </div>
  );
};

export default CreateAppointment;
