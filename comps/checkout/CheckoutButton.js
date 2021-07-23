import Link from 'next/link';
import { Button } from '../ui/Form';

const CheckoutButton = () => (
  <Link href="/checkout">
    <Button type="button">Checkout</Button>
  </Link>
);
export default CheckoutButton;
