import Link from "@components/Link";

const posts1 = [
  ["Blog", "/blog/"],
  ["Tutorials", "/blog/#tutorials"],
  ["Articles", "/blog/#articles"],
  ["Comparisons", "/blog/#comparisons"],
  ["Release Notes", "/blog/#releasenotes"],
];

const posts2 = [
  ["AVIF in Wordpress", "/blog/tutorials/wordpress/"],
  ["AVIF in Safari", "/blog/tutorials/safari/"],
  ["AVIF in JS Frameworks", "/blog/tutorials/frameworks/"],
  ["AVIF FAQ", "/blog/articles/avif-faq/"],
  ["Image Web Perf", "/blog/articles/optimize-images-for-web-performance/"],
];

const posts3 = [
  ["JPEG XL Converter", "jpegxl.io"],
  ["ProductHunt", "www.producthunt.com/posts/avif-io-avif-image-converter"],
  ["Discord", "discord.com/invite/6w42YpF5hm"],
  ["Github", "github.com/justinschmitz97/avif.io/issues"],
  ["Sitemap", "/sitemap.xml"],
  ["RSS Feed", "/rss.xml"],
  ["Legal and Privacy", "/privacy-policy/"],
];

const Column = (props: any) => {
  return (
    <div className="px-2 w-full md:w-1/2 lg:w-1/4">
      <h6 className="mt-6 mb-3 font-bold text-white">{props.title}</h6>
      <nav className="list-none">
        {props.posts.map((item: any) => (
          <Link
            key={item}
            className="block text-gray-400 hover:text-white"
            text={item[0]}
            href={item[1]}
          />
        ))}
      </nav>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="flex flex-wrap order-first px-1 pt-4 pb-8 mx-auto text-left bg-bg-400">
      <div className="flex flex-col px-2 pr-2 mt-6 w-full text-gray-400 md:pr-6 md:w-1/2 lg:w-1/4 xl:pr-8">
        <Link
          className="mb-4 text-xl font-bold text-white"
          text="avif.io"
          href="/"
        />
        An open-source platform by Justin Schmitz and Niksa Sporin that converts
        image formats like PNG, JPG, GIF, WEBP to AVIF.
        <Link text="@jschmitz97" href="twitter.com/jschmitz97" />
      </div>
      <Column posts={posts1} title="Categories" />
      <Column posts={posts2} title="Most viewed" />
      <Column posts={posts3} title="Other pages" />
    </footer>
  );
}
