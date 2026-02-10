import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

type AppLayoutProps = {
    children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-gray-900 to-black text-slate-100 font-sans selection:bg-blue-500/30">
            <Header />
            <main className="flex-1 max-w-5xl mx-auto w-full p-4 pb-20">
                {children}
            </main>
            <Footer />
        </div>
    )
}
