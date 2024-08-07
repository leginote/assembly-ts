import { describe, it, expectTypeOf, expect } from 'vitest';
import { translatedVariableDictionary, variable } from './translatedVariableDictionary';
import * as H from 'hotscript';

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
    // Test the type of the entire object
    expectTypeOf(translatedVariableDictionary).toEqualTypeOf<typeof translatedVariableDictionary>();

    // Test the types of individual properties
    expectTypeOf(translatedVariableDictionary.국회의원코드).toEqualTypeOf<'lawmakerCode'>();
    expect(translatedVariableDictionary.국회의원코드).toBe('lawmakerCode');

    expectTypeOf(translatedVariableDictionary.국회의원명).toEqualTypeOf<'lawmakerName'>();
    expect(translatedVariableDictionary.국회의원명).toBe('lawmakerName');

    expectTypeOf(translatedVariableDictionary.국회의원한자명).toEqualTypeOf<'lawmakerChineseName'>();
    expect(translatedVariableDictionary.국회의원한자명).toBe('lawmakerChineseName');

    expectTypeOf(translatedVariableDictionary.국회의원영문명).toEqualTypeOf<'lawmakerEnglishName'>();
    expect(translatedVariableDictionary.국회의원영문명).toBe('lawmakerEnglishName');

    expectTypeOf(translatedVariableDictionary.생일구분코드).toEqualTypeOf<'birthdayDivisionCode'>();
    expect(translatedVariableDictionary.생일구분코드).toBe('birthdayDivisionCode');

    expectTypeOf(translatedVariableDictionary.당선대수).toEqualTypeOf<'electionCongress'>();
    expect(translatedVariableDictionary.당선대수).toBe('electionCongress');

    expectTypeOf(translatedVariableDictionary.위원회심사_처리일).toEqualTypeOf<'committeeReviewProcessDate'>();
    expect(translatedVariableDictionary.위원회심사_처리일).toBe('committeeReviewProcessDate');
  });
});
