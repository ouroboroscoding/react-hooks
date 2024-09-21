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
import Subscribe from '@ouroboros/subscribe';
/**
 * Online
 *
 * Handles keeping track of page visibility and network
 *
 * @name Online
 * @access private
 */
declare class Online extends Subscribe {
    /**
     * Constructor
     *
     * Creates a new instance and returns it
     *
     * @name _Online
     * @access private
     * @returns _Online
     */
    constructor();
}
declare const online: Online;
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
export declare function useOnline(): any;
