import * as apiService from './api-service';
import config from '../config';
import { IContent, IContentResult } from 'interfaces/content';

export async function getContent(author: string, permlink: string): Promise<IContentResult> {
  let result: IContentResult;

  await apiService.post({
    url: `${config.hiveConfig}`,
    body: {
      method: "condenser_api.get_content",
      id: 2,
      params: [author, permlink]
    }
  })
    .then((data: IContent) => {
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