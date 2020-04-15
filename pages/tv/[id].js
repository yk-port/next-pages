import Layout from '../../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null }
  </Layout>
)

Post.getInitialProps = async function(context) {
  console.log(context)
  const { id } = context.query
  console.log(id)
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  console.log(res)
  const show = await res.json()
  console.log(show)

  return { show };
}

export default Post
