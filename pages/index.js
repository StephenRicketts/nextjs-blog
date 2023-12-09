import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs1",
//     title: "NextJS1",
//     image: "getting-started-nextjs.png",
//     except: "NextKS is the React framework for production.",
//     date: "2023-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "NextJS2",
//     image: "getting-started-nextjs.png",
//     except: "NextKS is the React framework for production.",
//     date: "2023-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "NextJS3",
//     image: "getting-started-nextjs.png",
//     except: "NextKS is the React framework for production.",
//     date: "2023-02-10",
//   },
// ];

function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  console.log("this is featured posts", featuredPosts);

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
