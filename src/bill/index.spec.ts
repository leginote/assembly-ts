// src/bill/index.spec.ts
import { describe, it, expect } from 'vitest';
import { getBillList } from './index';

describe('bill index.ts', () => {
  it('should export getBillList', () => {
    expect(getBillList).toBeDefined();
  });
});
