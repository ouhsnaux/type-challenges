type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}` ? true : false
