// enum Size {
//   Small,
//   Medium,
//   Large
// }

// console.log(Size.Small) // 0
// console.log(Size.Medium) // 1

enum Roles { // enum keyword for enum type
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

function getUserByRole(role: Roles) {
  // parameter type = Roles enum
  if (role === Roles.Admin) {
    return { name: "azizul", role: "admin" };
  }
}
getUserByRole(Roles.Admin); // argument as a enum values

enum Status {
  Pending,
  Success,
  Failed,
}

function checkStatus(user: object, status: Status) {
  return status;
}

checkStatus({}, Status.Success);
