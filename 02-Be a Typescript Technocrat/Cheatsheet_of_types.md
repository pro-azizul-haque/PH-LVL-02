 
# 🚀 **TypeScript Type Map + Super Cheatsheet (One-Page Style)**

## 1) **Primitive Types**

| Type        | Example        | Notes                   |
| ----------- | -------------- | ----------------------- |
| `string`    | `"Hello"`      | Text data               |
| `number`    | `42`           | All numbers (int/float) |
| `boolean`   | `true`         | true/false              |
| `null`      | `null`         | Explicit empty          |
| `undefined` | `undefined`    | Not assigned            |
| `bigint`    | `100n`         | Large integers          |
| `symbol`    | `Symbol("id")` | Unique identifiers      |

---

## 2) **Special Types**

| Type      | Use                | Example                                |
| --------- | ------------------ | -------------------------------------- |
| `any`     | Everything allowed | `let x: any = 10`                      |
| `unknown` | Safe any           | `let x: unknown = 10`                  |
| `never`   | Impossible value   | `function fail(): never { throw ... }` |
| `void`    | No return          | `function log(): void {}`              |

---

## 3) **Literal Types**

```ts
let size: "small" | "medium" | "large";
let choice: 1 | 2 | 3;
```

---

## 4) **Array Types**

```ts
const names: string[] = [];
const points: Array<number> = [];
const readonlyIds: readonly number[] = [1, 2, 3];
```

---

## 5) **Tuple Types**

```ts
let user: [string, number];
let response: [number, string?]; // optional tuple
```

---

## 6) **Object / Interface Types**

```ts
interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

type Product = {
  id: number;
  title: string;
};
```

---

## 7) **Function Types**

```ts
let add: (a: number, b: number) => number;

type Logger = () => void;
```

---

## 8) **Union + Intersection Types**

```ts
type ID = string | number;
type WithTimestamp = { createdAt: Date };
type UserWithTime = User & WithTimestamp;
```

---

## 9) **Enum Types**

```ts
enum Direction {
  Up,
  Down,
}

const enum Roles {
  Admin,
  User,
}
```

---

## 10) **Keyof, Index Access, Lookup Types**

```ts
type Keys = keyof User;      // "name" | "age" | "isAdmin"
type Age = User["age"];      // number
```

---

## 11) **Generics**

```ts
function wrap<T>(value: T): T {
  return value;
}

interface Box<T> {
  item: T;
}
```

---

## 12) **Mapped Types**

```ts
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
```

---

## 13) **Conditional Types**

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```

---

## 14) **Infer (Mind-Blowing Magic)**

```ts
type Return<T> = T extends (...args: any[]) => infer R ? R : never;

type Result = Return<() => number>; // number
```

---

# 🎁 **Utility Types Cheatsheet (Must-Learn)**

| Utility           | Meaning                |
| ----------------- | ---------------------- |
| `Partial<T>`      | সব property optional   |
| `Required<T>`     | সব property required   |
| `Readonly<T>`     | সব readonly            |
| `Pick<T, K>`      | T থেকে নির্দিষ্ট field |
| `Omit<T, K>`      | নির্দিষ্ট field বাদ    |
| `Record<K, T>`    | key-value map          |
| `ReturnType<T>`   | function return type   |
| `Parameters<T>`   | function parameters    |
| `InstanceType<T>` | class instance         |
| `Awaited<T>`      | Promise resolve type   |

**Example:**

```ts
type UserPreview = Pick<User, "name" | "age">;
type StrictUser = Required<User>;
```

---
একটা TypeScript rule মনে রাখলেই সব types বোঝা easy:

**TS = JavaScript + Types that describe shape + behavior**

যত shape define করবে, code তত predictable & bug-free হবে.

 