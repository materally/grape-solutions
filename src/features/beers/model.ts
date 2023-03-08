export interface ListItemProps {
  id: number;
  name: string;
  image_url: string;
  abv: number;
}

export type RequestPayload = Partial<{
  beer_name: string;
  abv_gt: number;
  abv_lt: number;
  page: number;
}>;
