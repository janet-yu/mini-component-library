/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    height: 16,
    padding: 4,
  },
  medium: {
    height: 12,
    padding: 0,
  },
  small: {
    height: 8,
    padding: 0,
  },
};

const ProgressBarWrapper = styled.div`
  background: rgba(128, 128, 128, 0.15);
  padding: ${(p) => STYLES[p.size].padding}px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  height: ${(p) => STYLES[p.size].height}px;
  background-color: #4747eb;
  width: ${(p) => p.value}%;
  border-radius: 4px 0px 0px 4px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarWrapper
      size={size}
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar size={size} value={value} />
      </BarWrapper>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
