import DietologImg from '@/assets/images/project1_preview.png'
import ChatImg from '@/assets/images/Project2_preview.png'

export const projectsList = [
	{
		slides: [DietologImg],
		title: 'Personal Site',
		description:
			'Personalized website for a nutritionist, made with NextJs - fancy design, 3 languages support, custom admin dashboard for easy content modification.',
		previewUrl: 'https://katerina-dietolog.vercel.app/',
		codeUrl: 'https://github.com/Gallahar/dietolog-2.0-client',
	},
	{
		slides: [ChatImg],
		title: 'Online-Chat',
		description:
			'Online chat with authorization, made with ReactJs/SocketIo. You can change the user profile, attach files to the message, put reactions in real time and more',
		previewUrl: 'https://intouch-ruby.vercel.app/',
		codeUrl: 'https://github.com/Gallahar/Chat-front-v.2',
	},
]
