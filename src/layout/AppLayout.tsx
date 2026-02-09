type AppLayoutProps = {
    children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-sky-50 text-slate-800">
            <main className="max-w-4xl mx-auto p-4">
                {children}
            </main>
        </div>
    )
}
