import {a, b} from '.';

test('a', () => {
  expect(a()).toMatchInlineSnapshot(`"a"`)
})

test('b', () => {
  expect(b()).toMatchInlineSnapshot(`"b"`)
})
