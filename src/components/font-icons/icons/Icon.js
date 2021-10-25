import './Icon.scss';

const AngryRegular = () => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='far'
      data-icon='angry'
      className='svg-inline--fa fa-angry fa-w-16'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 496 512'
    >
      <path
        fill='currentColor'
        d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm0-144c-33.6 0-65.2 14.8-86.8 40.6-8.5 10.2-7.1 25.3 3.1 33.8s25.3 7.2 33.8-3c24.8-29.7 75-29.7 99.8 0 8.1 9.7 23.2 11.9 33.8 3 10.2-8.5 11.5-23.6 3.1-33.8-21.6-25.8-53.2-40.6-86.8-40.6zm-48-72c10.3 0 19.9-6.7 23-17.1 3.8-12.7-3.4-26.1-16.1-29.9l-80-24c-12.8-3.9-26.1 3.4-29.9 16.1-3.8 12.7 3.4 26.1 16.1 29.9l28.2 8.5c-3.1 4.9-5.3 10.4-5.3 16.6 0 17.7 14.3 32 32 32s32-14.4 32-32.1zm199-54.9c-3.8-12.7-17.1-19.9-29.9-16.1l-80 24c-12.7 3.8-19.9 17.2-16.1 29.9 3.1 10.4 12.7 17.1 23 17.1 0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.2-2.2-11.7-5.3-16.6l28.2-8.5c12.7-3.7 19.9-17.1 16.1-29.8z'
      ></path>
    </svg>
  );
};

const ArrowDown = (props) => {
  const { size } = props;
  return (
    <svg
      width='8'
      height='4'
      viewBox='0 0 8 4'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M4 4L8 0H0L4 4Z' fill='#596481' />
    </svg>
  );
};

const CheckMark = (props) => {
  return (
    <svg
      width='14'
      height='11'
      viewBox='0 0 14 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 5L5 9L13 1' stroke='#2875EA' stroke-width='2' />
    </svg>
  );
};

const RadioCheck = (props) => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_7374:4753)'>
        <rect x='3' y='2' width='24' height='24' rx='12' fill='white' />
        <rect
          x='7'
          y='6'
          width='16'
          height='16'
          rx='8'
          stroke='#0D004C'
          stroke-width='8'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_7374:4753'
          x='0'
          y='0'
          width='30'
          height='30'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='1.5' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.180392 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 0.08 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_7374:4753'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_7374:4753'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export { AngryRegular, ArrowDown, CheckMark, RadioCheck };
