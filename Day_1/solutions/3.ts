{
  /*
  -------------------
  problem - 3
  ------------------
Write a function handleResponse that handles various API responses. The response can either be a success message (string), an error message (string), or an object with statusCode (number) and details (string). Based on the response type, the function should behave differently.
*/

  type ResponseType = string | { statusCode: number; details: string };

  //   interface ResponseType1 {
  //     statusCode: number;
  //     details: string;
  //   }

  //   const success = "";

    const message: ResponseType = {
      statusCode: 401,
      details: "successfull",
    };

//   const value = 10; //this will throw error

  const handleResponse = (res: ResponseType): boolean => {
    if (res) {
      return true;
    }

    return false;
  };

  const result = handleResponse(message);
  console.log(result);
}
