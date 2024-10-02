import {createSelector} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";


const useSmartSelectors = <T extends readonly (keyof T)[]>(keys: T) => {
    const selector = createSelector(
        (state: T) => state,
        (counterState: T) => {
            const result: Partial<T> = {};
            keys.forEach((key) => {
                // @ts-ignore
                result[key] = counterState[key];
            });
            return result;
        }
    );
    return useSelector(selector);
};

export {useSmartSelectors};
