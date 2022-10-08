type AppendArgument<Fn, A> = Fn extends (...rest: infer Param) => infer R
  ? (...rest: [...Param, A]) => R : Fn
