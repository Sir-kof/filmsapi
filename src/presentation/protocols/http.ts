export interface HttpResponse {
  statusCode: number
  body: any | boolean
}

export interface HttpRequest {
  query?: any
  body?: any
}
