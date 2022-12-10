import { ref } from 'vue';
import type { Ref } from 'vue'

/**
 * Fetches the data from the database.
 *
 * @param url - The URL of the API (full path or relative url).
 * @param initialData - The initial data to use before the fetch is complete.
 * @returns A reference to the data from the server.
 */
export function useFetch(
  url: string,
  initialData: any = {}
): Ref<any> {
  const data = ref(initialData);

  async function fetchData() {
    const fullUrl = url.startsWith('http') ? url : import.meta.env.VITE_APP_SERVER_URL + url;

    const response = await fetch(fullUrl);
    data.value = await response.json();
  }

  fetchData();

  return data;
}
