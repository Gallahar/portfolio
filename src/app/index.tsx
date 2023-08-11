import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/pages/Main.tsx'
import { IntersectionProvider } from 'src/providers/IntersectionProvider'

export const App = () => {
	return (
		<IntersectionProvider>
			<Header />
			<Main />
			<Footer />
		</IntersectionProvider>
	)
}
