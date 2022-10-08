type RemoveIndexSignature<T> = {
  [P in keyof T as P extends `${infer S}` ? P : never]: T[P]
}

type Foo = {
  [key: string]: any
  foo(): void
  bar: string
}
type r1 = RemoveIndexSignature<Foo>
type r11 = keyof Foo extends 'foo' | 'bar' ? true : false
