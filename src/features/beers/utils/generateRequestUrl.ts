import { RequestPayload } from "../model";

const ignoreNullishValues = ([, value]: [unknown, unknown]) =>
  !(value === null || value === undefined || value === 0 || value === '');

export const generateRequestUrl = ({ abv_gt, abv_lt, beer_name, page }: RequestPayload) => {
  const filters = { beer_name, abv_gt, abv_lt };
  const pagination = { page };
  const params = new URLSearchParams();

  params.set("per_page", "2");

  if (filters) {
    Object.entries(filters)
      .filter(ignoreNullishValues)
      .forEach(([fieldName, fieldValue]) =>
        params.set(fieldName, fieldValue as string)
      );
  }

  if (pagination) {
    Object.entries(pagination)
      .filter(ignoreNullishValues)
      .forEach(([fieldName, fieldValue]) =>
        params.set(fieldName, String(fieldValue))
      );
  }

  return params.toString();
}