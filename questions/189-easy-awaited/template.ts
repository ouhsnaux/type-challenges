type MyAwaited<T> = T extends Promise<infer V> ? MyAwaited<V> : T
