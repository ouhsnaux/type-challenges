type IndexOf<T, U> = keyof {
  [P in keyof T as T[P] extends U ? P : never]: P & number
}

type i = IndexOf<[1, 2, 3], 5>
