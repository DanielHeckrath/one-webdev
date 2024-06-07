import './styles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "What's new in web development",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
