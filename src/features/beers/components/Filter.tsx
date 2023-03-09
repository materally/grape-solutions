import { useState } from "react";
import { Form } from "semantic-ui-react";
import styled from "styled-components";

import { FilterInput } from "../../../components/form/FilterInput";
import { Button, ColorMap } from "../../../ui/button";
import { Container } from "../../../ui/layout";
import { RequestPayload } from "../model";

interface Props {
  onFilter: (props: RequestPayload) => void;
  filters: RequestPayload
}

export const Filter = ({ onFilter, filters }: Props) => {
  const [beer_name, setBeerName] = useState(filters.beer_name || '');
  const [abv_gt, setAbvGt] = useState(filters.abv_gt || 0);
  const [abv_lt, setAbvLt] = useState(filters.abv_lt || 100);

  const handleOnFilter = () => onFilter({ beer_name, abv_gt, abv_lt })

  return (
    <Container fluid={false}>
      <FilterWrapper>
        <Form.Field>
          <label>Name:&nbsp;</label>
          <FilterInput
            type="text"
            name="name"
            placeholder="Name"
            value={beer_name}
            onChange={(e) => setBeerName(e.target.value)}
          />
        </Form.Field>

        <RightFilterWrapper>
          <Form.Field inline>
            <label>ABV:&nbsp;</label>
            <FilterInput
              type="number"
              name="abv_gt"
              placeholder="0"
              style={{ width: 80 }}
              value={abv_gt}
              onChange={(event) => setAbvGt(Number(event.target.value))}
            />

            &nbsp;% -&nbsp;

            <FilterInput
              type="number"
              name="abv_lt"
              placeholder="100"
              style={{ width: 80 }}
              value={abv_lt}
              onChange={(event) => setAbvLt(Number(event.target.value))}
            />
            &nbsp;%
          </Form.Field>

          <Button
            theme={ColorMap.BUTTON}
            style={{ marginLeft: 10 }}
            onClick={handleOnFilter}
          >
            Filter
          </Button>
        </RightFilterWrapper>
      </FilterWrapper>
    </Container>
  );
};

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;

const RightFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
