export interface ListItemProps {
  id: number;
  name: string;
  image_url: string;
  abv: number;
}

export interface DetailProps extends ListItemProps {
  description: string;
  tagline: string;
  food_pairing: Array<string>;
}

export type RequestPayload = Partial<{
  beer_name: string;
  abv_gt: number;
  abv_lt: number;
  page: number;
}>;

export enum PaginationType {
  PREVIOUS = 'previous',
  NEXT = 'next'
}
