import type { IServerOptions } from '@/utils/db-json.model';
import type { Ref } from 'vue';
import { parseServerOptions } from '@/utils/db-json.utils';
import { useFetch } from '../use-fetch';

/**
 * Fetches the sales from the server.
 *
 * @param options - The options for querying the server.
 * @param initialData - The initial data to use before the fetch is complete.
 * @returns A reference to the sales from the server.
 */
export function useSales(
  options: IServerOptions = {
    page: 1,
    limit: 10,
    sort: { id: 'desc' },
  },
  initialData: any = {}
): Ref<any> {
  return useFetch('/sales' + parseServerOptions(options), initialData);
}
