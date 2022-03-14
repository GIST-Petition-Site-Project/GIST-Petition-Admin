import { getUsers, putUserRole } from '@api/userAPI';
import VPagination from '@components/Pagination/VPagination';
import { useToast } from '@hooks/useToast';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VCustomChange from './VCustomChange';
import VUserList from './VUserList';

const UserList = (): JSX.Element => {
  const { search } = useLocation();
  const [users, setUsers] = useState<Array<User>>([]);
  const [email, setEmail] = useState('');
  const [customRole, setCustomRole] = useState('선택');
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
        const response = await putUserRole(user.username, event.target.value);
        if (response.status === 204) {
          toast({ message: '역할이 변경되었습니다.', type: 'success' });
          await fetchUsers();
        }
      },
    }),
  };

  const vCustomChangeProps = {
    email,
    customRole,
    handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },

    handleRoleChange: async (event: ChangeEvent<HTMLSelectElement>) => {
      if (email === '') {
        toast({ message: '변경하고자 하는 사용자의 이메일을 입력해주세요', type: 'warning' });
        return;
      }
      const response = await putUserRole(email, event.target.value);
      if (response.status === 204) {
        toast({ message: '역할이 변경되었습니다.', type: 'success' });
        setEmail('');
        fetchUsers();
      } else if (response.status >= 400) {
        toast({ message: `${response.data.message}`, type: 'warning' });
      }
      setCustomRole('선택');
    },
  };

  const vPaginationProps = {
    totalPages,
    number,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

  return (
    <>
      <VCustomChange {...vCustomChangeProps} />
      <VUserList {...vUserListProps} />
      <VPagination {...vPaginationProps} />
    </>
  );
};

export default UserList;
