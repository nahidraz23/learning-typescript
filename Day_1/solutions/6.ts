{
    interface TimeoutError {
        type: 'timeout';
        content: string;
        code: number;
    }

    interface UnauthorizedError {
        type: 'unauthorized';
        content: string;
        code: number;
    }
    
    type ResponseType = TimeoutError | UnauthorizedError;

    const message : ResponseType = {
        type: 'timeout',
        content: 'Request timeout',
        code: 401
    }

    console.log(message.code)
}