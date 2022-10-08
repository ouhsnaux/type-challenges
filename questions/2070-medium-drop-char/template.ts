type DropChar<S, C> =
  S extends `${infer F}${infer R}`
    ? `${F extends C ? '' : F}${DropChar<R, C>}`
    : S
