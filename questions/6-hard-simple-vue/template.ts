interface params {
  data?: Function | Record<string, any>
  methods?: Record<string, Function>
  computed?: Record<string, Function | {}
}

// interface SimpleVue {
//   new (options: params): SimpleVue
// }

declare function SimpleVue(options: params): any
