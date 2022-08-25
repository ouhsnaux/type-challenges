type primitive = string | boolean | ((...args: any) => any)

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends primitive ? T[P]: DeepReadonly<T[P]>
}
