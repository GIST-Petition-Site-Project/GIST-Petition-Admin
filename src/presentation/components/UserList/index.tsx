import { getUsers, putUserRole } from '@api/userAPI';
import { useToast } from '@hooks/useToast';
import { ChangeEvent, useEffect, useState } from 'react';
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

  const toast = useToast();

  const vUserListProps = {
    users,
    each: (user: User) => ({
      ...user,
      handleChange: async (event: ChangeEvent<HTMLSelectElement>) => {
        const response = await putUserRole(user.id, event.target.value);
        if (response.status === 204) {
          toast({ message: '역할이 변경되었습니다.', type: 'success' });
          await fetchUsers();
        }
      },
    }),
  };

  return (
    <>
      <VUserList {...vUserListProps} />
    </>
  );
};

export default UserList;
