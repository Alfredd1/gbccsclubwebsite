// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 3. Define your collection(s)
const members = defineCollection({
    type: "data",
    schema: z.array(z.object({
        id: z.string(),
        name: z.string(),
        photo: z.string(),
        course: z.string().max(4),
        linkedin: z.string().url()
    })),
});

const projects = defineCollection({
    type: "data",
    schema: z.array(z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        photo: z.string().optional().default(""),
        github: z.union([z.string().url(), z.literal("#"), z.literal("")]),
        website: z.union([z.string().url(), z.literal("#"), z.literal("")]),
    }))
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { members, projects };