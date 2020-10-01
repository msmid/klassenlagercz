import React from "react";
import Setting from "../config/settings";

interface Props {
  member: any;
}

const TeamMember: React.FC<Props> = ({ member }) => {
  return (
    <div className="team-member">
      <div
        className="team-member__img"
        style={{
          backgroundImage: `url(${Setting.API_DOMAIN}${member.picture.url})`,
        }}
      ></div>
      <div className="team-member__info mt-2">
        <div className="team-member__info-item name">
          {member.fullname} <span className="muted">{member.shortcut}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
