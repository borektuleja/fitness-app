import { signOutAction } from "@/actions/auth.actions";

import Button from "@/components/Button";
import Form from "@/components/Form";

export default function LogoutForm() {
  return (
    <Form action={signOutAction}>
      <Button>Odhlásit se</Button>
    </Form>
  );
}
