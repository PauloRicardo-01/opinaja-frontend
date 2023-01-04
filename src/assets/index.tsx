import { LoadingContainer } from './styles';

export const TopWave = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='wave top'>
      <path fill='#0BE633' fillOpacity='1' d='M0,32L1440,288L1440,0L0,0Z'></path>
    </svg>
  );
};

export const BottomWave = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='wave bottom'>
      <path fill='#0BE633' fillOpacity='1' d='M0,32L1440,288L1440,320L0,320Z'></path>
    </svg>
  );
};

export const Loading = () => {
  return (
    <LoadingContainer>
      <span />
    </LoadingContainer>
  );
};
