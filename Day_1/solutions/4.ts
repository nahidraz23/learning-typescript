{
  /**
    ----------------------------
    problem-4
    ----------------------------
     4. Type Guard for null and undefined
Create a function isNotNullOrUndefined that checks if a given input is neither null nor undefined. This should work for both primitive and object types. If the input is of a specific object type (say User), ensure it returns a valid boolean value.
     */
    type User = {
        name: string,
        email: string
    }

  type TypeGuard = null | undefined | User;

//   const name: TypeGuard = "";
  const user: TypeGuard = {
    name: "nahid",
    email: 'nahid@gmail.com'
  };

  const isNotNullOrUndefined = (data: TypeGuard): number => {
    if (typeof data === null) {
      return 1;
    } else if (typeof data === undefined) {
      return 2;
    } else if (typeof data === "object") {
      return 3;
    }
    return 0;
  };

  const result = isNotNullOrUndefined(user);
  console.log(result);
}
