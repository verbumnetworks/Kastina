import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const ev = await prisma.event.findUnique({
    where: { slug },
    select: { title: true, excerpt: true, cover: true },
  });
  if (!ev) return { title: "Event not found" };
  return {
    title: `Event • ${ev.title}`,
    description: ev.excerpt,
    openGraph: {
      title: ev.title,
      description: ev.excerpt,
      images: ev.cover ? [{ url: ev.cover }] : undefined,
    },
  };
}

// Server action: delete event
async function deleteEvent(slug: string) {
  "use server";
  await prisma.event.delete({ where: { slug } });
  revalidatePath("/dashboard/events");
  redirect("/dashboard/events");
}

export default async function AdminEventViewPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) return notFound();
  const ev = await prisma.event.findUnique({
    where: { slug },
    select: {
      slug: true,
      title: true,
      date: true,
      excerpt: true,
      cover: true,
      images: true,
      content: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!ev) return notFound();

  return (
    <div className="p-6">
      {/* Header / actions */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold">{ev.title}</h1>
          <p className="text-sm text-slate-500">
            {ev.date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · Updated{" "}
            {ev.updatedAt.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            href="/dashboard/events"
            className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50"
          >
            ← Back
          </Link>
          <Link
            href={`/dashboard/events/${ev.slug}/edit`}
            className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50"
          >
            Edit
          </Link>

          {/* Delete (server action + confirm) */}
          <form
            action={deleteEvent.bind(null, ev.slug)}
            onSubmit={(e) => {
              // simple browser confirm; replace with a fancy modal if you prefer
              if (!confirm("Delete this event? This cannot be undone.")) {
                e.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="rounded-lg bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
            >
              Delete
            </button>
          </form>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr,18rem]">
        {/* Main */}
        <article className="rounded-2xl border bg-white p-5">
          {/* Cover */}
          {ev.cover && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={ev.cover}
                alt={ev.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Excerpt */}
          {ev.excerpt && (
            <p className="mt-4 text-slate-700">{ev.excerpt}</p>
          )}

          {/* Gallery */}
          {ev.images?.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
              {ev.images.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
                  <Image src={src} alt={`image ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Long content */}
          {ev.content?.length > 0 && (
            <div className="prose prose-slate mt-6 max-w-none">
              {ev.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          )}
        </article>

        {/* Meta */}
        <aside className="space-y-4">
          <div className="rounded-2xl border bg-white p-4">
            <div className="text-sm font-semibold">Event Info</div>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Slug</dt>
                <dd className="font-mono">{ev.slug}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Date</dt>
                <dd>{ev.date.toLocaleDateString()}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Created</dt>
                <dd>{ev.createdAt.toLocaleDateString()}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Updated</dt>
                <dd>{ev.updatedAt.toLocaleDateString()}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Images</dt>
                <dd>{ev.images.length}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
