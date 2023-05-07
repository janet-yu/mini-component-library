import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14 / 16,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18 / 16,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const Input = styled.input`
  font-size: ${(p) => STYLES[p.size].fontSize}rem;
  font-weight: 700;
  border: none;
  width: ${(p) => p.width}px;
  border-bottom: ${(p) => STYLES[p.size].borderThickness}px solid
    ${COLORS.black};
  padding-left: ${(p) => STYLES[p.size].height / 16}rem;
  height: ${(p) => STYLES[p.size].height / 16}rem;
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    font-weight: normal;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  height: ${(p) => STYLES[p.size].iconSize / 16}rem;
  color: inherit;
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={size}>
        <Icon
          id={icon}
          strokeWidth={STYLES[size].borderThickness}
          size={STYLES[size].iconSize}
        />
      </IconWrapper>
      <Input size={size} placeholder={placeholder} width={width} />
    </Wrapper>
  );
};

export default IconInput;
