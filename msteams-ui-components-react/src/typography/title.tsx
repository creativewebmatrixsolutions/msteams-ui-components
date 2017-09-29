import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const TitleInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => (
  <div className={props.theme.typography.title}>
    {props.children}
  </div>
);

export const Title = connectTeamsComponent<{}>(TitleInternal);
