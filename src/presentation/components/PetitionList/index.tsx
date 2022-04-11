import { getWaitingRelease, getPetitions, getWaitingAnswer } from '@api/petitionQueryAPI';
import { ListWrapper } from '@components/common';
import VPagination from '@components/Pagination/VPagination';
import { useErrorInterceptor, useLoadingInterceptor } from '@hooks/useInterceptor';
import { useAppSelect } from '@hooks/useStore';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VPetitionList from './VPetitionList';

const PetitionList = (): JSX.Element => {
  useErrorInterceptor();
  const { search } = useLocation();
  const isLoading = useLoadingInterceptor();
  const [petitions, setPetitions] = useState<Array<Petition>>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [number, setNumber] = useState(0);

  const type = useAppSelect((select) => select.menu.type);

  const fetchPetitions = async () => {
    const setListInfo = (response: AxiosResponse<any, any>) => {
      setPetitions(response?.data?.content);
      setTotalPages(response?.data?.totalPages);
      setNumber(
        response?.data?.number > response?.data?.totalPages - 1
          ? Math.max(response?.data?.totalPages - 1, 0)
          : response?.data?.number < 0
          ? 0
          : response?.data?.number,
      );
    };

    switch (type) {
      case 'approve':
        const responseRelease = await getWaitingRelease();
        setListInfo(responseRelease);
        break;
      case 'answer':
        const responseAnswer = await getWaitingAnswer();
        setListInfo(responseAnswer);
        break;
      case 'manage':
        const response = await getPetitions();
        setListInfo(response);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setNumber(0);
    fetchPetitions();
    window.scrollTo(0, 0);
  }, [type, search]);

  const vPetitionListProps = {
    isLoading,
    type,
    petitions,
  };

  const vPaginationProps = {
    totalPages,
    number,
  };

  return (
    <ListWrapper>
      <VPetitionList {...vPetitionListProps} />
      <VPagination {...vPaginationProps} />
    </ListWrapper>
  );
};

export default PetitionList;
