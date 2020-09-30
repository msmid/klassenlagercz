import { gql } from "@apollo/client";

export const GET_ACTIVITIES = gql`
  query GetActivities {
    activities {
      id
      datetime
      description
      program {
        day
      }
      picture {
        url
        name
      }
    }
  }
`;

export const GET_PROGRAM = gql`
  query GetProgram {
    programs {
      id
      day
    }
  }
`;

export const GET_KLASSENLAGERS = gql`
  query GetKlassenlagers {
    klassenlagers {
      id
      year
      dateFrom
      dateTo
    }
  }
`;

export const GET_ACTIVE_KLASSENLAGER = gql`
  query GetKlassenlagers($year: Int!) {
    klassenlagers(where: { year: $year }) {
      id
      year
      dateFrom
      dateTo
    }
  }
`;

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers {
    teamMembers {
      id
      fullname
      shortcut
    }
  }
`;

export const GET_TEAM_MEMBERS_WITH_PICTURES = gql`
  query GetTeamMembers {
    teamMembers {
      id
      fullname
      shortcut
      order
      picture {
        url
        name
      }
    }
  }
`;
