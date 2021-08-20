import React from "react";
import { Button, Icon, Flex, FlexProps } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";

type CircleNavButtonProps = {
  navDirection: "forward" | "back";
  currentSearch: string;
};

const CircleNavButton: React.FC<CircleNavButtonProps & Partial<FlexProps>> = ({
  navDirection,
  currentSearch,
}) => {
  const history = useHistory();

  const useQuery = (): URLSearchParams => {
    return new URLSearchParams(useLocation().search);
  };

  const page = Number(useQuery().get("page"));

  const handleClick = (): void => {
    if (navDirection === "forward" && page < 37) {
      return history.push(`/pokedex?page=${page + 1}&name=${currentSearch}`);
    } else if (navDirection === "back" && page > 1) {
      return history.push(`/pokedex?page=${page - 1}&name=${currentSearch}`);
    }
  };

  return (
    <Flex mr="auto" ml="auto">
      <Button
        rounded="50%"
        height="16"
        width="16"
        color="white"
        bg="teal.500"
        onClick={handleClick}
      >
        <Icon name={`arrow-${navDirection}`} size="6"></Icon>
      </Button>
    </Flex>
  );
};

export default CircleNavButton;
