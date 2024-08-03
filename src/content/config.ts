import { z, defineCollection } from "astro:content";

const questionCollection = defineCollection({
  type: "content",
  // TODO: we should enforce this schema
  // schema: z.object({
  //   title: z.string(),
  //   author: z.string(),
  //   path: z.string(),
  //   solution: z.string().optional(),
  //   generator: z.string().optional(),
  //   tags: z.array(z.string()),
  // }),
});

const courseCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    code: z.string(),
    title: z.string(),
    description: z.string(),
    textbook: z.string(),
    textbookUrl: z.string(),
  }),
});

const evaluationCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    course: z.string(),
    created_at: z.date(),
    questions: z.array(z.string()),
  }),
});

const tagCollection = defineCollection({
  type: "content",
  schema: z.object({
    course: z.string(),
    tag: z.string(),
    title: z.string(),
    section: z.nullable(z.string()),
  }),
});

export const collections = {
  courses: courseCollection,
  questions: questionCollection,
  evaluations: evaluationCollection,
  tags: tagCollection,
};
