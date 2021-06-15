import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const currentUserUid = useSelector(
    (state) => state.usersSlice.currentUser.uid
  );

  return (
    <div>
      <p>Your user ID is {currentUserUid}</p>
    </div>
  );
};

export default UserDashboard;
