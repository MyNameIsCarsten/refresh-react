import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";
import H2Element from "../components/H2Element.tsx";

interface Props {}

function GettingStartedPage({}: Props) {
    return (
        <div>
            <H1Element text={"Interaction Testing"} id="" />
            <p>You can simulate user interaction via the <span className={"code-p"}>user-event</span> library from within the <span
                className={"code-p"}>React Testing Library</span>.</p>
            <p>First, create a new instance form <span
                className={"code-p"}>userEvent.setup()</span>.</p>
            <p>Next <span
                className={"code-p"}>render</span> your component and query all necessary elements from it.</p>
            <p>Finally, call the <span
                className={"code-p"}>click</span>-method of the <span
                className={"code-p"}>user</span>-instance with the element that should be clicked as an input and check the results.</p>

            <SyntaxHighlighter
                codeString={`import { render, screen } from '@testing-library/react';
import App from './App';
import {expect} from "vitest";
import {userEvent} from "@testing-library/user-event";

describe('App', () => {
    ...

    it('should change the route, when a SidebarItem is clicked', async () => {
        // Arrange
        const user = userEvent.setup();
        const result = render(<App />)
        const sidebarItem = result.getByText('Getting Started');
        // Act
        await user.click(sidebarItem);
        // Assert
        expect(window.location.pathname).toBe('/getting-started');
    });
});`}
            />
            <H2Element text={"Rerender"} id={"rerender"}></H2Element>
            <p><span
                className={"code-p"}>render()</span> returns an object, from which we can destructure the <span
                className={"code-p"}>rerender()</span>-method.</p>
            <SyntaxHighlighter codeString={`const { rerender } = render(...)`} />
            <p>The difference is, that <span
                className={"code-p"}>rerender()</span> updates your existing component, while a second call to <span
                className={"code-p"}>render()</span> would add the same component again to the DOM.</p>
            <p>This is usefully, whenever we want to check the component after we have performed a user interaction, which will lead to a new prop value being supplied to our component (like a state change):</p>
            <SyntaxHighlighter
                codeString={`it('should toggle the expanded state when the button is clicked', async () => {
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
    });`}
            />
        </div>
    );
}

export default GettingStartedPage;
