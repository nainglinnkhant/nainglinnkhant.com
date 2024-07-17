export const siteConfig = {
  title: "Naing Linn Khant",
  description:
    "Software engineer who loves crafting beautiful and accessible websites",
  url:
    process.env.NODE_ENV === "production"
      ? "https://nainglinnkhant.com"
      : "http://localhost:3000",
}
