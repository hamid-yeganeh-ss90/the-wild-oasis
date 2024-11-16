import PropTypes from "prop-types";
import Button from "./Button";
import { useCheckout } from "../features/check-in-out/useCheckout";

CheckoutButton.propTypes = {
  bookingId: PropTypes.number,
};
function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkout } = useCheckout();
  return (
    <Button
      size="small"
      variation="primary"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
