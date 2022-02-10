interface vUserListProps {
  users: Array<User>;
}
const VUserList = ({ users }: vUserListProps): JSX.Element => {
  return (
    <>
      <div></div>
      {users.map((user) => {
        return (
          <div>
            <p>{user.username}</p>
            <p>{user.userRole}</p>
          </div>
        );
      })}
    </>
  );
};

export default VUserList;
