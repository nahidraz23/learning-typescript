{
  type Status = string[];

  interface StatusMessage {
    status: boolean;
    message: string;
  }

  const getData = (status: Status | StatusMessage) => {
    return status;
  };

//   Accepted types
//   const result = getData(["nahid", 'shuvo']);
const result = getData({status: true, message: "all okay"})

// Unaccepted type
// const result = getData(9) // this will show error
// const result = getData({status: false, message: 8}) //this will show error


  console.log(result)
}
