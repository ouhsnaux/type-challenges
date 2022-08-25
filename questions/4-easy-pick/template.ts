type MyPick<T, K> = {
  [P in K & keyof T]: T[P]
}
