export default function Section$update () {
	var docFrag = this.docFrag,
		rendered = this.rendered,
		unrender, splice,
		fragment, domFragment,
		anchor, target, i, len;


	// Remove fragments that have been marked for destruction
	if ( unrender = this.fragmentsToUnrender ) {
		for( i = 0, len = unrender.length; i < len; i++ ) {
			fragment = unrender[i];
			if ( fragment.rendered ) {
				fragment.unrender( true );
			}
		}
		this.fragmentsToUnrender = null;
	}

	if ( splice = this.fragmentsToAdd ) {
		// Render new fragments (but don't insert them yet)
		for( i = 2, len = splice.length; i < len; i++ ) {
			domFragment = splice[i].render();
			if ( rendered ) {
				docFrag.appendChild( domFragment );
			}
		}

		this.fragmentsToAdd = null;
	}

	if ( rendered && this.docFrag.childNodes.length ) {
		let target = this.parentFragment.getNode(), anchor;

		if ( splice ) {
			// next fragment after end of inserts
			let next = splice[0] + splice.length - 2;
			let fragment = this.fragments[ next ];

			if ( fragment && fragment.items.length ) {
				anchor = fragment.items[0].node;
			}
		}

		if ( !anchor ) {
			anchor = this.parentFragment.findNextNode( this );
		}

		target.insertBefore( this.docFrag, anchor );
	}
}
