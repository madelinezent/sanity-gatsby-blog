export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6071df03da528f848b321c54",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-knd652pj",
                  apiId: "d7ad9b08-c190-4d92-ba26-afca6e2d4628",
                },
                {
                  buildHookId: "6071df04edaee77e6f1b8725",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1swj4fzf",
                  apiId: "4429ed11-a4cd-4070-8355-6b7e47c8cd8f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/madelinezent/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1swj4fzf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
