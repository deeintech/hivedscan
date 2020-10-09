export interface HttpPost {
  url: string,
  body: { [key: string]: any },
  rpc?: boolean
}
