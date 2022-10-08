type ObjectEntries<T> = (keyof T) extends infer P ? P extends keyof T ? [P, Exclude<T[P], undefined>] :never : never
