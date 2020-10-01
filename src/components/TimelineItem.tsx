import React from "react";
import dayjs from "dayjs";
import Setting from "../config/settings";

interface Props {
  item: any;
  last: boolean;
}

const TimelineItem: React.FC<Props> = ({ item, last }) => {
  return (
    <div className={`timeline-item ${last && "last"}`}>
      <div className="timeline-item__header mb-2 ml-2">
        {dayjs(item.datetime).format("HH:mm")}
      </div>
      <div className="timeline-item__desc">
        {/* <div dangerouslySetInnerHTML={item.description} /> */}
        <p className="py-2 px-3 mb-0">{item.description}</p>
      </div>
      {item.picture ? (
        <div className="timeline-item__picture mt-2">
          <img src={`${Setting.API_DOMAIN}${item.picture.url}`} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TimelineItem;
