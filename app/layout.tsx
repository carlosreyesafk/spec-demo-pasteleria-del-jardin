export const metadata = {
  title: 'Pastelería del Jardín | Repostería artesanal desde 1989',
  description: 'Pastelería del Jardín: repostería artesanal desde 1989, con dos sucursales en Santo Domingo. Haz tu pedido por WhatsApp con un clic.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
