
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <h1 className="font-sans text-5xl text-center p-10 bg-slate-50 text-slate-600">Uploads de Arquivos</h1>
        {children}
      </section>
    )
  }