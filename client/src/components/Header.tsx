import React from "react";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import LOCATION from "../../src/config/location";
import { GET_ACTIVE_KLASSENLAGER } from "../../src/graphql/queries";
import dayjs from "dayjs";
import { Spinner } from "react-bootstrap";

const DATE_FORMAT = "DD. MM.";

interface Props {}

const Header: React.FC<Props> = () => {
  const { loading, error, data } = useQuery(GET_ACTIVE_KLASSENLAGER, {
    variables: { year: dayjs().year() },
  });

  const PAGE = {
    title: "Klassenlager.cz",
  };

  return (
    <header className="header container">
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h1>
            <Link href={LOCATION.INDEX.href} as={LOCATION.INDEX.as}>
              <a className="text-dark title">
                {LOCATION.INDEX.label} {data?.klassenlagers[0].year}
              </a>
            </Link>
          </h1>
          <h3>
            {dayjs(data?.klassenlagers[0].dateFrom).format(DATE_FORMAT)} -{" "}
            {dayjs(data?.klassenlagers[0].dateTo).format(DATE_FORMAT)}
          </h3>
        </>
      )}
    </header>
  );
};

export default Header;
