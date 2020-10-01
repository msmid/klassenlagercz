import React from "react";
import Footer from "../src/components/Footer";
import Header, { Klassenlager } from "../src/components/Header";
import Team from "../src/components/Team";
import Timeline from "../src/components/Timeline";
import { apolloClient } from "../src/config";
import {
  GET_ACTIVE_KLASSENLAGER,
  GET_TEAM_MEMBERS_WITH_PICTURES,
  GET_ACTIVITIES,
} from "../src/graphql/queries";
import dayjs from "dayjs";

interface HomeProps {
  klassenlagers: Klassenlager[];
}

const Home = ({ klassenlagers }: HomeProps) => {
  return (
    <>
      <Header klassenlager={klassenlagers[0]} />

      <Team />

      <Timeline />

      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  const { data: { klassenlagers } = {} } = await apolloClient.query({
    query: GET_ACTIVE_KLASSENLAGER,
    variables: { year: dayjs().year() },
  });
  console.log(klassenlagers);
  return { props: { klassenlagers } };
}

export default Home;
