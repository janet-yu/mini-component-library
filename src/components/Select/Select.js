import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const NativeSelect = styled.select`
  opacity: 0;
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const SelectWrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  width: max-content;
  /* isolation: isolate; /* no other element should interfere with this stacking context */ */
`;

const StyledSelect = styled.div`
  padding: 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledSelect>
        <span>{displayedValue}</span>
        <IconWrapper>
          <Icon id='chevron-down' size={24} />
        </IconWrapper>
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
