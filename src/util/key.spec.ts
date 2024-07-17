import { describe, it, expect, beforeEach } from 'vitest';
import { setApiKey, getApiKey, ApiKeyNotFoundException } from './key';

describe('Key Utility Functions', () => {
  beforeEach(() => {
    // Reset the key before each test
    setApiKey(null as unknown as string);
  });

  it('should set and get the API key correctly', () => {
    const testKey = 'test-api-key';
    setApiKey(testKey);
    expect(getApiKey()).toBe(testKey);
  });

  it('should throw an ApiKeyNotFoundException if the API key is not set', () => {
    expect(() => getApiKey()).toThrow(ApiKeyNotFoundException);
  });

  it('should throw an ApiKeyNotFoundException with the correct message if the API key is not set', () => {
    try {
      getApiKey();
    } catch (e) {
      expect(e).toBeInstanceOf(ApiKeyNotFoundException);
      expect((e as ApiKeyNotFoundException).message).toContain('API key is not set');
    }
  });
});
