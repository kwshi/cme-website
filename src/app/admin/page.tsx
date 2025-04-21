import Form from 'next/form';

import * as Session from 'server/session';

export default async function Admin() {
  const user = await Session.check();
  if (!user) {
    return <LoginForm />;
  }

  return <>welcome back {user.email}</>;
}

function LoginForm() {
  return (
    <Form action={Session.login}>
      <input name="email" type="text" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <input type="submit" value="go" />
    </Form>
  );
}
