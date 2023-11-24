import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import NewsProvider from '../context/NewsProvider';
// import featuredNewsMock from './mocks/apiDataMock';

describe('Test component FeaturedNews', () => {
  test('Verify if component FeaturedNews is loaded and visible on the screen', async () => {
    vi.spyOn(global, 'fetch');

    // (global.fetch as any).mockResolvedValueOnce(
    //   {
    //     json: vi.fn().mockResolvedValue(featuredNewsMock),
    //   },
    // );

    render(
      <NewsProvider>
        <App />
      </NewsProvider>,
    );

    const title = screen.getByText('IBGE realiza mais de 70 atendimentos...');
    const description = screen.getByText('Representantes dos municípios esclarecem dúvidas no estande do IBGE...');
    const image = screen.getByRole('img', { name: /Illustration for IBGE realiza mais de 70 atendimentos/i });
    const latestTag = screen.getByText(/notícia mais recente/i);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
    expect(title).toBeVisible();
    expect(description).toBeVisible();
    expect(image).toBeVisible();
    expect(latestTag).toBeVisible();
  });
});
