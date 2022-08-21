import { useRouter } from 'next/router';

const Post = () => {
	const router = useRouter();
	const { pid } = router.query;

	return <div>Post ID = {pid}</div>;
};
export default Post;
