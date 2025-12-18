'use server'

import { db } from '@/db'
import { blogTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getBooking() {
  return await db.select().from(blogTable)
}

export async function addBooking(form: FormData) {
  await db.insert(blogTable).values({
    name: String(form.get('name')),
    phone: String(form.get('phone')),
    people: String(form.get('people')),
    hour: String(form.get('hour')),
    done: false,
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function editBooking(form: FormData) {
  await db
    .update(blogTable)
    .set({
      name: String(form.get('name')),
      phone: String(form.get('phone')),
      people: String(form.get('people')),
      hour: String(form.get('hour')),
      done: form.get('done') === 'on',
    })
    .where(eq(blogTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

export async function removeBooking(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) throw new Error("Missing id");

  await db.delete(blogTable).where(eq(blogTable.id, id));

  redirect((await headers()).get("referer") ?? "/");
}