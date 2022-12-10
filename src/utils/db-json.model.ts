/**
 * Represents the options for querying a server.
 */
 export interface IServerOptions {
  /**
   * The filters to apply to the query.
   */
  filters?: { [key: string]: string };

  /**
   * The page number to retrieve.
   */
  page?: number;

  /**
   * The number of items to retrieve per page.
   */
  limit?: number;

  /**
   * The sort criteria to apply to the query.
   */
  sort?: { [key: string]: 'asc' | 'desc' };

  /**
   * The search query to apply to the data.
   */
  query?: string;
}
