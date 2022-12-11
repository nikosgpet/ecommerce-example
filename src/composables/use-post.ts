import { ref } from 'vue';
import type { Ref } from 'vue'

/**
 * Posts the data from the database.
 *
 * @param url - The URL to post the changes to.
 * @returns A reference to the data from the post.
 */
export function usePost(
  url: string,
): { data: Ref<any>, post: (payload: any) => Promise<void> } {
  const data = ref({});

  async function postData(payload: any) {
    const fullUrl = url.startsWith('http') ? url : import.meta.env.VITE_APP_SERVER_URL + url;

    const response = await fetch(fullUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    data.value = await response.json();
  }

  return {
    data,
    post: postData,
  };
}
