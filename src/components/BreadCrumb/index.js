import React from "react";
import {
  BreadCrumbContainer,
  CurrentTitle,
  Crumbs,
  StyledLink,
  StyledText,
} from "./Elements";

import { useLocation } from "react-router-dom";
const BreadCrumb = () => {
  const route = useLocation();
  const currentPage = route.pathname.replace("/", "");
  return (
    <BreadCrumbContainer>
      <Crumbs>
        <StyledLink to="/">Home</StyledLink>
        <StyledText>/</StyledText>
        <StyledText>{currentPage}</StyledText>
      </Crumbs>
      <CurrentTitle>
        {currentPage.replace("-", " ").replace("-", " ")}
      </CurrentTitle>
    </BreadCrumbContainer>
  );
};
export default BreadCrumb;
