export function formatearMoneda(number) {
    if (isNaN(number)) {
      return 'ERROR';
    }
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
  }
  
  