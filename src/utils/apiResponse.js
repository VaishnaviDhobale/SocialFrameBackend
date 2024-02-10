// This utility is for api response we will have same api response stucture

export class apiResponse {
  constructor(statusCode, data, msg = "Success") {
    this.statusCode = statusCode,
    this.msg = msg,
    this.data = data
  };
};
