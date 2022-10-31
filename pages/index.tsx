import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Popup from "../components/info";

const matches = [
  {
    bet365_1: 2.62,
    bet365_2: 1.5,
    data_tennis_1: 2.02,
    data_tennis_2: 1.98,
    EV_1: "0.30",
    EV_2: "-0.24",
    matchup: "Corentin Moutet vs. Borna Coric",
    Pinnacle_1: 2.64,
    Pinnacle_2: 1.5,
    Pinnacle_EV_1: "0.31",
    Pinnacle_EV_2: "-0.24",
  },
  {
    bet365_1: 1.9,
    bet365_2: 1.9,
    data_tennis_1: 2.01,
    data_tennis_2: 1.99,
    EV_1: "-0.05",
    EV_2: "-0.05",
    matchup: "Daniel Evans vs. Brandon Nakashima",
    Pinnacle_1: 1.925,
    Pinnacle_2: 1.943,
    Pinnacle_EV_1: "-0.04",
    Pinnacle_EV_2: "-0.02",
  },
  {
    bet365_1: 2.37,
    bet365_2: 1.57,
    data_tennis_1: 2.05,
    data_tennis_2: 1.95,
    EV_1: "0.16",
    EV_2: "-0.19",
    matchup: "Arthur Rinderknech vs. Jack Draper",
    Pinnacle_1: 2.36,
    Pinnacle_2: 1.636,
    Pinnacle_EV_1: "0.15",
    Pinnacle_EV_2: "-0.16",
  },
  {
    bet365_1: 1.25,
    bet365_2: 4,
    data_tennis_1: 2.05,
    data_tennis_2: 1.95,
    EV_1: "-0.39",
    EV_2: "1.05",
    matchup: "Pablo Carreno-Busta vs. Albert Ramos-Vinolas",
    Pinnacle_1: 1.241,
    Pinnacle_2: 4.38,
    Pinnacle_EV_1: "-0.39",
    Pinnacle_EV_2: "1.25",
  },
  {
    bet365_1: 1.25,
    bet365_2: 4,
    data_tennis_1: 1.82,
    data_tennis_2: 2.22,
    EV_1: "-0.31",
    EV_2: "0.80",
    matchup: "Hubert Hurkacz vs. Adrian Mannarino",
    Pinnacle_1: 1.268,
    Pinnacle_2: 4.08,
    Pinnacle_EV_1: "-0.30",
    Pinnacle_EV_2: "0.84",
  },
  {
    bet365_1: 1.66,
    bet365_2: 2.2,
    data_tennis_1: 2.07,
    data_tennis_2: 1.93,
    EV_1: "-0.20",
    EV_2: "0.14",
    matchup: "Roberto Bautista-Agut vs. Tommy Paul",
    Pinnacle_1: 1.657,
    Pinnacle_2: 2.32,
    Pinnacle_EV_1: "-0.20",
    Pinnacle_EV_2: "0.20",
  },
  {
    bet365_1: 1.28,
    bet365_2: 3.75,
    data_tennis_1: 1.92,
    data_tennis_2: 2.09,
    EV_1: "-0.33",
    EV_2: "0.79",
    matchup: "Denis Shapovalov vs. Francisco Cerundolo",
    Pinnacle_1: 1.273,
    Pinnacle_2: 4.02,
    Pinnacle_EV_1: "-0.34",
    Pinnacle_EV_2: "0.92",
  },
  {
    bet365_1: 1.53,
    bet365_2: 2.5,
    data_tennis_1: 1.94,
    data_tennis_2: 2.07,
    EV_1: "-0.21",
    EV_2: "0.21",
    matchup: "Holger Rune vs. Stan Wawrinka",
    Pinnacle_1: 1.584,
    Pinnacle_2: 2.49,
    Pinnacle_EV_1: "-0.18",
    Pinnacle_EV_2: "0.20",
  },
];

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tennis Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="block lg:flex text-6xl font-bold">
          Welcome to <p className="text-blue-600 ml-4"> Data Tennis!</p>
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
                          className="whitespace-nowrap px-6 pr-10 py-3.5 text-left text-sm font-semibold text-gray-900"
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
                          className="whitespace-nowrap px-6 pr-20 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          EV 2
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-6 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Pinnacle 1
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-6 pr-10 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Pinnacle 2
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
                      {matches.map((match) => (
                        <tr key={match.matchup}>
                          <td className="whitespace-nowrap text-left py-2 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                            {match.matchup}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            {match.data_tennis_1}
                          </td>
                          <td className="whitespace-nowrap px-2 pr-20 py-2 text-sm text-gray-900">
                            {match.data_tennis_2}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            {match.bet365_1}
                          </td>
                          <td className="whitespace-nowrap px-2 pr-10 py-2 text-sm text-gray-900">
                            {match.bet365_2}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-600">
                            {match.EV_1}
                          </td>
                          <td className="whitespace-nowrap px-6 pr-20 py-2 text-sm text-gray-600">
                            {match.EV_2}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            {match.Pinnacle_1}
                          </td>
                          <td className="whitespace-nowrap px-2 pr-10 py-2 text-sm text-gray-900">
                            {match.Pinnacle_2}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-600">
                            {match.Pinnacle_EV_1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 text-sm text-gray-600">
                            {match.Pinnacle_EV_2}
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

      <footer className="flex h-24 w-full items-center justify-center border-t mt-24">
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
