import { describe, it, expectTypeOf, expect } from 'vitest';
import {
  firstLetterLowerCase,
  FirstLetterLowerCase,
  MergeString,
  translatedVariableDictionary,
  variable,
} from './translatedVariableDictionary';

describe('MergeString', () => {
  it('should merge an array of strings into a single string', () => {
    // Test with a single string
    expectTypeOf<MergeString<['hello']>>().toEqualTypeOf<'hello'>();

    // Test with two strings
    expectTypeOf<MergeString<['hello', 'world']>>().toEqualTypeOf<'helloworld'>();

    // Test with multiple strings
    expectTypeOf<MergeString<['hello', 'world', '123']>>().toEqualTypeOf<'helloworld123'>();

    // Test with an empty array (should never happen)
    expectTypeOf<MergeString<[]>>().toEqualTypeOf<never>();
  });
});

describe('FirstLetterLowerCase', () => {
  it('should convert the first letter of a string to lowercase', () => {
    // Test with an uppercase string
    expectTypeOf<FirstLetterLowerCase<'HELLO'>>().toEqualTypeOf<'hELLO'>();

    // Test with a mixed-case string
    expectTypeOf<FirstLetterLowerCase<'HelloWorld'>>().toEqualTypeOf<'helloWorld'>();

    // Test with a single-letter string
    expectTypeOf<FirstLetterLowerCase<'A'>>().toEqualTypeOf<'a'>();

    // Test with an empty string (should return the same string)
    expectTypeOf<FirstLetterLowerCase<''>>().toEqualTypeOf<''>();
  });
});

describe('firstLetterLowerCase', () => {
  it('should convert the first letter of a string to lowercase', () => {
    // Test with an uppercase string
    expect(firstLetterLowerCase('HELLO')).toBe('hELLO');

    // Test with a mixed-case string
    expect(firstLetterLowerCase('HelloWorld')).toBe('helloWorld');

    // Test with a single-letter string
    expect(firstLetterLowerCase('A')).toBe('a');

    // Test with an empty string
    expect(firstLetterLowerCase('')).toBe('');
  });
});

describe('variable', () => {
  it('should merge and format strings correctly', () => {
    // Test with a single string
    expect(variable`hello`).toBe('hello');

    // Test with two strings
    expect(variable`hello${'world'}`).toBe('helloworld');

    // Test with multiple strings and formatting
    expect(variable`hello${'World'}${'123'}`).toBe('helloWorld123');

    // Test with an empty template string
    expect(variable``).toBe('');

    // Test with strings that should have their first letter lowercased
    expect(variable`Hello${'World'}`).toBe('helloWorld');
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
  });
});
