import type { StyledHeading as StyledHeadingValue } from "../sanity/types";

export function StyledHeadingWords({
  value,
  wordClassName,
}: {
  value?: StyledHeadingValue;
  wordClassName?: string;
}) {
  const classes = (italic: boolean) =>
    [wordClassName, italic && "italic"].filter(Boolean).join(" ") || undefined;

  return (
    <>
      {value?.italic && <span className={classes(true)}>{value.italic} </span>}
      {value?.regular && <span className={classes(false)}>{value.regular} </span>}
    </>
  );
}

export const headingText = (value?: StyledHeadingValue) =>
  [value?.italic, value?.regular].filter(Boolean).join(" ");
