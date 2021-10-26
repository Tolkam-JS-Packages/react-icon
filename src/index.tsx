import { PureComponent, HTMLProps } from 'react';

export default class Icon extends PureComponent<Props> {

    public render() {
        const props = this.props;
        const viewBox = props.viewBox || 1024;

        return (
            <span className={props.className}>
                <svg viewBox={'0 0 ' + viewBox + ' ' + viewBox}>
                    {props.children}
                </svg>
            </span>
        );
    }
}

export interface Props extends HTMLProps<Icon> {
    viewBox?: number
}
