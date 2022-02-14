import getUsers from '@api/getUsers';
import putUserRole from '@api/putUserRole';
import { ChangeEvent, useEffect, useState } from 'react';
import VAC from 'react-vac';
import VUserList from './VUserList';

const UserList = (): JSX.Element => {
  const [users, setUsers] = useState<Array<User>>([]);
  const fetchUsers = async () => {
    const response = await getUsers();
    if (response?.data?.content) {
      const refinedUsers = response?.data?.content.map((el: any) => {
        return {
          username: el.username,
          userRole: el.userRole,
          id: el.id,
        };
      });
      setUsers(refinedUsers);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const vUserListProps = {
    users,
    each: (user: User) => ({
      ...user,
      handleChange: async (event: ChangeEvent<HTMLSelectElement>) => {
        await putUserRole(user.id, event.target.value);
        await fetchUsers();
      },
    }),
  };

  return (
    <>
      <VUserList {...vUserListProps} />
      {/* <VAC name="VUserList" data={vUserListProps} /> */}
    </>
  );
};

export default UserList;
