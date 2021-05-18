import React from "react";

export const ChevronRight = ({ size = 22, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      height={size}
      width={size}
    >
      <path
        className={className}
        d="M367.954 213.588L160.67 5.872c-7.804-7.819-20.467-7.831-28.284-.029-7.819 7.802-7.832 20.465-.03 28.284l207.299 207.731c7.798 7.798 7.798 20.486-.015 28.299L132.356 477.873c-7.802 7.819-7.789 20.482.03 28.284A19.935 19.935 0 00146.513 512c5.125 0 10.25-1.958 14.157-5.873l207.269-207.701c23.394-23.394 23.394-61.459.015-84.838z"
      ></path>
    </svg>
  );
};

export const ChevronLeft = ({ size = 22, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 407.436 407.436"
      version="1.1"
      viewBox="0 0 407.436 407.436"
      xmlSpace="preserve"
      height={size}
      width={size}
    >
      <path
        className={className}
        d="M315.869 21.178L294.621 0 91.566 203.718 294.621 407.436 315.869 386.258 133.924 203.718z"
      ></path>
    </svg>
  );
};

export const DownAngle = ({ size = 22, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      height={size}
      width={size}
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm-.011 356.571L122.714 223.329h266.582L255.989 356.571z"
      ></path>
    </svg>
  );
};
