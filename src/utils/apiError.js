

// This utility for api error so in every place we will have same error stucture.
export class apiError{
    constructor(statusCode,msg = "Error"){
        this.statusCode = statusCode;
        this.msg = msg;
    };
};