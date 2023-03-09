import { Button, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button color="olive" onClick={() => navigate(-1)}>
        <Icon name="arrow left" />
        Back
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 25px;
`;
