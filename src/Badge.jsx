import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Tappable from 'react-tappable';

// import styles from '../stylesheets/badge.css';

const styles = {
	badge: 'badge',
	visible: 'visible',
	invisible: 'invisible'
}

export default class Badge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			class: styles.badge,
			visibility: styles.invisible
		};
		this.updateState = this.updateState.bind(this);
	}

	updateState() {
		this.state.visibility = (parseInt(this.props.unread) > 0) ? styles.visible : styles.invisible;
	}

	classNames() {
		this.updateState();
		
		return this.state.class + ' ' + this.state.visibility;
	}

	render() {
		console.info(this.props.unread, typeof this.props.unread, parseInt(this.props.unread));
		return (
			<span className={this.classNames()}>{this.props.unread}</span>
		);
	}
}