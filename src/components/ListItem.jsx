import React from 'react';
import { ConfigProvider, Card, Avatar, Checkbox } from 'antd';
import styled from 'styled-components';
import './ListItem.css';

const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
};
//avatar va etre photo qui représente le model

const ListItem = ({ item }) => {
  const { Meta } = Card;
  return (
    <ConfigProvider breakpoint={breakpoints}>
      <StyledCard>
      <Checkbox className="checkbox" />
        <Meta
          title={'test1'}
          description={'test2'}
        />
        <img src={'cantfind'} alt={'test3'} />
      </StyledCard>
    </ConfigProvider>
  );
};

const StyledCard = styled(Card)`
  width: 100%;
  @media (min-width: ${breakpoints.sm}px) {
    width: 50%;
  }
  @media (min-width: ${breakpoints.md}px) {
    width: 33.33%;
  }
`;

export default ListItem;


