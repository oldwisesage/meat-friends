import { useCart } from '../../lib/cartState';
import { Button } from '../ui/Form';

const CloseCartButton = () => {
  const { closeCart } = useCart();
  return (
    <Button type="button" onClick={closeCart}>
      Close cart
    </Button>
  );
};
export default CloseCartButton;
