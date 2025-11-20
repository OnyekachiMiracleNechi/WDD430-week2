'use client';

import { useActionState } from 'react';
import { updateInvoice, State } from '@/app/lib/actions';

type CustomerField = {
  id: string;
  name: string;
};

type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};


const initialState: State = {
  message: null,
  errors: {},
};

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState: State = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);

  return (
    <form action={formAction} className="space-y-4">

      {/* Hidden ID field */}
      <input type="hidden" name="id" value={invoice.id} />

      {/* Customer */}
      <div>
        <label htmlFor="customerId">Customer</label>
        <select
          id="customerId"
          name="customerId"
          defaultValue={invoice.customer_id}
          className="border p-2 w-full"
        >
          <option value="">Select a customer</option>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        {state.errors?.customerId && (
          <p className="text-red-500">{state.errors.customerId}</p>
        )}
      </div>

      {/* Amount */}
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          defaultValue={invoice.amount / 100}
          className="border p-2 w-full"
        />
        {state.errors?.amount && (
          <p className="text-red-500">{state.errors.amount}</p>
        )}
      </div>

      {/* Status */}
      <div>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          defaultValue={invoice.status}
          className="border p-2 w-full"
        >
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
        {state.errors?.status && (
          <p className="text-red-500">{state.errors.status}</p>
        )}
      </div>

      {/* Global form message */}
      {state.message && (
        <p className="text-red-500">{state.message}</p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white p-3 rounded"
      >
        Update Invoice
      </button>
    </form>
  );
}
