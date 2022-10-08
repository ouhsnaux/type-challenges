type RequiredByKeys<T, K = keyof T> = MyMerge<{
  [P in Exclude<keyof T, K>]?: T[P]
}, {
  [P in keyof T & K]-?: T[P]
}>

interface User {
  name?: string
  age?: number
  address?: string
}

type p1 = RequiredByKeys<User, 'name'>
type p11 = {
  [P in Exclude<keyof User, 'name'>]: User[P]
}
