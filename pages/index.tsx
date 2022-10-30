import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const transactions = [
  {
    matchup: "Alex Molcan vs. Richard Gasquet",
    data_tennis_1: "2.11",
    data_tennis_2: "2.22",
    bet365_1: "2.33",
    bet365_2: "2.44",
    quantity: "-0.02",
    netAmount: "+0.04",
  },
  {
    matchup: "Andy Murray vs. Gilles Simon",
    data_tennis_1: "2.11",
    data_tennis_2: "2.22",
    bet365_1: "2.33",
    bet365_2: "2.44",
    quantity: "-0.02",
    netAmount: "+0.04",
  },
  {
    matchup: "Arthur Rinderknech vs. Jack Draper",
    data_tennis_1: "2.11",
    data_tennis_2: "2.22",
    bet365_1: "2.33",
    bet365_2: "2.44",
    quantity: "-0.02",
    netAmount: "+0.04",
  },
  {
    matchup: "Alex Molcan vs. Richard Gasquet",
    data_tennis_1: "2.11",
    data_tennis_2: "2.22",
    bet365_1: "2.33",
    bet365_2: "2.44",
    quantity: "-0.02",
    netAmount: "+0.04",
  },
  {
    matchup: "Andy Murray vs. Gilles Simon",
    data_tennis_1: "2.11",
    data_tennis_2: "2.22",
    bet365_1: "2.33",
    bet365_2: "2.44",
    quantity: "-0.02",
    netAmount: "+0.04",
  },
  {
    matchup: "Arthur Rinderknech vs. Jack Draper",
    data_tennis_1: "2.11",
    data_tennis_2: "2.22",
    bet365_1: "2.33",
    bet365_2: "2.44",
    quantity: "-0.02",
    netAmount: "+0.04",
  },
];

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Data Tennis!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          This is the site for finding the most profitable tennis matches to bet
          on.
        </p>

        <div className="px-4 sm:px-6 lg:px-8 lg:pt-24">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">ATP Paris</h1>
              <p className="mt-2 text-sm text-gray-700">Round 1 Matches</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Matchup
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-6 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Data Tennis 1
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-6 pr-20 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Data Tennis 2
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-6 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Bet 365 1
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-6 pr-20 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Bet 365 2
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-6 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          EV 1
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-6 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          EV 2
                        </th>
                        <th
                          scope="col"
                          className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {transactions.map((transaction) => (
                        <tr key={transaction.matchup}>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                            {transaction.matchup}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            {transaction.data_tennis_1}
                          </td>
                          <td className="whitespace-nowrap px-2 pr-20 py-2 text-sm text-gray-900">
                            {transaction.data_tennis_2}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            {transaction.bet365_1}
                          </td>
                          <td className="whitespace-nowrap px-2 pr-20 py-2 text-sm text-gray-900">
                            {transaction.bet365_1}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            {transaction.quantity}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            {transaction.netAmount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
