export enum Status {

    OK,
    INVALID_EMAIL,
    PASSWORD_NOT_MATCH
}

class Result {

    userId: string;
}

export class AuthResult {

    result: Result;

    success: boolean;

    status: Status;

    accessToken: string;
}