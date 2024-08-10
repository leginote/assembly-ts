import * as H from 'hotscript';

export const variable = <Args extends Array<string>>(...args: Args) =>
  args.reduce(
    (prev, cur, idx) =>
      idx === 0
        ? `${cur.charAt(0).toLowerCase()}${cur.slice(1)}`
        : `${prev}${cur.charAt(0).toUpperCase()}${cur.slice(1)}`,
    ''
  ) as H.Pipe<Args, [H.Tuples.Map<H.Strings.Capitalize>, H.Tuples.Join<''>, H.Strings.Uncapitalize]>;
