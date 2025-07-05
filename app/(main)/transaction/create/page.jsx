import { getUserAccounts } from '@/actions/dashboard';
import { defaultCategories } from '@/data/categories';
import { getTransaction } from '@/actions/transaction';
import { AddTransactionForm } from '../_components/transaction-form';

export default async function AddTransactionPage({ searchParams }) {
  // console.log("searchParams:", searchParams);
  const accounts = await getUserAccounts();
  const editId = searchParams?.edit;

  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
    // console.log("initialData:", initialData);
  }

  // let fixedInitialData = null;

  // if (initialData) {
  //   fixedInitialData = {
  //     ...initialData,
  //     category:
  //       defaultCategories.find(
  //         (cat) => cat.name === initialData.category
  //       )?.id || "",
  //   };
  // }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        {/* <h1 className="text-5xl gradient-title ">Add Transaction</h1> */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
          {initialData ? 'Edit Transaction' : 'Add Transaction'}
        </h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
        // initialData={fixedInitialData}
      />
    </div>
  );
}
