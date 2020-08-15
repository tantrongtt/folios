import React from 'react';
import styled from '@emotion/styled';
import { LinkInternal } from "@components/LinkNav";

import mediaqueries from '@styles/media';

const CategoryItem = ({category}) => {

  return (
    <LinkWrap>
      <LinkInternal to={category.node.url} title={category.node.name} data-a11y="false">
        {category.node.name}
      </LinkInternal>
    </LinkWrap>
  );
};

export default CategoryItem;

const LinkWrap = styled.span`
  a {
    font-size: 18px;
    line-height: 40px;
    color: ${p => p.theme.colors.secondary};
    font-weight: ${p => p.theme.fontsWeight.bold};
    font-family: ${p => p.theme.fonts.title};
    margin-right: 24px;
    margin-bottom: 16px;
    display: inline-block;
    box-shadow: inset 0 -2px 0 ${p => p.theme.colors.grey};
    
    ${mediaqueries.tablet`
      margin-right: 16px;
      margin-bottom: 8px;
    `}

  }
`; 
