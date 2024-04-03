import { WeatherDataContextProvider } from '@/contexts/WeatherDataContext'
import styles from '../styles/layout/layout.module.css'
import Scrollable from '../styles/scrollable.module.css'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{width:'100%'}}>
      <body className={`${styles.body} ${Scrollable.scrollable}`}>
        <header className={styles.layoutHeader}>
          <h1>Weather App</h1>
        </header>
        <WeatherDataContextProvider>
          <main className={styles.main}>
            {children}
          </main>
        </WeatherDataContextProvider>
      </body>
    </html>
  )
}
