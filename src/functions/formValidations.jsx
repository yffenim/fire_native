import React from 'react';
// import l from '../../helpers/consolelog.jsx';

// validation for creating a new model title
export const validateTitle = ({formData, setErrors, errors}) => {
    if (formData.title === undefined) {
      setErrors({ ...errors,
        title: 'Title is required'
      });
      return false;
    } else if (formData.title.length < 3) {
      setErrors({ ...errors,
        title: 'Title is too short'
      });
      return false;
    }
    return true;
  };
