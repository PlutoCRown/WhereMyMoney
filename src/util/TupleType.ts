export type TupleType<T extends any[]> = T extends (infer U)[] ? U : never;
