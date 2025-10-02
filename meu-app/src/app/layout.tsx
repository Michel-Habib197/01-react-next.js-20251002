import "./globals.css"
export default function RootLayout({ children }: {
  children:
  React.ReactNode
}) {
  // Forma apres comp
  return (
    <html lang="pt-br">
      <body>
        {children}
        {/* Tudo que implementar na aplicação */}
      </body>
    </html>
  )
}