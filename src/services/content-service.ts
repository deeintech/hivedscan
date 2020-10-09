import * as apiService from './api-service';
import config from '../config';
import { Content, ContentResult } from 'interfaces/content';

export async function getContent(author: string, permlink: string): Promise<ContentResult> {
  let result: ContentResult;

  await apiService.post({
    url: `${config.hiveConfig}`,
    body: {
      method: "condenser_api.get_content",
      id: 2,
      params: [author, permlink]
    }
  })
    .then((data: Content) => {
      result = {
        id: data.id,
        author: data.author,
        body: data.body,
        created: data.created,
        permlink: data.permlink,
        title: data.title
      }
    })
    .catch(() => {
      return [];
    })
  return result;
};