export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'INVALID_DATA'
| 'UNAUTHORIZED'
| 'NOT_FOUND'
| 'CONFLICT'
| 'INTERNAL_SERVER_ERROR'
| 'UNPROCESSABLE_ENTITY'
| 'BAD_REQUEST';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
