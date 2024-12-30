import { type UseAssetsStatus } from '../constants/UseAssetsStatus';

export interface UseAssetsResult<T>
{
    /** @description An array of resolved assets, or `undefined` for assets that are still loading. */
    assets: (T | undefined)[];

    /** @description The error that was encountered. */
    error?: Error;

    /** @description Whether there's an error loading these assets. */
    isError: boolean;

    /** @description Whether these assets are still loading. */
    isPending: boolean;

    /** @description Whether these assets are have successfully finished loading. */
    isSuccess: boolean;

    /** @description The current loading status of these assets. */
    status: Lowercase<keyof typeof UseAssetsStatus>;
}
