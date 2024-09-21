/**
 * Width
 *
 * Exports useGreaterThan, useLessThan, useWidth which work with the actual
 * pixel width as opposed to Size, which works with text representations of
 * width sizes
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright DevMedika Inc.
 * @created 2024-09-20
 */
/**
 * Use Greater Than
 *
 * Returns if the current client width is greater than the given width
 *
 * @name useGreaterThan
 * @access public
 * @param against The width in pixels to check again
 * @returns boolean
 */
export declare function useGreaterThan(against: number): boolean;
/**
 * Use Less Than
 *
 * Returns if the current client width is less than the given width
 *
 * @name useLessThan
 * @access public
 * @param width The width in pixels to check again
 * @returns boolean
 */
export declare function useLessThan(against: number): boolean;
/**
 * Use Width
 *
 * Hook to update any time the width of the window changes
 *
 * @name useWidth
 * @access public
 * @returns number
 */
export declare function useWidth(): number;
declare const width: {
    useGreaterThan: typeof useGreaterThan;
    useLessThan: typeof useLessThan;
    useWidth: typeof useWidth;
};
export default width;
