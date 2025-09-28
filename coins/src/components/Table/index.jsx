import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Table() {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 10;

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl")
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  // Cálculo da paginação
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);
  const totalPages = Math.ceil(coins.length / coinsPerPage);

  return (
    <section
      className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 py-12"
      id="criptos"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="mb-10 text-2xl font-bold text-gray-900 sm:text-5xl">
          Mercado de Criptomoedas
        </h1>

        <div className="overflow-x-auto rounded-xl shadow-xl bg-white">
          <table className="w-full border-collapse">
            <thead className="bg-gradient-to-r from-[#F4845F] to-[#34434f] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Nº</th>
                <th className="px-6 py-4 text-left font-semibold">Moeda</th>
                <th className="px-6 py-4 text-left font-semibold">Preço</th>
                <th className="px-6 py-4 text-left font-semibold">
                  Market Cap
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  Variação 24h
                </th>
              </tr>
            </thead>
            <tbody>
              {currentCoins.map((coin, index) => (
                <tr
                  key={coin.id}
                  className="hover:bg-indigo-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-700">
                    {indexOfFirstCoin + index + 1}
                  </td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-8 h-8 rounded-full shadow-sm"
                    />
                    <span className="font-medium text-gray-800">
                      {coin.name}{" "}
                      <span className="text-sm text-gray-500 uppercase">
                        ({coin.symbol})
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold">
                    R$ {coin.current_price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    R$ {coin.market_cap.toLocaleString()}
                  </td>
                  <td
                    className={`px-6 py-4 font-bold ${
                      coin.price_change_percentage_24h > 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-gray-700" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === i + 1
                  ? "bg-[#F4845F] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon icon={faArrowRight} className="text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
