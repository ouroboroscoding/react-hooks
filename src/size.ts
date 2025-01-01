/**
 * Size
 *
 * Exports useSize which relies on the browser/size module
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright DevMedika Inc.
 * @created 2024-09-20
 */

// Ouroboros modules
import size from '@ouroboros/browser/size';

// NPM modules
import { useEffect, useState } from 'react';

/**
 * Use Size
 *
 * React hook that returns the current size of the client width in terms:
 * xs (extra small)
 * sm (small)
 * md (medium)
 * lg (large)
 * xl (extra large)
 *
 * @name useSize
 * @access public
 * @returns 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 */
export default function useSize(): string {

	// State
	const [ current, currentSet ] = useState<string>(size.get());

	// Load effect
	useEffect(() => {

		// Watch for any size changes
		const oSize = size.subscribe(currentSet);

		// On exit, stop watching for resize window events
		return () => {
			oSize.unsubscribe()
		}

	}, []);

	// Return the current size
	return current;
}