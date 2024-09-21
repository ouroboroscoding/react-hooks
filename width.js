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
// NPM modules
import { useEffect, useState } from 'react';
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
export function useGreaterThan(against) {
    // State
    const [result, resultSet] = useState(document.documentElement.clientWidth > against);
    // Load / width effect
    useEffect(() => {
        // Private function to calculate the return on browser resizes
        const rewidth = () => resultSet(document.documentElement.clientWidth > against);
        // Watch for browser resizes
        window.addEventListener('resize', rewidth);
        // On exit, stop watching browser resizes
        return () => {
            window.removeEventListener('resize', rewidth);
        };
    }, [against]);
    // Return the current result
    return result;
}
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
export function useLessThan(against) {
    // State
    const [result, resultSet] = useState(document.documentElement.clientWidth < against);
    // Load / width effect
    useEffect(() => {
        // Private function to calculate the return on browser resizes
        const rewidth = () => resultSet(document.documentElement.clientWidth < against);
        // Watch for browser resizes
        window.addEventListener('resize', rewidth);
        // On exit, stop watching browser resizes
        return () => {
            window.removeEventListener('resize', rewidth);
        };
    }, [against]);
    // Return the current result
    return result;
}
/**
 * Use Width
 *
 * Hook to update any time the width of the window changes
 *
 * @name useWidth
 * @access public
 * @returns number
 */
export function useWidth() {
    // State
    const [current, currentSet] = useState(document.documentElement.clientWidth);
    // Load effect
    useEffect(() => {
        // Private function to store the current width
        const rewidth = () => currentSet(document.documentElement.clientWidth);
        // Watch for browser resizes
        window.addEventListener('resize', rewidth);
        // On exit, stop watching browser resizes
        return () => {
            window.removeEventListener('resize', rewidth);
        };
    }, []);
    // Return the current width
    return current;
}
// Create "instance" to set as default export
const width = { useGreaterThan, useLessThan, useWidth };
export default width;
