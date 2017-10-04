import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface RadiobuttonGroupProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onSelected?: (value: any) => void;
  value?: any;
}

export class RadiobuttonGroup extends React.Component<RadiobuttonGroupProps> {
  static childContextTypes = {
    onSelected: PropTypes.func,
    value: PropTypes.any,
  };

  static propTypes = {
    onSelected: PropTypes.func,
    value: PropTypes.any,
  };

  render() {
    const divProps = { ...this.props };
    delete divProps.onSelected;
    delete divProps.value;

    return (
      <div {...divProps}>{this.props.children}</div>
    );
  }

  // tslint:disable-next-line:no-unused-variable
  private getChildContext() {
    return {
      onSelected: this.handleChange,
      value: this.props.value,
    };
  }

  private handleChange = (selected: boolean, value: any) => {
    if (selected && this.props.onSelected) {
      this.props.onSelected(value);
    }
  }
}