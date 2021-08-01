import React, { ComponentType, FC } from "react";
import { Date, Highlighted, Article, Subtitle, Title } from "./style";
import { PostMeta } from "../../types/PostMeta";
import { ArrayDate } from "../../types/ArrayDate";

export interface PostProps extends PostMeta {
  mdx: ComponentType;
}

export const monthNames = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const monthAbbr = Object.entries(monthNames).reduce((acc, [k, v]) => {
  acc[k] = v.substr(0, 3);
  return acc;
}, {});

export const arrayDateToReadable = (
  [year, month, day]: ArrayDate,
  abbr = false
): string => {
  const monthNameMap = abbr ? monthAbbr : monthNames;
  return `${day} ${monthNameMap[month]} ${year}`;
};

export const Post: FC<PostProps> = ({ author, date, mdx: Mdx, title }) => {
  return (
    <Article>
      <div style={{ marginBottom: "32px" }}>
        <Title>{title}</Title>
        <Subtitle>
          by{" "}
          <Highlighted>
            <strong>{author}</strong>
          </Highlighted>{" "}
          at{" "}
          <Date>
            <b>{arrayDateToReadable(date, true)}</b>
          </Date>
        </Subtitle>
      </div>
      <Mdx />
    </Article>
  );
};
