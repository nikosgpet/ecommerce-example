import type { IServerOptions } from './db-json.model';

export function parseServerOptions(options: IServerOptions) {
  const { filters, page, limit, sort, query } = options;

  const queryList = [];
  if (query) {
    queryList.push(`q=${query}`);
  }
  if (filters && Object.keys(filters).length > 0) {
    queryList.push(
      ... Object.keys(filters).map(key => `${key}=${filters[key]}`)
    );
  }
  if (page) {
    queryList.push(`_page=${page}`);
  }
  if (limit) {
    queryList.push(`_limit=${limit}`);
  }
  if (sort && Object.keys(sort).length > 0) {
    queryList.push(
      ... Object.keys(sort).map(key => `_sort=${key}&_order=${sort[key]}`)
    );
  }

  return queryList.length > 0 ? '?' + queryList.join('&') : '';
}
