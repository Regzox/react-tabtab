import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Tappable from 'react-tappable';

const Display = {
	SHOWN: 'shown',
	HIDDEN: 'hidden'
};

export default class Badge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			styles: [
				'badge'
			],
			display: Display.SHOWN
		};

		const hasUnread = parseInt(this.props.unread) > 0;

		if (hasUnread) {
			this.state.styles.push('shown');
		} else {
			this.state.styles.push('hidden');
		}

		this.display = this.display.bind(this);
		this.hide = this.hide.bind(this);
		this.show = this.show.bind(this);
	}

	/**
	 * Sets the display state with its style.

	 * @param  {[type]} display [description]
	 * @return {[type]}         [description]
	 */
	display(display) {
		const styles = this.state.styles.filter(style => {
			return Object.values(Display).includes(style);
		});

		styles.push(display);
		this.setState(Object.assign({}, {
			styles: styles,
			display: display
		}));
	}

	/**
	 * Shows the badge.
	 * @return {[type]} [description]
	 */
	show() {
		this.display(Display.SHOWN);
	}

	/**
	 * Hides the badge.
	 * @return {[type]} [description]
	 */
	hide() {
		this.display(Display.HIDDEN);
	}

	/**
	 * Update the badge state according to unread property changes.
	 * @param  {[type]} nextProps [description]
	 * @return {[type]}           [description]
	 */
	componentWillReceiveProps(nextProps) {
		const hasUnread = parseInt(nextProps.unread) > 0;

		if (hasUnread) {
			/**
			 * No opearations while has unread items.
			 */
		} else {
			this.hide();
		}
	}

	render() {
		const styles = this.state.styles.join(' ');

		return (
			<span className={styles} onClick={() => {
				this.props.handleBadgeClick();
			}}>
				{this.props.unread}
			</span>
		);
	}
}
