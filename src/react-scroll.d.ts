declare module 'react-scroll' {
    export const Link: React.ComponentType<{
        to: string;
        smooth?: boolean;
        duration?: number;
        offset?: number;
        spy?: boolean;
        activeClass?: string;
        className?: string;
        children?: React.ReactNode;
    }>;

    export const Element: React.ComponentType<{ name: string; className?: string; children?: React.ReactNode }>;

    export function animateScroll(scrollTo: number | HTMLElement, options?: any): void;
}
