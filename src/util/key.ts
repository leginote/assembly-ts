let key: string | null = null;

export class ApiKeyNotFoundException extends Error {}

/**
 * @description API key를 설정합니다.
 * @param newKey 설정할 API key
 */
export const setApiKey = (newKey: string) => {
  key = newKey;
};

/**
 * @throws { ApiKeyNotFoundException } API key가 설정되지 않았을 경우 발생합니다.
 * @returns { string } 설정된 API key를 반환합니다.
 */
export const getApiKey = (): string => {
  if (!key) {
    throw new ApiKeyNotFoundException(
      `API key is not set.
      please call setApiKey(keys)
      if you have not api key, you can issue api key at https://open.assembly.go.kr/portal/openapi/openApiActKeyPage.do?tabIdx=1`
    );
  }

  return key;
};
