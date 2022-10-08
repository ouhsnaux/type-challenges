type Arr<T extends number, A extends Array<0> = []> =
  A['length'] extends T ? A : Arr<T, [...A, 0]>

type Minus11<T extends number, A extends Array<0> = []> =
  [...A, 0]['length'] extends T ? A['length'] : Minus11<T, [...A, 0]>

type AddNumber<Number1 extends number, Number2 extends number>
  = [...Arr<Number1>, ...Arr<Number2>]['length']

type Fibonacci<T extends number> =
  T extends 0
    ? 0
    : T extends 1
      ? 1
      : AddNumber<Fibonacci<Minus11<T>>, Fibonacci<Minus11<Minus11<T>>>>

    type ff1 = Fibonacci<1>
    type ff2 = Fibonacci<2>
    type ff3 = Fibonacci<3>
    type ff4 = Fibonacci<3>
