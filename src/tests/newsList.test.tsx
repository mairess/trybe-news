import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import NewsProvider from '../context/NewsProvider';

describe('Test component newsList', () => {
  test('Verify if component newsList is loaded and visible on the screen', async () => {
    render(
      <NewsProvider>
        <App />
      </NewsProvider>,
    );
    const loadMoreBtn = screen.getByRole('button', { name: /mais notícias/i });
    const cardsBeforeClick = screen.getAllByTestId('timestamp');

    expect(loadMoreBtn).toBeVisible();
    expect(cardsBeforeClick).toHaveLength(10);

    await userEvent.click(loadMoreBtn);

    // await screen.findByRole('button', { name: /mais notícias/i });
    // const cardsAfterClick = screen.getAllByTestId('timestamp');

    // expect(cardsAfterClick.length).toBeGreaterThan(cardsBeforeClick.length);
    // expect(cardsBeforeClick.length).toBe(220);
  });
});
