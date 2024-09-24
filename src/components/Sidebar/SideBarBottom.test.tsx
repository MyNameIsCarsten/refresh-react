import { render } from '@testing-library/react';
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";
import SideBarBottom from "./SideBarBottom.tsx";

describe('SideBarBottom', () => {
    it('should render the SideBarBottom component', () => {
        const result = render(<SideBarBottom />);
        const app = result.getByTestId('side-bar-bottom');
        expect(app).toBeInTheDocument();
    });

    it('should render the link with the correct href attribute', async () => {
        const result = render(<SideBarBottom />);
        const sidebarLink = await result.findByRole('link');

        // Check if the link has the correct href attribute
        expect(sidebarLink).toHaveAttribute('href', 'https://github.com/MyNameIsCarsten');

        // Simulate user clicking on the link (though jsdom won't navigate)
        const user = userEvent.setup();
        await user.click(sidebarLink);

        // Verify the link click (no actual navigation happens)
        expect(sidebarLink.getAttribute('href')).toBe('https://github.com/MyNameIsCarsten');
    });
});
