import { Category, Media, User } from "@/payload-types"
import { RequiredDataFromCollectionSlug } from "payload"

export const generatePosts: (args: {
    count?: number, 
    author: User, 
    images: Media[],
    categories: Category[],
}) => RequiredDataFromCollectionSlug<'posts'>[] = ({ count = 6, author, images, categories }) => {
    const posts: RequiredDataFromCollectionSlug<'posts'>[] = []

    for (let i = 0; i < count; i++) {
        posts.push({
            title: 'What is the branding, and what we need it?',
            slug: `what-is-branding-${i + 1}`,
            _status: 'published',
            authors: [author],
            content: {
                root: {
                    type: 'root',
                    children: [
                    {
                        type: 'heading',
                        children: [
                        {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'Explore the untold and overlooked. A magnified view into the corners of the world, where every story deserves its spotlight.',
                            version: 1,
                        },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        tag: 'h2',
                        version: 1,
                    },
                    {
                        type: 'block',
                        fields: {
                        blockName: 'Disclaimer',
                        blockType: 'banner',
                        content: {
                            root: {
                            type: 'root',
                            children: [
                                {
                                type: 'paragraph',
                                children: [
                                    {
                                    type: 'text',
                                    detail: 0,
                                    format: 1,
                                    mode: 'normal',
                                    style: '',
                                    text: 'Disclaimer:',
                                    version: 1,
                                    },
                                    {
                                    type: 'text',
                                    detail: 0,
                                    format: 0,
                                    mode: 'normal',
                                    style: '',
                                    text: ' This content is fabricated and for demonstration purposes only. To edit this post, ',
                                    version: 1,
                                    },
                                    {
                                    type: 'link',
                                    children: [
                                        {
                                        type: 'text',
                                        detail: 0,
                                        format: 0,
                                        mode: 'normal',
                                        style: '',
                                        text: 'navigate to the admin dashboard.',
                                        version: 1,
                                        },
                                    ],
                                    direction: 'ltr',
                                    fields: {
                                        linkType: 'custom',
                                        newTab: true,
                                        url: '/admin',
                                    },
                                    format: '',
                                    indent: 0,
                                    version: 3,
                                    },
                                ],
                                direction: 'ltr',
                                format: '',
                                indent: 0,
                                textFormat: 1,
                                version: 1,
                                },
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1,
                            },
                        },
                        style: 'info',
                        },
                        format: '',
                        version: 2,
                    },
                    {
                        type: 'heading',
                        children: [
                        {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'The Power of Resilience: Stories of Recovery and Hope',
                            version: 1,
                        },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        tag: 'h2',
                        version: 1,
                    },
                    {
                        type: 'paragraph',
                        children: [
                        {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: "Throughout history, regions across the globe have faced the devastating impact of natural disasters, the turbulence of political unrest, and the challenging ripples of economic downturns. In these moments of profound crisis, an often-underestimated force emerges: the indomitable resilience of the human spirit. These aren't just tales of mere survival, but stories of communities forging bonds, uniting with a collective purpose, and demonstrating an innate ability to overcome.",
                            version: 1,
                        },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        textFormat: 0,
                        version: 1,
                    },
                    {
                        type: 'block',
                        fields: {
                        blockName: '',
                        blockType: 'mediaBlock',
                        media: images[i % images.length].id,
                        },
                        format: '',
                        version: 2,
                    },
                    {
                        type: 'paragraph',
                        children: [
                        {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'From neighbors forming makeshift rescue teams during floods to entire cities rallying to rebuild after economic collapse, the essence of humanity is most evident in these acts of solidarity. As we delve into these narratives, we witness the transformative power of community spirit, where adversity becomes a catalyst for growth, unity, and a brighter, rebuilt future.',
                            version: 1,
                        },
                        ],
                        direction: 'ltr',
                        format: '',
                        indent: 0,
                        textFormat: 0,
                        version: 1,
                    },
                    {
                        type: 'block',
                        fields: {
                        blockName: 'Dynamic components',
                        blockType: 'banner',
                        content: {
                            root: {
                            type: 'root',
                            children: [
                                {
                                type: 'paragraph',
                                children: [
                                    {
                                    type: 'text',
                                    detail: 0,
                                    format: 0,
                                    mode: 'normal',
                                    style: '',
                                    text: "This content above is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                                    version: 1,
                                    },
                                ],
                                direction: 'ltr',
                                format: '',
                                indent: 0,
                                textFormat: 0,
                                version: 1,
                                },
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1,
                            },
                        },
                        style: 'info',
                        },
                        format: '',
                        version: 2,
                    },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 1,
                },
            },
            heroImage: images[i % images.length].id,
            meta: {
                description:
                    'On the other hand, we denounce with righteous indignation and…',
                image: images[i % images.length].id,
                title: 'What is the branding, and what we need it?',
            },
            relatedPosts: [],
            categories: [categories[i % categories.length].id],
        })
    }

    return posts
}