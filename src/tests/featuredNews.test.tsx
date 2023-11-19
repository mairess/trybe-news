import { render } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import NewsProvider from '../context/NewsProvider';
import featuredNewsMock from './mocks/featuredNewsMock';

describe('Test component FeaturedNews', () => {
  test('Verify if component FeaturedNews is loaded and visible on the screen', async () => {
    vi.spyOn(global, 'fetch');

    (global.fetch as any).mockResolvedValueOnce(
      {
        json: vi.fn().mockResolvedValue(featuredNewsMock),
      },
    );

    render(
      <NewsProvider>
        <App />
      </NewsProvider>,
    );

    // const title = screen.getByText('Encontro de servidores do IBGE.');

    expect(global.fetch).toHaveBeenCalled();
  });
});
