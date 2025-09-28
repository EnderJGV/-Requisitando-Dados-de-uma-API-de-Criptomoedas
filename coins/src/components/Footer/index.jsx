import React from "react";
export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {" "}
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        {" "}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-y-16 w-full">
          {" "}
          {/* Logo e descrição */}{" "}
          <div className="col-span-5">
            {" "}
            <h2 className="text-3xl font-bold">BitHype - #Links Uteis</h2>{" "}
            <p className="mt-4 text-[#F4845F] text-sm">
              {" "}
              Notícias, análises e dados em tempo real sobre criptomoedas.{" "}
            </p>{" "}
          </div>{" "}
          {/* Links úteis */}{" "}
          <div className="col-span-2 sm:col-span-1">
            {" "}
            <p className="font-semibold">Links Úteis</p>{" "}
            <ul className="mt-4 space-y-2 text-sm">
              {" "}
              <li>
                {" "}
                <a
                  href="https://www.coingecko.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4845F]"
                >
                  {" "}
                  CoinGecko – Preços de Criptomoedas{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://coinmarketcap.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4845F]"
                >
                  {" "}
                  CoinMarketCap – Market Cap Global{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://cryptopanic.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4845F]"
                >
                  {" "}
                  CryptoPanic – Notícias Cripto{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://www.binance.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4845F]"
                >
                  {" "}
                  Binance – Exchange Global{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://academy.binance.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4845F]"
                >
                  {" "}
                  Binance Academy – Aprenda Cripto{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Empresa */}{" "}
          <div className="col-span-2 sm:col-span-1">
            {" "}
            <p className="font-semibold">Sobre</p>{" "}
            <ul className="mt-4 space-y-2 text-sm">
              {" "}
              <li>
                <a href="/sobre" className="hover:text-[#F4845F]">
                  Quem Somos
                </a>
              </li>{" "}
              <li>
                <a href="/contato" className="hover:text-[#F4845F]">
                  Contato
                </a>
              </li>{" "}
              <li>
                <a href="/parcerias" className="hover:text-[#F4845F]">
                  Parcerias
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Legal */}{" "}
          <div className="col-span-2 sm:col-span-1">
            {" "}
            <p className="font-semibold">Legal</p>{" "}
            <ul className="mt-4 space-y-2 text-sm">
              {" "}
              <li>
                <a
                  href="/politica-privacidade"
                  className="hover:text-[#F4845F]"
                >
                  Política de Privacidade
                </a>
              </li>{" "}
              <li>
                <a href="/termos" className="hover:text-[#F4845F]">
                  Termos de Uso
                </a>
              </li>{" "}
              <li>
                <a href="/cookies" className="hover:text-[#F4845F]">
                  Cookies
                </a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Redes sociais */}{" "}
          <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end mt-8">
            {" "}
            <li>
              {" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F4845F]"
              >
                {" "}
                <i className="fab fa-twitter text-xl"></i>{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F4845F]"
              >
                {" "}
                <i className="fab fa-telegram-plane text-xl"></i>{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F4845F]"
              >
                {" "}
                <i className="fab fa-github text-xl"></i>{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        {/* Copy */}{" "}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center sm:flex sm:items-center sm:justify-between">
          {" "}
          <p className="text-xs">
            &copy; {new Date().getFullYear()} CriptoInfo. Todos os direitos
            reservados.
          </p>{" "}
          <div className="mt-4 sm:mt-0 flex gap-4 text-xs">
            {" "}
            <a href="/termos" className="hover:text-[#F4845F]">
              Termos
            </a>{" "}
            <a href="/politica-privacidade" className="hover:text-[#F4845F]">
              Privacidade
            </a>{" "}
            <a href="/cookies" className="hover:text-[#F4845F]">
              Cookies
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
