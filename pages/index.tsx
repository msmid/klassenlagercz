import React from "react";
import Footer from "../src/components/Footer";
import Header, { Klassenlager } from "../src/components/Header";
import Team, { TeamMember } from "../src/components/Team";
import Timeline, { Activity } from "../src/components/Timeline";
import { apolloClient } from "../src/config";
import {
  GET_ACTIVE_KLASSENLAGER,
  GET_TEAM_MEMBERS_WITH_PICTURES,
  GET_ACTIVITIES,
} from "../src/graphql/queries";
import dayjs from "dayjs";

interface HomeProps {
  klassenlagers: Klassenlager[];
  teamMembers: TeamMember[];
  activities: Activity[];
}

const Home = ({ klassenlagers, teamMembers, activities }: HomeProps) => {
  return (
    <>
      <Header klassenlager={klassenlagers[0]} />

      <Team teamMembers={teamMembers} />

      <Timeline activities={activities} />

      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  const { data: { klassenlagers } = {} } = await apolloClient.query({
    query: GET_ACTIVE_KLASSENLAGER,
    variables: { year: dayjs().year() },
  });
  const { data: { teamMembers } = {} } = await apolloClient.query({
    query: GET_TEAM_MEMBERS_WITH_PICTURES,
  });
  const { data: { activities } = {} } = await apolloClient.query({
    query: GET_ACTIVITIES,
  });
  return { props: { klassenlagers, teamMembers, activities } };
}

export default Home;
