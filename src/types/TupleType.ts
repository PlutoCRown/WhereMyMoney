/** 返回数组的类型 */
export type TupleType<T extends any[]> = T extends (infer U)[] ? U : never;
