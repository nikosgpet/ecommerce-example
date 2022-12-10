import type { IServerOptions } from '@/utils/db-json.model';
import type { Ref } from 'vue';
import { parseServerOptions } from '@/utils/db-json.utils';
import { useFetch } from '../use-fetch';

/**
 * Fetches the items from the server.
 *
 * @param options - The options for querying the server.
 * @param initialData - The initial data to use before the fetch is complete.
 * @returns A reference to the items from the server.
 */
export function useItems(
  options: IServerOptions = {
    page: 1,
    limit: 10,
    sort: { id: 'desc' },
  },
  initialData: any = {}
): Ref<any> {
  const items = useFetch('/items' + parseServerOptions(options), initialData);

  return items;
}
