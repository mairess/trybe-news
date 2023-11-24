import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';
import NewsProvider from '../context/NewsProvider';
import featuredNewsMock from './mocks/apiDataMock';

const URL = 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38423-ibge-realiza-mais-de-70-atendimentos-no-primeiro-dia-da-caravana-federativa-no-maranhao.html';

const BASE_API = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

describe('Test component FeaturedNews', () => {
  test('Verify if component FeaturedNews is loaded and visible on the screen', async () => {
    vi.spyOn(global, 'fetch');
    window.open = vi.fn();

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
    const favoriteBtn = screen.getAllByRole('button', { name: /favorite button/i });

    const readMoreBtn = screen.getAllByRole('button', { name: /Leia a notícia aqui/i });
    const timestamp = screen.getAllByTestId('timestamp');

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(BASE_API);
    expect(title).toBeVisible();
    expect(description).toBeVisible();
    expect(image).toBeVisible();
    expect(latestTag).toBeVisible();
    expect(favoriteBtn[0]).toBeVisible();
    expect(readMoreBtn[0]).toBeVisible();
    expect(timestamp[0]).toBeVisible();

    await userEvent.click(favoriteBtn[0]);
    await userEvent.click(readMoreBtn[0]);

    const storedFavorites = localStorage.getItem('favorites');
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    expect(parsedFavorites[0]).toEqual(featuredNewsMock[0]);

    await userEvent.click(favoriteBtn[0]);

    const emptyStoredFavorites = localStorage.getItem('favorites');
    const emptyParsedFavorites = emptyStoredFavorites ? JSON.parse(emptyStoredFavorites) : [];
    expect(emptyParsedFavorites).toEqual([]);

    expect(window.open).toHaveBeenCalledWith(URL, '_blank');
  });
});
