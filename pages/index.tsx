import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const matches = [
  {
    matchup: "Alex Molcan vs. Richard Gasquet",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 2.37,
    bet365_2: 1.57,
    EV_1: 0.05,
    EV_2: 0.05,
  },
  {
    matchup: "Andy Murray vs. Gilles Simon",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 1.25,
    bet365_2: 4.0,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Arthur Rinderknech vs. Jack Draper",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 2.37,
    bet365_2: 1.57,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Aslan Karatsev vs. Yoshihito Nishioka",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 2.75,
    bet365_2: 1.44,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Botic Van De Zandschulp vs. Gilles Simon",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 2.3,
    bet365_2: 1.61,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Daniel Evans vs. Brandon Nakashima",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 1.9,
    bet365_2: 1.9,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Denis Shapovalov vs. Francisco Cerundolo",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 1.28,
    bet365_2: 3.75,
    EV_1: -0.02,
    EV_2: +0.04,
  },
  {
    matchup: "Diego Schwartzman vs. Stan Wawrinka",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 2.5,
    bet365_2: 1.53,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Holger Vitus Nodskov Rune vs. Stan Wawrinka",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 1.5,
    bet365_2: 2.65,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Hubert Hurkacz vs. Adrian Mannarino",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 1.25,
    bet365_2: 4.0,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Marin Cilic vs. Lorenzo Musetti",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 1.57,
    bet365_2: 2.37,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Miomir Kecmanovic vs. Cameron Norrie",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 2.3,
    bet365_2: 1.61,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Pablo Carreno-Busta vs. Albert Ramos-Vinolas",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 1.25,
    bet365_2: 4.0,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Roberto Bautista-Agut vs. Tommy Paul",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 1.72,
    bet365_2: 2.1,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Sebastian Baez vs. Karen Khachanov",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 5.0,
    bet365_2: 1.16,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Sebastian Korda vs. Alex De Minaur",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 1.8,
    bet365_2: 2.0,
    EV_1: -0.02,
    EV_2: 0.04,
  },
  {
    matchup: "Taylor Fritz vs. Alejandro Davidovich Fokina",
    data_tennis_1: 2.11,
    data_tennis_2: 2.22,
    bet365_1: 1.28,
    bet365_2: 3.75,
    EV_1: -0.02,
    EV_2: 0.04,
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
                          <td className="whitespace-nowrap px-2 pr-20 py-2 text-sm text-gray-900">
                            {match.bet365_2}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            {match.EV_1}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                            {match.EV_2}
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
