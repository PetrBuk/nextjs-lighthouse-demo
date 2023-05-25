import { GetStaticPropsContext } from 'next'
import Head from 'next/head'

import { Comment, Post } from '@project/types/types'

type PostProps = {
  post: Post
  comments: Comment[]
}

const Post = ({ post, comments }: PostProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-2 text-left">
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="block rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {post.body}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in
          mauris eu tortor porttitor accumsan. Nulla turpis magna, cursus sit
          amet, suscipit a, interdum id, felis. Pellentesque pretium lectus id
          turpis. Morbi leo mi, nonummy eget tristique non, rhoncus non leo.
          Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam,
          tempor suscipit diam nulla vel leo. Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          pariatur? Duis bibendum, lectus ut viverra rhoncus, dolor nunc
          faucibus libero, eget facilisis enim ipsum id lacus. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat. Donec quis nibh at felis congue commodo. Aliquam erat
          volutpat. Fusce tellus. Nullam lectus justo, vulputate eget mollis
          sed, tempor sed magna. Aliquam ante. Suspendisse nisl. Fusce dui leo,
          imperdiet in, aliquam sit amet, feugiat eu, orci. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Nullam justo enim, consectetuer nec, ullamcorper ac,
          vestibulum in, elit.
        </p>

        <p>
          Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae,
          justo. Praesent in mauris eu tortor porttitor accumsan. Praesent id
          justo in neque elementum ultrices. Nulla turpis magna, cursus sit
          amet, suscipit a, interdum id, felis. Duis sapien nunc, commodo et,
          interdum suscipit, sollicitudin et, dolor. Pellentesque ipsum.
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Fusce wisi. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vivamus luctus egestas leo. Integer pellentesque quam
          vel velit. Et harum quidem rerum facilis est et expedita distinctio.
          Aliquam erat volutpat.
        </p>

        <p>
          Fusce tellus. Quisque tincidunt scelerisque libero. Aliquam ornare
          wisi eu metus. Morbi imperdiet, mauris ac auctor dictum, nisl ligula
          egestas nulla, et sollicitudin sem purus in lacus. Phasellus enim
          erat, vestibulum vel, aliquam a, posuere eu, velit. Mauris elementum
          mauris vitae tortor. Proin in tellus sit amet nibh dignissim sagittis.
          Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
          Pellentesque pretium lectus id turpis. Cras elementum. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          hymenaeos. Ut tempus purus at lorem. Donec quis nibh at felis congue
          commodo. Pellentesque pretium lectus id turpis. Duis condimentum augue
          id magna semper rutrum. Maecenas fermentum, sem in pharetra
          pellentesque, velit turpis volutpat ante, in pharetra metus odio a
          lectus. In rutrum. Vestibulum fermentum tortor id mi. Integer rutrum,
          orci vestibulum ullamcorper ultricies, lacus quam ultricies odio,
          vitae placerat pede sem sit amet enim. Integer vulputate sem a nibh
          rutrum consequat.
        </p>
      </div>
      <div className="block w-full rounded-lg rounded-b-none border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Komentáře:
        </h5>
      </div>
      <ol className="relative -mt-8 w-full border border-gray-200 pt-2 dark:border-gray-700">
        {comments.map((comment) => (
          <li className="mb-10 ml-4 flex flex-wrap gap-1" key={comment.id}>
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
            <div className="text-sm font-normal text-gray-400 dark:text-gray-500">
              {comment.id}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              {comment.user.username}
            </h3>
            <p className="w-full text-base font-normal text-gray-500 dark:text-gray-400">
              {comment.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}

type BlogParams = {
  slug: string
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<BlogParams>) {
  if (params) {
    const postRes = await fetch('https://dummyjson.com/posts/' + params.slug)
    const commentsRes = await fetch(
      'https://dummyjson.com/posts/' + params.slug + '/comments'
    )
    const post = await postRes.json()
    const commentsData = await commentsRes.json()
    return {
      props: {
        post,
        comments: commentsData?.comments || [],
      },
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://dummyjson.com/posts?limit=20')
  const data = await res.json()
  const paths = data.posts.map((post: Post) => `/blog/${post.id}`)

  return {
    paths,
    fallback: 'blocking',
  }
}

export default Post
