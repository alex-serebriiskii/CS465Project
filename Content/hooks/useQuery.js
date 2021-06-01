import { useLocation } from 'react-router-dom';
import 'url-search-params-polyfill';

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}
