import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "NextJS1",
    image: "getting-started-nextjs.png",
    except: "NextKS is the React framework for production.",
    date: "2023-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "NextJS2",
    image: "getting-started-nextjs.png",
    except: "NextKS is the React framework for production.",
    date: "2023-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "NextJS3",
    image: "getting-started-nextjs.png",
    except: "NextKS is the React framework for production.",
    date: "2023-02-10",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
