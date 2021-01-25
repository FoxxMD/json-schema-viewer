import React from 'react';
import styled from 'styled-components';
import Lozenge from '@atlaskit/lozenge';
import { colors } from '@atlaskit/theme';
import { JsonSchema } from './schema';
import { Lookup } from './lookup';
import { Markdown } from './markdown';
import { ParameterMetadata } from './ParameterMetadata';
import { ClickElement, Type } from './Type';

const Wrap = styled.span`
    padding-left: 10px;
    vertical-align: text-bottom;
`;

const Required = <Wrap><Lozenge>Required</Lozenge></Wrap>;

const Deprecated = <Wrap><Lozenge appearance="removed">Deprecated</Lozenge></Wrap>;

export type ParameterViewProps = {
  name: string;
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  schema: JsonSchema | undefined;
  reference: string;
  lookup: Lookup;
  clickElement: ClickElement;
};

const ParameterContainer = styled.section`
  margin-top: 16px;
  padding: 0;
  max-width: 100%;
`;

const ParameterTitle = styled.strong`
  color: ${colors.N800};
  font-size: 14px;
  font-weight: 500;
`;

const Description = styled.div`
    margin: 8px 0 0 0;
`;

export const ParameterView: React.FC<ParameterViewProps> = (props) => (
  <ParameterContainer>
    <ParameterTitle>{props.name} </ParameterTitle> {props.required && Required} {props.deprecated && Deprecated}
    <Type
      s={props.schema}
      reference={props.reference}
      lookup={props.lookup}
      clickElement={props.clickElement}
    />
    {props.description !== undefined && (
      <Description>
        <Markdown source={props.description} />
      </Description>
    )}
    {props.schema && <ParameterMetadata schema={props.schema} lookup={props.lookup} />}
  </ParameterContainer>
);