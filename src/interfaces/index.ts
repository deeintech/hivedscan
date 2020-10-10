export interface IHttpPost {
  url: string,
  body: { [key: string]: any },
  rpc?: boolean
}
