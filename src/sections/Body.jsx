const Body = () => {
  const articles = [
    {
      title: "Deploy to ECS with Fargate using Terraform",
      date: "Nov 3, 2023",
      link: "/",
    },
    { title: "IaaS vs PaaS vs SaaS", date: "Oct 24, 2023", link: "/" },
    { title: "Scalability for Dummies", date: "Sep 24, 2023", link: "/" },
    {
      title: "Load IP addresses for EC2 in Ansible Inventory",
      date: "Sep 6, 2023",
      link: "/",
    },
    {
      title: "Generate Terraform from existing AWS infrastructure",
      date: "Sep 6, 2023",
      link: "/",
    },
    {
      title: "Setup and Install PostgreSQL Using Docker",
      date: "Apr 18, 2023",
      link: "/",
    },
    {
      title: "Add Multiple SSH keys to an EC2 Server",
      date: "Apr 7, 2023",
      link: "/",
    },
    {
      title: "How to push to a Different git Branch?",
      date: "Apr 7, 2023",
      link: "/",
    },
    {
      title: "How to get Username and Group in Linux",
      date: "Apr 6, 2023",
      link: "/",
    },
    {
      title: "Everything You Need to Know About DNS",
      date: "Mar 26, 2023",
      link: "/",
    },
    {
      title: "Change and Persist Hostname in Linux",
      date: "Mar 23, 2023",
      link: "/",
    },
    {
      title: "Hassle-free Metabase Setup using Systemctl",
      date: "Mar 23, 2023",
      link: "/",
    },
    {
      title: "How to Monitor MySQL using Monit",
      date: "Mar 22, 2023",
      link: "/",
    },
    {
      title: "Renaming Terraform Resources without Destroying",
      date: "Mar 22, 2023",
      link: "/",
    },
    {
      title: "Guide to Writing Semantic HTML",
      date: "Mar 17, 2023",
      link: "/",
    },
    {
      title: "Guide to Picking a Language for DevOps",
      date: "Mar 15, 2023",
      link: "/",
    },
    {
      title: "Practical Guide to Port Knocking",
      date: "Mar 14, 2023",
      link: "/",
    },
    {
      title: "How to Manage Secrets in Web Applications?",
      date: "Mar 14, 2023",
      link: "/",
    },
    { title: "systemctl vs service in Linux", date: "Mar 11, 2023", link: "/" },
    {
      title: "Lessons Learned About AWS Autoscaling",
      date: "Mar 8, 2023",
      link: "/",
    },
    {
      title: "Amazon ECS vs EKS: Which one to choose?",
      date: "Mar 7, 2023",
      link: "/",
    },
    {
      title: "Chaos Engineering and why it Matters",
      date: "Mar 7, 2023",
      link: "/",
    },
    { title: "Deep Dive into CSS Grid", date: "Mar 7, 2023", link: "/" },
    {
      title: "Human Decision Making in UX Design",
      date: "Mar 7, 2023",
      link: "/",
    },
    {
      title: "Kubernetes and Cloud Cost Optimization",
      date: "Mar 7, 2023",
      link: "/",
    },
    {
      title: "How to Measure and Improve DevOps Maturity?",
      date: "Mar 7, 2023",
      link: "/",
    },
    { title: "Scale Up vs Scale Out", date: "Mar 7, 2023", link: "/" },
    {
      title: "Where should I run my database on AWS?",
      date: "Feb 28, 2023",
      link: "/",
    },
    { title: "Up and Running with AWS EC2", date: "Feb 25, 2023", link: "/" },
    { title: "Up and Running with AWS VPC", date: "Feb 24, 2023", link: "/" },
    {
      title: "Tune your Kubernetes Performance",
      date: "Feb 23, 2023",
      link: "/",
    },
    {
      title: "How to Understand and Influence Behavior",
      date: "Feb 22, 2023",
      link: "/",
    },
    { title: "TypeScript Cheatsheet", date: "Feb 22, 2023", link: "/" },
    { title: "How does the Internet Work?", date: "Feb 16, 2023", link: "/" },
    { title: "Networking 101", date: "Jan 29, 2023", link: "/" },
    {
      title: "Android Development Best Practices",
      date: "Jan 27, 2023",
      link: "/",
    },
    {
      title: "System Design: Latency vs Throughput",
      date: "Jan 19, 2023",
      link: "/",
    },
    {
      title: "Target nth element in Tailwind",
      date: "Jan 19, 2023",
      link: "/",
    },
    {
      title: "What makes a Good Junior Engineer?",
      date: "Jan 19, 2023",
      link: "/",
    },
    {
      title: "Consistency Patterns in Distributed Systems",
      date: "Jan 18, 2023",
      link: "/",
    },
    { title: "All about Data Structures", date: "Jan 17, 2023", link: "/" },
    { title: "What are Data Structures?", date: "Jan 17, 2023", link: "/" },
    { title: "How to Learn AWS in 2023", date: "Jan 15, 2023", link: "/" },
    { title: "What's in a URL?", date: "Dec 12, 2022", link: "/" },
    {
      title: "Web Development 101: A Guide for Beginners",
      date: "Nov 26, 2022",
      link: "/",
    },
    { title: "Git Cheatsheet", date: "Mar 18, 2022", link: "/" },
    {
      title: "Everything you need to know about HTTP",
      date: "Feb 16, 2021",
      link: "/",
    },
  ];

  return (
    <main className="container ">
      <section>
        <h1 className="text-5xl font-bold  mt-4 py-1 pb-2">cs.fyi</h1>
        <p className="opacity-60">
          Frontend, Backend, DevOps and everything in between.
        </p>
      </section>
      <section className="mt-5">
        {articles.map(({ link, title, date }, index) => (
          <div key={index}>
            <a
              href={link}
              className="hover:text-white cursor-pointer flex flex-col group items-start justify-between py-2 sm:flex-row sm:items-center sm:py-4 sm:text-2xl text-md text-neutral-500 transition-colors"
            >
              <span className="text-white">{title}</span>
              <span className="text-sm leading-3 mt-2">{date}</span>
            </a>

            {index >= articles.length - 1 ? (
              ""
            ) : (
              <hr className="text-white/40 mt-1" />
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Body;
