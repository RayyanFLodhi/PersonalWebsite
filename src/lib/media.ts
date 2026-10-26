/** True for an image that is worth rendering; the shared placeholder is treated as "no image". */
export const isRealImage = (src?: string): src is string => !!src && !/placeholder/i.test(src);
