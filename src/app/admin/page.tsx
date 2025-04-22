import Form from 'next/form';
import * as Z from 'zod';
import * as Zfd from 'zod-form-data';

import database from 'server/database';
import * as Schema from 'server/database/schema';
import * as Session from 'server/session';

export default async function Admin() {
  const user = await Session.check();
  if (!user) {
    return <LoginForm />;
  }

  return <AdminHome />;
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

const regexpTime = /^(\d{1,2}):(\d{2})/;
const AddPerformance = Zfd.formData({
  title: Z.string(),
  date: Z.string().date(),
  start: Z.string().regex(regexpTime),
  end: Z.string().regex(regexpTime),
  description: Z.string(),
});
const addEvent = async (form: FormData) => {
  'use server';
  const result = AddPerformance.safeParse(form);
  if (!result.success) return;

  await database.insert(Schema.Content.event).values(result.data);
};

async function AdminHome() {
  const event = await database.query.contentEvent.findMany();

  return (
    <div>
      <h1>performances</h1>
      <ul>
        {event.map((e) => (
          <li key={e.title}>
            {e.title}: {e.date} {e.start}-{e.end}; {e.description}
          </li>
        ))}
      </ul>
      <form action={addEvent}>
        <input name="title" type="text" required />
        <input name="date" type="date" required />
        <input name="start" type="time" required />
        <input name="end" type="time" required />
        <input name="description" type="text" required />
        <input type="submit" value="add" />
      </form>
    </div>
  );
}
