import React, { FC } from 'react';

interface Props {
  icon: string;
  onSwitch: any;
}

const IconSwitch: FC<Props> = ({ icon, onSwitch }) => (
  <div className="icon-container">
    <span
      role="button"
      onKeyDown={onSwitch}
      onClick={onSwitch}
      aria-hidden="true"
      className="material-icons icon"
    >
      {icon}
    </span>
  </div>
);

export default IconSwitch;
