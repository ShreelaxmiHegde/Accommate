import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Footer from "../../src/components/layouts/Footer";

describe('Navbar', () => {
    it('should display logout button if logged in', () => {
        render(<Footer />);
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    })
})