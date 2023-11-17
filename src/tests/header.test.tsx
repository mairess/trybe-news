import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testa o componente Header', () => {
  test('Verifica se o componente Header é carregado na tela', () => {
    render(<App />);
    const title = screen.getByRole('heading', { name: /trybe news/i });
    const logo = screen.getByRole('img', { name: /logo/i });

    expect(logo).toBeVisible();
    expect(title).toBeVisible();
  });
});
