type RType = {
  mapFrom: any
  mapTo: any
}

type MapTypes<T extends Record<string, any>, R extends RType> = {
  [P in keyof T]: T[P] extends R['mapFrom'] ? R['mapTo'] : T[P]
}

type tt1213=MapTypes<
{name: string; date: Date},
{mapFrom: string; mapTo: boolean}
| {mapFrom: Date; mapTo: string}
>

type r1231 = {mapFrom: string; mapTo: boolean}
| {mapFrom: Date; mapTo: string}

type r1231123 = r1231['mapFrom']
