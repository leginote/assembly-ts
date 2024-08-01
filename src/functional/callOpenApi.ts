import { ApiCommand, OpenApiCode, OpenApiResponseKind, PaginationType } from '../types/callOpenApi';
import { getApiKey } from '../';

const baseURL = 'https://open.assembly.go.kr';

type Response<K extends string, V extends object> = {
  [k in K]: [
    {
      head: [
        {
          list_total_count: number;
        },
        {
          RESULT: { CODE: OpenApiCode; MESSAGE: (typeof OpenApiResponseKind)[OpenApiCode] };
        },
      ];
    },
    { row: V[] },
  ];
};

export class OpenApiResponseError extends Error {
  constructor(public readonly code: OpenApiCode) {
    super(OpenApiResponseKind[code]);
    this.code = code;
  }
}

export const callOpenApi = <Command extends ApiCommand, Row extends object>(
  command: Command,
  pagination: PaginationType,
  args: Record<string, string | undefined>
) => {
  const key = getApiKey();

  const query = new URLSearchParams();
  query.append('key', key);
  query.append('pIndex', pagination.page.toString());
  query.append('pSize', pagination.take.toString());

  Object.entries(args).forEach(([key, value]) => {
    if (!value) {
      return;
    }

    query.append(key, value);
  });

  return fetch(`${baseURL}/portal/openapi/${command}?type=json&${query.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((v) => v.json() as Promise<Response<Command, Row>>)
    .then((v) => {
      if (v[command][0].head[1].RESULT.CODE === 'INFO-000') {
        return v;
      }

      throw new OpenApiResponseError(v[command][0].head[1].RESULT.CODE);
    });
};
