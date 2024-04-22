import { render, screen } from '@testing-library/react';
import App from '../App';
import NewsProvider from '../context/NewsProvider';

describe('Test component Header', () => {
  test('Verify if component Header is loaded and visible on the screen', () => {
    render(
      <NewsProvider>
        <App />
      </NewsProvider>,
    );
    const title = screen.getByRole('heading', { name: /trybe news/i });
    const logo = screen.getByRole('img', { name: /logo/i });

    expect(logo).toBeVisible();
    expect(title).toBeVisible();
  });
});
