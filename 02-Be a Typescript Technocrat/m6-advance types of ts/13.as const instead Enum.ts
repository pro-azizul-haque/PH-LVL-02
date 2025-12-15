const URoles = {
  Admin: "Admin",
  Editor: "Editor",
} as const
 
function getUserByRole(role:keyof typeof URoles) {
  if (role === URoles.Admin ) {
    return { name: "azizul", role: "admin" };
  }
}
console.log(getUserByRole(URoles.Admin));