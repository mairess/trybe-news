import { render, screen } from '@testing-library/react';
import App from '../App';
import NewsProvider from '../context/NewsProvider';

describe('Test component FilterBar', () => {
  test('Verify if component FilterBar is loaded and visible on the screen', async () => {
    render(
      <NewsProvider>
        <App />
      </NewsProvider>,
    );

    const theLatestsBtn = screen.getByRole('button', { name: /mais recentes/i });
    const theReleasesBtn = screen.getByRole('button', { name: /release/i });
    const theNewsBtn = screen.getByRole('button', { name: /notícias/i });
    const theFavoritsBtn = screen.getByRole('button', { name: /favoritas/i });

    expect(theLatestsBtn).toBeVisible();
    expect(theReleasesBtn).toBeVisible();
    expect(theNewsBtn).toBeVisible();
    expect(theFavoritsBtn).toBeVisible();
  });
});
