import { useAppSelect } from './useStore';

export const useLightMode = () => useAppSelect((select) => select.mode.isLightMode);
