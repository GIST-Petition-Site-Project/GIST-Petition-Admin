import { getWaitingRelease, getPetitions, getWaitingAnswer } from '@api/petitionQueryAPI';
import { ListWrapper } from '@components/common';
import VPagination from '@components/Pagination/VPagination';
import { useLoadingInterceptor } from '@hooks/useInterceptor';
import { useAppSelect } from '@hooks/useStore';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VPetitionList from './VPetitionList';

const PetitionList = (): JSX.Element => {
  const { search } = useLocation();
  const isLoading = useLoadingInterceptor();
  const [petitions, setPetitions] = useState<Array<Petition>>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [number, setNumber] = useState(0);

  const type = useAppSelect((select) => select.menu.type);

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

  const fetchPetitions = async () => {
    let response: AxiosResponse<any, any> | undefined;
    switch (type) {
      case 'approve':
        response = await getWaitingRelease({ source });
        break;
      case 'answer':
        response = await getWaitingAnswer({ source });
        break;
      case 'manage':
        response = await getPetitions({ source });
        break;
      default:
        response = undefined;
        break;
    }
    if (response) setListInfo(response);
  };

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    setNumber(0);
    fetchPetitions();
    window.scrollTo(0, 0);
    return () => {
      source.cancel();
    };
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
