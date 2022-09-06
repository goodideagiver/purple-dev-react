import { ExternalLink } from '../../../UI/ExternalLink/ExternalLink';

type Props = {
	styles: { [key: string]: string };
};

const AboutMe = ({ styles }: Props) => {
	return (
		<div className={styles.cell}>
			<h3>About me</h3>
			<p className={styles.cardInnerPadding}>Hello, my name is Karol.</p>

			<p className={styles.cardInnerPadding}>
				So far I{`'`}ve been coding almost every day for many months already and
				it{`'`}s reflected on my{' '}
				<ExternalLink href='https://github.com/goodideagiver'>
					GitHub
				</ExternalLink>{' '}
				profile.
			</p>
			<p className={styles.cardInnerPadding}>
				In the past I used to create{' '}
				<ExternalLink href='https://www.youtube.com/watch?v=_051iYYVj1Y'>
					2D animation
				</ExternalLink>
				, design 2D graphics and shoot{' '}
				<ExternalLink href='https://www.instagram.com/prplblck/'>
					portrait photography
				</ExternalLink>
				, the skills developped while doing that helped me a lot in learning web
				development.
			</p>
		</div>
	);
};

export default AboutMe;
