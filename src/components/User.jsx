import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/userSlice";

function Users() {

  const dispatch = useDispatch();

  const { users, status, error } = useSelector(
    (state) => state.users
  );

  console.log(users)

  useEffect(() => {

    if (status === "idle") {
      dispatch(fetchUsers());
    }

  }, [status, dispatch]);

  if (status === "loading") {
    return <h3>Loading users...</h3>;
  }

  if (status === "failed") {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;