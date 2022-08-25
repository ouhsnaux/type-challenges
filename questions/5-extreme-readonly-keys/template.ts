interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}

type GetReadonlyKeys<T> = T extends t1 ? T : never

type t2 = Writable<Todo1>
type t3 = keyof t2
type t1 = keyof Todo1

type t4 = t2 extends Todo1 ? true : false
type t5 = Todo1 extends t2 ? true : false
// type t5 = 'title' extends t1 ? true : false
// type t6 = unknown extends string ? true : false
type type3333 = GetReadonlyKeys<t3>
