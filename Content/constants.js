/**
 * A collection of constants to be used around the app
 */

/** True _only_ in production */
export const __prod__ = process.env.NODE_ENV === 'production';

/** Breakpoints **/
export const __bp_small__ = 600;
export const __bp_medium__ = 900;
export const __bp_large__ = 1200;
export const __bp_huge__ = 1800;
