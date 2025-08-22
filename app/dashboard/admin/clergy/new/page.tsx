import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createClergy(formData: FormData) {
  "use server";

  const name = String(formData.get("name") || "").trim();
  const role = String(formData.get("role") || "").trim();
  const parish = String(formData.get("parish") || "").trim();
  const address = String(formData.get("address") || "").trim();
  const phone = String(formData.get("phone") || "").trim() || null; // optional
  const extra = String(formData.get("extra") || "").trim() || null; // optional

  if (!name || !role || !parish || !address) {
    throw new Error("Name, role, parish, and address are required.");
  }

  await prisma.clergy.create({
    data: { name, role, parish, address, phone, extra },
  });

  // Refresh the list and go back
  revalidatePath("/dashboard/clergy");
  redirect("/dashboard/clergy");
}

export default function NewClergyPage() {
  return (
    <div className="max-w-2xl p-6">
      <div className="mb-4">
        <h1 className="text-xl font-semibold">Add New Clergy</h1>
        <p className="text-sm text-slate-500">
          Fill the form to create a new clergy record.
        </p>
      </div>

      <form action={createClergy} className="space-y-5 rounded-2xl border bg-white p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="e.g. Rev. John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Role</label>
            <input
              name="role"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="e.g. Parish Priest"
            />
            {/* If you prefer a select:
            <select name="role" required className="mt-1 w-full rounded-lg border px-3 py-2">
              <option value="">Select role…</option>
              <option>Parish Priest</option>
              <option>Assistant Priest</option>
              <option>Chaplain</option>
              <option>Rector</option>
            </select> */}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Parish</label>
            <input
              name="parish"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="e.g. St. Mary’s Parish"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone (optional)</label>
            <input
              name="phone"
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="+234 801 234 5678"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            name="address"
            required
            className="mt-1 w-full rounded-lg border px-3 py-2"
            placeholder="Parish house address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Extra (optional)</label>
          <textarea
            name="extra"
            rows={4}
            className="mt-1 w-full rounded-lg border px-3 py-2"
            placeholder="Any additional notes or responsibilities"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-xl bg-amber-500 px-4 py-2 text-white hover:bg-amber-600"
          >
            Save
          </button>
          <a
            href="/dashboard/clergy"
            className="rounded-xl border px-4 py-2 hover:bg-slate-50"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
