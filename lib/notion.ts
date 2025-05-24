import "server-only"

import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_KEY })

interface Experience {
  companyName: string
  companyLink: string | null
  companyImageUrl: string
  position: string
  duration: string
}

export async function getExperiences(): Promise<Experience[]> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    sorts: [
      {
        property: "order",
        direction: "descending",
      },
    ],
  })
  return (
    response.results
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      .map((item) => (item as any).properties)
      .map((item) => ({
        companyName: item.company_name.title[0]?.plain_text,
        companyLink: item.company_link.rich_text[0]?.plain_text || null,
        companyImageUrl: item.company_image.url,
        position: item.position.rich_text[0]?.plain_text,
        duration: item.duration.rich_text[0]?.plain_text,
      }))
  )
}
