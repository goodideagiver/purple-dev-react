const AboutMe = ({styles}) => {
  return (
		<div className={styles.cell}>
			<h3>About me</h3>
			<p className={styles.cardInnerPadding}>Hello, my name is Karol.</p>
			<p className={styles.cardInnerPadding}>
				In the past I used to create 2D animation and design 2D
				graphics, the skills developped while doing that helped me a lot
				in learning web programming.
			</p>
			<p className={styles.cardInnerPadding}>
				I'm trying to commit daily to my{' '}
				{<a href='https://github.com/goodideagiver'>GitHub</a>} in order
				to receive the best results.
			</p>
		</div>
  );
}

export default AboutMe