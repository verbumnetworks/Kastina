"use client";

import { useState } from "react";

type Props = {
  children?: React.ReactNode;        // optional custom trigger text
  label?: string;                    // fallback trigger text
  title?: string;                    // modal title
  message?: string;                  // modal body
  busyText?: string;                 // while submitting
};

export default function ConfirmDelete({
  children,
  label = "Delete",
  title = "Delete item",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  busyText = "Deleting...",
}: Props) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-red-500 px-3 py-1.5 text-red-600 hover:bg-red-50"
      >
        {children ?? label}
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/40 p-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm text-slate-600">{message}</p>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                disabled={submitting}
                className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50 disabled:opacity-50"
              >
                Cancel
              </button>

              {/* IMPORTANT: this button submits the PARENT <form action=...> */}
              <button
                type="submit"
                onClick={() => setSubmitting(true)}
                className="rounded-lg bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700 disabled:opacity-70"
                disabled={submitting}
              >
                {submitting ? busyText : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
