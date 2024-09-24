import { render, screen } from '@testing-library/react';
import App from './App';
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe('App', () => {
    it('should render the App component', () => {
        const result = render(<App />);
        const app = result.getByTestId('App');
        expect(app).toBeInTheDocument();
    });

    it('should render the App with the sidebar expanded initially', () => {
        render(<App />);

        const sidebar = screen.getByTestId('sidebar-nav');
        expect(sidebar).toBeVisible();

        // Check that the sidebar is initially expanded (using the width class or another indicator)
        const mainContent = screen.getByRole('main');
        expect(mainContent).toHaveClass('ml-[288px]');  // Ensure main content is shifted by sidebar expansion
    });

    it('should collapse the sidebar when the toggle button is clicked', async () => {
        const user = userEvent.setup();
        render(<App />);

        const toggleButton = screen.getByTestId('sidebar-toggle');  // Assuming you have this testId in the toggle button
        await user.click(toggleButton);

        // Ensure that the main content is no longer shifted by the expanded sidebar
        const mainContent = screen.getByRole('main');
        expect(mainContent).not.toHaveClass('ml-[288px]');
    });

    it('should change the route when a SidebarItem is clicked', async () => {
        const user = userEvent.setup();
        const result = render(<App />);

        const sidebarItems = await result.findAllByTestId('sidebar-item');

        for (const item of sidebarItems) {
            const link = item.querySelector('a');
            if (link) {
                await user.click(link);
                const route = '/' + link.innerHTML.toLowerCase().replace(/\s+/g, '-');
                expect(window.location.pathname).toBe(route);
            }
        }
    });
});
