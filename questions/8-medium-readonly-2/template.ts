
type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>
