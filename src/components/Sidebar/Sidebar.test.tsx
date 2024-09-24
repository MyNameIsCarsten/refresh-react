import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe('Sidebar', () => {
    it('should show the ul elements, when expanded is true', () => {
        // Mock the setExpaned function
        const setExpandedMock = vi.fn();

        // Render the Sidebar component with expanded set to true
        render(<Sidebar expanded={true} setExpanded={setExpandedMock}>
            <li>Menu Item</li>
        </Sidebar>);

        // Check that the ul is visible (not hidden)
        const ulElement = screen.getByRole('list');
        expect(ulElement).toBeVisible(); // Ensure it's visible
    });

    it('should hide the ul element when expanded is false', () => {
        // Mock the setExpanded function
        const setExpandedMock = vi.fn();

        // Render the Sidebar component with expanded set to false
        render(<Sidebar expanded={false} setExpanded={setExpandedMock}>
            <li>Menu Item</li>
        </Sidebar>);

        // Check that the ul is hidden
        const ulElement = screen.getByRole('list');
        expect(ulElement).toHaveClass('hidden'); // Ensure it's hidden
    });

    it('should toggle the expanded state when the button is clicked', async () => {
        const user = userEvent.setup();

        // Initially render the component with expanded set to true
        const setExpandedMock = vi.fn();
        const { rerender } = render(
            <Sidebar expanded={true} setExpanded={setExpandedMock}>
                <li>Menu Item</li>
            </Sidebar>
        );

        // Simulate button click
        const toggleButton = screen.getByTestId('sidebar-toggle');
        await user.click(toggleButton);

        // Check that setExpanded was called with the correct argument (false)
        expect(setExpandedMock).toHaveBeenCalledWith(false);

        // Now we know that expanded was changed to false (via setExpanded), so we can rerender the component with the expanded prop
        // changed to false
        rerender(
            <Sidebar expanded={false} setExpanded={setExpandedMock}>
                <li>Menu Item</li>
            </Sidebar>
        );

        // Assert that the ul element has the class 'hidden'
        const ulElements = screen.getAllByRole('list');
        for (const ulElement of ulElements) {
            expect(ulElement).toHaveClass('hidden');
        }
    });
});
