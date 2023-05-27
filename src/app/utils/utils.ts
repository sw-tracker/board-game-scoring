import { isNull, isUndefined } from 'lodash-es';

export const isNullOrUndefined = (value: unknown): value is null | undefined => isNull(value) || isUndefined(value);

export const isNotNullOrUndefined = <T>(value: T | undefined | null): value is T => !isNullOrUndefined(value);
