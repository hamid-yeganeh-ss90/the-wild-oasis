import { styled } from "styled-components";
import PropTypes from "prop-types";

PageCounter.propTypes = {
  currentPage: PropTypes.number,
  currentStyle: PropTypes.number,
};
const StyledPoint = styled.div`
  background-color: ${(props) =>
    props.active ? "var(--color-grey-900)" : "var(--color-grey-200)"};
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
function PageCounter({ currentPage, currentStyle }) {
  return <StyledPoint active={currentStyle < currentPage} />;
}

export default PageCounter;
