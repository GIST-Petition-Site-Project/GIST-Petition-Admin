import { getUsers, putUserRole } from '@api/userAPI';
import { BottomPadder } from '@components/common';
import VPagination from '@components/Pagination/VPagination';
import { useToast } from '@hooks/useToast';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VUserList from './VUserList';

const UserList = (): JSX.Element => {
  const { search } = useLocation();
  const [users, setUsers] = useState<Array<User>>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [number, setNumber] = useState(0);
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
      setTotalPages(response?.data?.totalPages);
      setNumber(
        response?.data?.number > response?.data?.totalPages - 1
          ? response?.data?.totalPages - 1
          : response?.data?.number < 0
          ? 0
          : response?.data?.number,
      );
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [search]);

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

  const vPaginationProps = {
    totalPages,
    number,
  };

  return (
    <>
      <VUserList {...vUserListProps} />
      <VPagination {...vPaginationProps} />
    </>
  );
};

export default UserList;
