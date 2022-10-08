// 为什么要改成数组？ https://github.com/microsoft/TypeScript/issues/31751
type IsNever<T> = [T] extends [never] ? true : false
