/**
 * Represents a single item for sale
 */
export interface IItem {
  /**
   * The unique identifier of the item
   */
  id: number;

  /**
   * All items are sold as part of sale group
   * The unique identifier of the item's sale group
   */
  saleId: number;

  /**
   * The description of the item
   */
  description: number;

  /**
   * The image of the item
   */
  image: string;
}
