import React, { useState } from "react";
import styled, { css } from "styled-components";

type Props = {
  src?: string;
  link?: string;
  width?: number;
  height?: number;
};
interface ComponentStylesProps {
  width?: number | string,
  height?: number | string,
  isCenter?: boolean,
  src?: string,
}


const Border = styled.div<ComponentStylesProps>`
  border: 1px solid #ccc;
  width: ${ props => `${props.width}`};
  height: ${ props => `${props.height}` };
  max-width: ${ props => `${props.width}`};
  max-height: ${ props => `${props.height}` };
  background: ${ props => props.src? `url(${props.src})` : ''};
  background-size: contain;
  ${props => props.isCenter && css`
  display: flex;
  justify-content: center;
  align-items: center;
  
`}
`;

function App(props: Props) {
  const { src, link, width = '120px', height = '120px' } = props;

  if (!src)
    return (
      <Border width={width} height={height} isCenter={true}>请上传图片</Border>
    );

  return (
      <Border width={width} height={height} src={src}>
        <a href={link} target="__blank" style={{cursor: 'default'}}>
        </a>
      </Border>
  );
}

export default App;
