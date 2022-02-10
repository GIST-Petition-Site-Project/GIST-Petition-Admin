interface vUserListProps {
  users: Array<User>;
  each: any;
}

const VUserList = ({ users, each }: vUserListProps): JSX.Element => {
  const roles = ['USER', 'MANAGER', 'ADMIN'];
  return (
    <ul>
      {users?.map((user) => {
        const { id, username, userRole, handleChange } = each(user);
        return (
          <li key={id}>
            <p>{username}</p>
            <select onChange={handleChange} value={userRole}>
              {roles.map((role) => {
                return <option key={id + role}>{role}</option>;
              })}
            </select>
          </li>
        );
      })}
    </ul>
  );
};

export default VUserList;
