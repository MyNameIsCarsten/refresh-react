import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

// Everything that was mounted via render() will be unmounted now
afterEach(() => {
    cleanup();
});