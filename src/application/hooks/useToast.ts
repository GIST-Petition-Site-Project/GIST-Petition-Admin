import { addToast, popToast } from '@stores/toastSlice';
import { useAppDispatch, useAppSelect } from '@hooks/useStore';

export const useToast = () => {
  const dispatch = useAppDispatch();
  const getRandomID = () => String(new Date().getTime());

  const fireToast = ({ message, type, duration = 2000 }: Toast) => {
    const id = getRandomID();
    dispatch(addToast({ message, type, duration, id }));
    setTimeout(() => dispatch(popToast({ id })), duration + 600);
  };

  return fireToast;
};

export const useToasts = () => useAppSelect((state) => state.toast);
