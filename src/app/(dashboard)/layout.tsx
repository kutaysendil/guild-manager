export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
       <main className="pt-16">{children}</main>
    </div>
  )
}