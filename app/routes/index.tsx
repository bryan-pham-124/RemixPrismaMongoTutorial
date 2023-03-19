// app/routes/login.tsx
// ...
import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node'
import { login, register, getUser } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return (await getUser(request)) ? redirect('/') : null
}
// ...

export default function Index() {
  return (
    <div className="h-screen bg-slate-700 flex justify-center items-center">
      <h2 className="text-blue-600 font-extrabold text-5xl">TailwindCSS Is Working!</h2>
    </div>
  );
}


/**
 * Source: https://github.com/sabinadams/kudos-remix-mongodb-prisma/tree/part-2/app/utils
 * 
 */