import { getWaitingRelease, getPetitions, getWaitingAnswer, getAnswered } from '@api/petitionAPI';
import VPagination from '@components/Pagination/VPagination';
import { useErrorInterceptor, useLoadingInterceptor } from '@hooks/useInterceptor';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VPetitionList from './VPetitionList';

interface IPetitionList {
  type?: any;
}

const PetitionList = ({ type }: IPetitionList): JSX.Element => {
  useErrorInterceptor();
  const { search } = useLocation();
  const isLoading = useLoadingInterceptor();
  const [petitions, setPetitions] = useState<Array<Petition>>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [number, setNumber] = useState(0);

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
      case 'release':
        const responseRelease = await getWaitingRelease();
        setListInfo(responseRelease);
        break;
      case 'answer':
        const responseAnswer = await getWaitingAnswer();
        setListInfo(responseAnswer);
        break;
      case 'answered':
        const responseAnswered = await getAnswered();
        setListInfo(responseAnswered);
        break;
      default:
        const response = await getPetitions();
        setListInfo(response);
    }
  };

  useEffect(() => {
    fetchPetitions();
    window.scrollTo(0, 0);
  }, [search]);

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
    <>
      <VPetitionList {...vPetitionListProps} />
      <VPagination {...vPaginationProps} />
    </>
  );
};

export default PetitionList;
