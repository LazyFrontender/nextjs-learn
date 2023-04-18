import Head from "next/head";
import Image from "next/image";
import { useQuery } from "urql";
import { COURSE_QUERY } from "../../lib/query";

// import components
import Courses from "../../components/Courses";
// Component larni import qilish

export default function Home() {
  // Course larimizni Backend Strapi dan olish
  const [results] = useQuery({ query: COURSE_QUERY });
  const { fetching, error, data } = results;
  // Ma'lumotlar kelayotganini tekshirish
  if (fetching) return <h1>Loading...</h1>
  if (error) return <p>Oh... no this is Error, {error.message}</p>;

  // courses
  const courses = data.courses.data;
  return (
    <>
      <Head>
        <title>E-Commerce App</title>
        <meta
          name="description"
          content="The Courses developed by Udemy Authors"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Nextjs App</h1>
        {
          courses.map((course, index) => {
            return (
             <Courses course={course} key={course.attributes.slug} />
            );
          })
        }
      </main>
    </>
  );
}
