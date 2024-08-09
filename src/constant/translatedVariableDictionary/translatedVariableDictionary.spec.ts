import { describe, it, expectTypeOf, expect } from 'vitest';
import * as H from 'hotscript';

import {
  국회의원명,
  국회의원영문명,
  국회의원코드,
  국회의원한자명,
  당선대수,
  생일구분코드,
  위원회심사_처리일,
} from './index';
import { variable } from './variable';

describe('variable function', () => {
  it('should return correct variable name for single argument', () => {
    const result = variable('test');
    expect(result).toBe('test');
  });

  it('should return correct variable name for multiple arguments', () => {
    const result = variable('foo', 'bar', 'baz');
    expect(result).toBe('fooBarBaz');
  });

  it('should handle string arguments correctly', () => {
    const result = variable('Hello', 'World');
    expect(result).toBe('helloWorld');
  });

  it('should return correct type for single argument', () => {
    const result: H.Call<H.Strings.CamelCase, 'test'> = variable('test');
    expect(typeof result).toBe('string');
  });

  it('should return correct type for multiple arguments', () => {
    const result: H.Pipe<
      ['foo', 'bar', 'baz'],
      [H.Tuples.Map<H.Strings.Capitalize>, H.Tuples.Join<''>, H.Strings.Uncapitalize]
    > = variable('foo', 'bar', 'baz');
    expect(typeof result).toBe('string');
  });
});

describe('translatedVariableDictionary', () => {
  it('should have correct types', () => {
    // Test the types of individual properties
    expectTypeOf(국회의원코드).toEqualTypeOf<'lawmakerCode'>();
    expect(국회의원코드).toBe('lawmakerCode');

    expectTypeOf(국회의원명).toEqualTypeOf<'lawmakerName'>();
    expect(국회의원명).toBe('lawmakerName');

    expectTypeOf(국회의원한자명).toEqualTypeOf<'lawmakerChineseName'>();
    expect(국회의원한자명).toBe('lawmakerChineseName');

    expectTypeOf(국회의원영문명).toEqualTypeOf<'lawmakerEnglishName'>();
    expect(국회의원영문명).toBe('lawmakerEnglishName');

    expectTypeOf(생일구분코드).toEqualTypeOf<'birthdayDivisionCode'>();
    expect(생일구분코드).toBe('birthdayDivisionCode');

    expectTypeOf(당선대수).toEqualTypeOf<'electionCongress'>();
    expect(당선대수).toBe('electionCongress');

    expectTypeOf(위원회심사_처리일).toEqualTypeOf<'committeeReviewProcessDate'>();
    expect(위원회심사_처리일).toBe('committeeReviewProcessDate');
  });
});
