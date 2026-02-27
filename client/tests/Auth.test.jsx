import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Navbar from '../src/components/layouts/Navbar';
import { AuthProvider } from '../src/context/AuthContext';
import { FlashProvider } from '../src/context/FlashContext';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
    it('should display login and signup buttons if not logged in', () => {
        render(
            <AuthProvider>
                <FlashProvider>
                    <BrowserRouter>
                        <Navbar />
                    </BrowserRouter>
                </FlashProvider>
            </AuthProvider>
        );
        expect(screen.getByRole('button', {name:/Log In/i}))
        expect(screen.getByRole('button', {name:/Sign Up/i}))
    });

    it('should display logout buttons if logged in', () => {
        render(
            <AuthProvider initialUser={"demoUser"}>
                <FlashProvider>
                    <BrowserRouter>
                        <Navbar />
                    </BrowserRouter>
                </FlashProvider>
            </AuthProvider>
        );
        expect(screen.getByRole('button', {name:/Logout/i}));
    });
})