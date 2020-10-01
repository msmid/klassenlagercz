import React from "react";
import Link from "next/link";
import LOCATION from "../../src/config/location";
import dayjs from "dayjs";

const DATE_FORMAT = "DD. MM.";
export interface Klassenlager {
  id: string;
  year: number;
  dateFrom: string;
  dateTo: string;
}

export interface HeaderProps {
  klassenlager: Klassenlager;
}

function Header({ klassenlager }: HeaderProps) {
  const PAGE = {
    title: "Klassenlager.cz",
  };

  return (
    <header className="header container">
      <h1>
        <Link href={LOCATION.INDEX.href} as={LOCATION.INDEX.as}>
          <a className="text-dark title">
            {LOCATION.INDEX.label} {klassenlager.year}
          </a>
        </Link>
      </h1>
      <h3>
        {dayjs(klassenlager.dateFrom).format(DATE_FORMAT)} -{" "}
        {dayjs(klassenlager.dateTo).format(DATE_FORMAT)}
      </h3>
    </header>
  );
}

export default Header;
