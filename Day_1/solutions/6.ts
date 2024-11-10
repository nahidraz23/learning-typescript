{
    interface TimeoutError {
        type: 'error';
        content: string;
        code: number;
    }

    interface UnauthorizedError {
        type: 'error';
        content: string;
        code: number;
    }
    
    type ResponseType = TimeoutError | UnauthorizedError;

    const message : TimeoutError = {
        type: 'error',
        content: 'Request timeout',
        code: 401
    }

    console.log(message.code)
}