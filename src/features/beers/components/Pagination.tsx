import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

import { Container } from "../../../ui/layout";

interface Props {
  onPrev: () => void;
  onNext: () => void;
  page: number;
  nextButtonDisabled: boolean;
}

export const Pagination = ({ page, onPrev, onNext, nextButtonDisabled }: Props) => {
  const prevButtonDisabled = page === 1;

  return (
    <Container fluid={false}>
      <PaginationWrapper>
        <PageCount>Page: {page}</PageCount>

        <Button.Group>

          <Button icon labelPosition='left' onClick={onPrev} disabled={prevButtonDisabled}>
            <Icon name={'arrow left'} />
            Previous
          </Button>

          <Button icon labelPosition='right' onClick={onNext} disabled={nextButtonDisabled}>
            Next
            <Icon name={'arrow right'} />
          </Button>

        </Button.Group>
      </PaginationWrapper>
    </Container>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 20px;
`;

const PageCount = styled.span`
  margin-right: 10px;
`;
