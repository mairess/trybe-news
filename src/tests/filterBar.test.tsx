import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const theNewsBtn = screen.getAllByRole('button', { name: /notícias/i });
    const theFavoritsBtn = screen.getByRole('button', { name: /favoritas/i });

    expect(theLatestsBtn).toBeVisible();
    expect(theReleasesBtn).toBeVisible();
    expect(theNewsBtn[0]).toBeVisible();
    expect(theFavoritsBtn).toBeVisible();

    await userEvent.click(theLatestsBtn);
    await userEvent.click(theReleasesBtn);
    await userEvent.click(theNewsBtn[0]);
    await userEvent.click(theFavoritsBtn);
  });
});
