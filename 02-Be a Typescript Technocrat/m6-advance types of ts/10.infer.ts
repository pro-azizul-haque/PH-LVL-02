/*
6️⃣ Infer দিয়ে Type Extract করা (🔥 Mind Blowing)
type ReturnTypeX<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = () => number;
type R = ReturnTypeX<Fn>; // number


👉 infer = type-level pattern matching
(এটা না জানলে advanced TS incomplete)
*/

type ReturnTypeX<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = () => number;
type R = ReturnTypeX<Fn>; // number // ekane amra onno ekta function er return type ber kore felchi

