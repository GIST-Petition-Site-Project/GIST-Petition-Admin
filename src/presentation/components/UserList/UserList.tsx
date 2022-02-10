import getUsers from '@api/getUsers';
import { useEffect, useState } from 'react';
import VAC from 'react-vac';
import VUserList from './VUserList';

const UserList = (): JSX.Element => {
  const [users, setUsers] = useState<Array<User>>([]);
  const fetchUsers = async () => {
    const response = await getUsers();
    if (response.data) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const vUserListProps = {
    users,
  };

  return (
    <>
      <VUserList {...vUserListProps} />
      <VAC name="VUserList" data={vUserListProps} />
    </>
  );
};

export default UserList;
