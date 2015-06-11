import { escapeHtml } from 'utils/html';

export default class Text {
	constructor ( str ) {
		this.str = str;
	}

	bind () {
		// noop
	}

	firstNode () {
		return this.node;
	}

	render () {
		return ( this.node = document.createTextNode( this.str ) );
	}

	toString ( escape ) {
		return escape ? escapeHtml( this.str ) : this.str;
	}

	unbind () {
		// noop
	}

	update () {
		// noop
	}
}
