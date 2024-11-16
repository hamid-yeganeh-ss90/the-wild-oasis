import { styled } from "styled-components";

const DashboardButton = styled.button`
  padding: 0.25rem 0.05rem;
  font-size: 12px;
  color: var(--color-grey-900);
  background-color: var(--color-blue-100);
  font-weight: 500;
  border-radius: 8px;
  &:hover {
    background-color: var(--color-blue-700);
    color: var(--color-grey-200);
  }
`;
export default DashboardButton;
