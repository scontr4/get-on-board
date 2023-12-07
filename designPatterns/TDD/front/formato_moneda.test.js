import { formatearMoneda } from "./formato_moneda";

describe('formatearMoneda función', () => {
  test('Debe formatear numero a moneda', () => {
    expect(formatearMoneda(1000)).toBe('$1,000.00');
    expect(formatearMoneda(123456.78)).toBe('$123,456.78');
  });

  test('devuelve ERROR para una non-numeric input', () => {
    expect(formatearMoneda('abc')).toBe('ERROR');
    expect(formatearMoneda('123')).toBe('ERROR');
    expect(formatearMoneda(null)).toBe('ERROR');
    expect(formatearMoneda(undefined)).toBe('ERROR');
    expect(formatearMoneda(NaN)).toBe('ERROR');
  });
});
