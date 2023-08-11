import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const query = router.query

  return <p>Query Param: {JSON.stringify(query)}</p>
}

export default Post