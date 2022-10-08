type ZeroToTen = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
type LengthNumber<T extends ZeroToTen, Arr extends Array<0> = []> =
  `${Arr['length']}` extends T ? Arr : LengthNumber<T, [...Arr, 0]>

type Tenzero = LengthNumber<'10'>

type MinusOne

type MinusOne<T extends number, A extends Array<0> = []> =
  T extends 0 ? -1
    : T extends ZeroToTen ? 

  [...A, 0]['length'] extends T ? A['length'] : Minus11<T, [...A, 0]>

type m1 = MinusOne<1, []>

type t111 = [...[], 0]
type t2222 = [...t111, 0]
