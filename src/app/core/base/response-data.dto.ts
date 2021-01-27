export interface ResponseDataDto<T> {
    statusCode: number | string;
    data: T;
    message?: string;
    error?: boolean;
}