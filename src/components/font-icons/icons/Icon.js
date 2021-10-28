import "./Icon.scss";

const AngryRegular = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="angry"
      className="svg-inline--fa fa-angry fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
    >
      <path
        fill="currentColor"
        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm0-144c-33.6 0-65.2 14.8-86.8 40.6-8.5 10.2-7.1 25.3 3.1 33.8s25.3 7.2 33.8-3c24.8-29.7 75-29.7 99.8 0 8.1 9.7 23.2 11.9 33.8 3 10.2-8.5 11.5-23.6 3.1-33.8-21.6-25.8-53.2-40.6-86.8-40.6zm-48-72c10.3 0 19.9-6.7 23-17.1 3.8-12.7-3.4-26.1-16.1-29.9l-80-24c-12.8-3.9-26.1 3.4-29.9 16.1-3.8 12.7 3.4 26.1 16.1 29.9l28.2 8.5c-3.1 4.9-5.3 10.4-5.3 16.6 0 17.7 14.3 32 32 32s32-14.4 32-32.1zm199-54.9c-3.8-12.7-17.1-19.9-29.9-16.1l-80 24c-12.7 3.8-19.9 17.2-16.1 29.9 3.1 10.4 12.7 17.1 23 17.1 0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.2-2.2-11.7-5.3-16.6l28.2-8.5c12.7-3.7 19.9-17.1 16.1-29.8z"
      ></path>
    </svg>
  );
};

const ArrowDown = (props) => {
  const { size } = props;
  return (
    <svg
      width="8"
      height="4"
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4L8 0H0L4 4Z" fill="#596481" />
    </svg>
  );
};

const CheckMark = (props) => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 5L5 9L13 1" stroke="#2875EA" strokeWidth="2" />
    </svg>
  );
};

const RadioCheck = (props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_7374:4753)">
        <rect x="3" y="2" width="24" height="24" rx="12" fill="white" />
        <rect
          x="7"
          y="6"
          width="16"
          height="16"
          rx="8"
          stroke="#0D004C"
          strokeWidth="8"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_7374:4753"
          x="0"
          y="0"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.180392 0 0 0 0 0.227451 0 0 0 0 0.356863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7374:4753"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_7374:4753"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const ToggleSidebar = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3H0V5H24V3ZM0 11H24V13H0V11ZM0 19H24V21H0V19Z"
        fill="#596481"
      />
    </svg>
  );
};

const SupportIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 13V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V13V14V18V19H2C0.895431 19 0 18.1046 0 17V15C0 13.8954 0.895431 13 2 13V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13C23.1046 13 24 13.8954 24 15V17C24 18.1046 23.1046 19 22 19H21.7324C21.3866 19.5978 20.7403 20 20 20C20 21.1046 19.1046 22 18 22H15.0005C14.1647 22.6279 13.1258 23 12 23C10.8742 23 9.83526 22.6279 8.99951 22H6C4.89543 22 4 21.1046 4 20V12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V19C20.5523 19 21 18.5523 21 18V16V14V13ZM22 14V16V18C22.5523 18 23 17.5523 23 17V15C23 14.4477 22.5523 14 22 14ZM2 14C1.44772 14 1 14.4477 1 15V17C1 17.5523 1.44772 18 2 18V14ZM16 18C16 18.3453 15.9562 18.6804 15.874 19H13C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20H15.4649C14.7733 21.1956 13.4806 22 12 22C9.79086 22 8 20.2091 8 18V14.62C8 13.0787 9.16788 11.7882 10.7015 11.6348L14.9005 11.2149C15.4892 11.1561 16 11.6184 16 12.21V18Z"
        fill="#596481"
      />
    </svg>
  );
};

const SignUpIcon = () => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 7C9.29123 7 8.64232 6.75546 8.1291 6.34535C7.46237 5.81256 7.02987 5.00523 7.00149 4.09552C7.05193 5.70817 8.3751 7 10 7ZM10 7C10.7088 7 11.3577 6.75546 11.8709 6.34534C12.5285 5.81983 12.9583 5.02721 12.9971 4.1327C12.9277 5.72798 11.6124 7 10 7ZM1 14.5C1 13.8579 1.19217 13.2644 1.58406 12.7287C1.16917 13.2989 1 13.9061 1 14.5ZM19 14.5C19 13.9061 18.8308 13.2989 18.416 12.7287C18.8078 13.2645 19 13.8579 19 14.5Z"
        fill="#596481"
        stroke="#596481"
        strokeWidth="2"
      />
    </svg>
  );
};

const LoginIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1717 14.2425C11.6951 15.0329 12 15.9808 12 16.9998C12 19.7613 9.76142 21.9998 7 21.9998C4.23858 21.9998 2 19.7613 2 16.9998C2 14.2384 4.23858 11.9998 7 11.9998C8.01911 11.9998 8.96702 12.3047 9.75746 12.8283L14.5858 7.99995L12.2929 5.70706L13.7071 4.29285L16 6.58574L17.5858 4.99995L15.2929 2.70706L16.7071 1.29285L19 3.58574L21.2929 1.29285L22.7071 2.70706L11.1717 14.2425ZM10 16.9998C10 18.6567 8.65685 19.9998 7 19.9998C5.34315 19.9998 4 18.6567 4 16.9998C4 15.343 5.34315 13.9998 7 13.9998C8.65685 13.9998 10 15.343 10 16.9998Z"
        fill="#596481"
      />
    </svg>
  );
};

const CardIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2C0.447715 2 0 2.44772 0 3C0 3.55228 0.447715 4 1 4H3.52285C3.96186 4 4.34952 4.28632 4.47863 4.70591L7.60981 14.8823C7.99713 16.141 9.16014 17 10.4771 17H19.9775C19.9928 17.0004 20.008 17.0003 20.0232 17H22C22.5523 17 23 16.5523 23 16C23 15.4477 22.5523 15 22 15H21.344L23.5716 7.5747C23.9566 6.29147 22.9957 5 21.656 5H6.66165L6.39019 4.11774C6.00287 2.85897 4.83986 2 3.52285 2H1ZM7.27704 7L9.52137 14.2941C9.65048 14.7137 10.0381 15 10.4771 15H19.256L21.656 7H7.27704ZM21 21C21 22.1046 20.1046 23 19 23C17.8954 23 17 22.1046 17 21C17 19.8954 17.8954 19 19 19C20.1046 19 21 19.8954 21 21ZM11 23C12.1046 23 13 22.1046 13 21C13 19.8954 12.1046 19 11 19C9.89543 19 9 19.8954 9 21C9 22.1046 9.89543 23 11 23Z"
        fill="#596481"
      />
    </svg>
  );
};

const BreadcrumbIcon = () => {
  return (
    <svg
      width="4"
      height="8"
      viewBox="0 0 4 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4L-3.49691e-07 8L0 0L4 4Z" fill="#596481" />
    </svg>
  );
};

export {
  AngryRegular,
  ArrowDown,
  CheckMark,
  RadioCheck,
  ToggleSidebar,
  SupportIcon,
  SignUpIcon,
  LoginIcon,
  CardIcon,
  BreadcrumbIcon,
};
