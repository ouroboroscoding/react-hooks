/**
 * Online
 *
 * Only sets online status if the user is both on the applications tab, and the
 * computer is actually on the network
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright DevMedika Inc.
 * @created 2024-04-09
 */

// Ouroboros modules
import { network, pageVisibility } from '@ouroboros/browser';
import Subscribe from '@ouroboros/subscribe';

// NPM modules
import { useEffect, useState } from 'react';

/**
 * Online
 *
 * Handles keeping track of page visibility and network
 *
 * @name Online
 * @access private
 */
class Online extends Subscribe {

	/**
	 * Constructor
	 *
	 * Creates a new instance and returns it
	 *
	 * @name _Online
	 * @access private
	 * @returns _Online
	 */
	constructor() {

		// Store the current visibility and network state
		let _visible: boolean = !(pageVisibility.get().property);
		let _network: boolean = network.get();

		// Init the subscriber using the current values of visibility and
		//	network
		super(_visible && _network);

		// Subscribe to notifications about page visibility
		pageVisibility.subscribe((data: Record<string, any>) => {
			_visible = !data.property;
			this.set(_visible && _network);
		});

		// Subscribe to notifications about network
		network.subscribe((data: boolean) => {
			_network = data;
			this.set(_visible && _network);
		});
	}
}

// Create the one instance and export it
const online: Online = new Online();
export default online;

/**
 * Use Online
 *
 * A hook to return if the app is currently online
 *
 * @name useOnline
 * @access public
 * @returns bool
 */
export function useOnline() {

	// State
	const [ data, dataSet ] = useState(online.get());

	// Load effect
	useEffect(() => {

		// Subscribe to changes
		const oO = online.subscribe(dataSet);

		// Unsubscribe
		return () => {
			oO.unsubscribe();
		}

	}, []);

	// Return the current state
	return data;
}