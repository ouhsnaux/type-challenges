type IsTuple<T> = T extends { readonly length: number } ?
  T extends [] | { 0: any } ? true : false : false
