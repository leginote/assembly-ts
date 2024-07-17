let key: string | null = null;

export class ApiKeyNotFoundException extends Error {}

export const setApiKey = (newKey: string) => {
  key = newKey;
};

export const getApiKey = () => {
  if (!key) {
    throw new ApiKeyNotFoundException(
      `API key is not set.
      please call setApiKey(keys)
      if you have not api key, you can issue api key at https://open.assembly.go.kr/portal/openapi/openApiActKeyPage.do?tabIdx=1`
    );
  }

  return key;
};
