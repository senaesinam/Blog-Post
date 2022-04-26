import React from 'react';
import { useRouter } from 'next/router';

const PostDetail = () => {
    const router = useRouter();
    const {postId} = router.query;
  return (
    <div>PostDetail {postId}</div>
  )
}

export default PostDetail;