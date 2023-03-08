import { Form } from "semantic-ui-react";
import styled from "styled-components";
import { FilterInput } from "../../../components/form/FilterInput";
import { Button, ColorMap } from "../../../ui/button";
import { Container } from "../../../ui/layout";

export const Filter = () => {

  return (
    <Container fluid={false}>
      <FilterWrapper>
        <Form.Field>
          <label>Name:&nbsp;</label>
          <FilterInput
            type="text"
            name="name"
            placeholder="Name"
          />
        </Form.Field>

        <RightFilterWrapper>
          <Form.Field inline>
            <label>ABV:&nbsp;</label>
            <FilterInput
              type="text"
              name="abv_gt"
              placeholder="0"
              style={{ width: 80 }}
            />

            &nbsp;% -&nbsp;

            <FilterInput
              type="text"
              name="abv_lt"
              placeholder="100"
              style={{ width: 80 }}
            />
            &nbsp;%
          </Form.Field>

          <Button theme={ColorMap.BUTTON} style={{ marginLeft: 10 }}>Filter</Button>
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
