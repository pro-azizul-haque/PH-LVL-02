/*Super-Simple Definition (memorizable)

Constraint = type-এর উপর boundary / condition
 যাতে Type must follow a specific shape, keys, primitive, or class.
 */
type Student = {
  name: string;
  age: string;
  roll: number;
};
const isAuthorizedStudent = <
  T extends // {
  //   name: string;
  //   age: string;
  //   roll: number;
  // }
  Student,
>(
  identity: T,
): boolean => {
  if (identity) {
    return true;
  } else return false;
};

const student1 = {
  name: "azizul",
  age: "19",
  roll: 10,
  group: "Sci",
  class: 10,
};
isAuthorizedStudent(student1);
