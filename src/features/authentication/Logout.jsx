import { useSignout } from "./useSignout";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
function Logout() {
  const { isLoading, signout } = useSignout();
  return (
    <ButtonIcon disabled={isLoading} onClick={signout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
