// components/TooltipWrapper.jsx
import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const TooltipWrapper = ({
  children,
  tooltip,
  placement = 'top',
  enterDelay = 800, 
  leaveDelay = 200,  
}) => {
  return (
    <Tooltip
      title={tooltip}
      placement={placement}
      arrow={false}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: '#09090b',  // Dark background
            color: '#fff',               // White text
            fontSize: '1.1rem', 
            fontWeight: 900,
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem', 
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },

      }}
    >
      {children}
    </Tooltip>
  );
};

export default TooltipWrapper;
