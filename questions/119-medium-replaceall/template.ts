type ReplaceAll<S extends string, From extends string, To extends string> =
From extends '' ? S : S extends `${infer B}${From}${infer E}` ? `${B}${To}${ReplaceAll<E, From, To>}` : S
