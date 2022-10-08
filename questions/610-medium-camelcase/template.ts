type CamelCase1<S extends string> =
  S extends `${infer B}-${infer S}${infer E}`
    ? S extends '-'
      ? `${B}-${CamelCase1<`${S}${E}`>}`
      : S extends Uppercase<S>
        ? `${B}-${Uppercase<S>}${CamelCase1<E>}`
        : `${B}${Uppercase<S>}${CamelCase1<E>}`
    : S
