type Permutation<T extends keyof any> = keyof {
  [P in T]: any
}

type p = Permutation<'A' | 'B' | 'C'>
