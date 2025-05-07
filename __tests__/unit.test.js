// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber Unit Tests

//2 True Unit tests
test('matches 123-456-7890 as a valid phone number', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('matches (123)-456-7890 as a valid phone number', () => {
  expect(isPhoneNumber("(123)-456-7890")).toBe(true);
});

//2 False Unit tests

test('recognizes incorrect number of integers as a non-valid phone number', () => {
  // TODO
  expect(isPhoneNumber("1")).toBe(false);
});

test('recognizes an empty string as a non-valid phone number', () => {
  // TODO
  expect(isPhoneNumber("")).toBe(false);
});



//isEmail Unit Tests

//2 True Unit tests
test('matches standard email form as a valid email', () => {
  // TODO
  expect(isEmail("fakeEmail@gmail.com")).toBe(true);
});

test('matches standard email form with a number as a valid email', () => {
  // TODO
  expect(isEmail("fakeEmail1@gmail.com")).toBe(true);
});

//2 False Unit Tests
test('recognizes email without a "." as a non-valid email', () => {
  // TODO
  expect(isEmail("fakeEmail@gmail")).toBe(false);
});

test('recognizes email without a "@" as a non-valid email', () => {
  // TODO
  expect(isEmail("fakeEmailgmail.com")).toBe(false);
});

//isStrongPassword Unit tests

//2 True Unit Tests
test('recognizes password between 4 and 15 characters as strong password', () => {
  expect(isStrongPassword("password")).toBe(true);
});

test('recognizes password with numbers as strong password', () => {
  expect(isStrongPassword("password123")).toBe(true);
});

//2 False Unit Tests

test('recognizes password that starts with non-letter character as not a strong password', () => {
  expect(isStrongPassword("1password")).toBe(false);
});

test('recognizes password that is less than 4 characters as not a strong password', () => {
  expect(isStrongPassword("hi")).toBe(false);
});


//isDate Unit Tests

//2 True Unit Tests
test('recognizes standard date format as a date', () => {
  expect(isDate("03/07/2005")).toBe(true);
});

test('recognizes standard date format where XX is 1 character as a date', () => {
  expect(isDate("3/7/2005")).toBe(true);
});

//2 False Unit Tests
test('recognizes date format where XX is more than 2 characters as not a date', () => {
  expect(isDate("030/007/2005")).toBe(false);
});

test('recognizes date format where YYYY is not 4 characters as not a date', () => {
  expect(isDate("3/7/200500000")).toBe(false);
});

//isHexColor Unit Tests

//2 True Unit Tests
test('recognizes standard hex format with 3 characters as a valid hex color', () => {
  expect(isHexColor("#a10")).toBe(true);
});

test('recognizes standard hex format with 6 characters as a valid hex color', () => {
  expect(isHexColor("#a10f00")).toBe(true);
});

//2 False Unit Tests
test('recognizes hex format with less than 3 characters as a non-valid hex color', () => {
  expect(isHexColor("#a")).toBe(false);
});

test('recognizes hex format with more than 6 characters as a non-valid hex color', () => {
  expect(isHexColor("#aaaaaaaaaaaa")).toBe(false);
});