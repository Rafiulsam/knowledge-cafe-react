import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';

const IconChange = () => {
  const [isSolid, setIsSolid] = useState(false);

  const handleClick = () => {
    setIsSolid(true);
  };

  const currentIcon = isSolid ? solidBookmark : regularBookmark;

  return (
    <div onClick={handleClick}>
      <FontAwesomeIcon icon={currentIcon} />
    </div>
  );
};

export default IconChange;
