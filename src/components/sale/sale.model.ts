import type { IItem } from "../item/item.model";

/**
 * Represents a set of items sold together.
 */
 export interface ISale {
  /**
   * The unique identifier of the item set.
   */
  id: number;

  /**
   * The title of the item set.
   */
  title: string;

  /**
   * The description of the item set.
   */
  description: string;

  /*
   * The items sold together in this sale.
   */
  items?: IItem[];
}
