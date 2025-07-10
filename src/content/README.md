# 📝 Blog Content Management

## How to Add New Articles

Adding new blog articles is super simple! Just edit the `blogPosts.js` file and add your article as a JavaScript object.

### Step 1: Open the Blog Posts File

Open `src/content/blogPosts.js` in your code editor.

### Step 2: Add Your Article

Add a new object to the `blogPosts` array:

```javascript
export const blogPosts = [
  // ... existing articles ...
  {
    id: 5, // increment this number
    title: "Your Article Title",
    excerpt: "Brief description of your article (shows on cards)",
    author: "Jan Heimann",
    date: "2025-01-10", // YYYY-MM-DD format
    readTime: "7 min read",
    tags: ["Tag1", "Tag2", "Tag3"],
    category: "Your Category",
    content: `# Your Article Title

## Introduction

Your markdown content goes here...

### Code Examples

\`\`\`javascript
const example = () => {
  console.log("This is a code example!");
};
\`\`\`

### More Content

- Use markdown syntax
- **Bold text**
- *Italic text*
- [Links](https://example.com)

## Conclusion

Wrap up your article here.`
  }
];
```

### Step 3: Save and It's Live!

That's it! Your article will automatically appear on the website with:
- ✅ Full search functionality
- ✅ Category filtering
- ✅ Syntax highlighting for code
- ✅ Responsive design
- ✅ Markdown rendering

## Article Fields Explained

| Field | Description | Required |
|-------|-------------|----------|
| `id` | Unique number for the article | ✅ Yes |
| `title` | Main headline | ✅ Yes |
| `excerpt` | Brief description (shows on cards) | ✅ Yes |
| `author` | Your name | ✅ Yes |
| `date` | Publication date (YYYY-MM-DD) | ✅ Yes |
| `readTime` | Estimated reading time | ✅ Yes |
| `tags` | Array of searchable tags | ✅ Yes |
| `category` | Category for filtering | ✅ Yes |
| `content` | Full markdown content | ✅ Yes |

## Markdown Features

Your `content` field supports:

- **Headers**: `# H1`, `## H2`, `### H3`
- **Emphasis**: `**bold**`, `*italic*`
- **Code blocks**: \`\`\`language\`\`\`
- **Inline code**: \`code\`
- **Links**: `[text](url)`
- **Lists**: `- item` or `1. item`
- **Line breaks**: Just add empty lines

## Categories

Common categories you can use:
- "ML Engineering"
- "Research"
- "Frontend Development"
- "AI & Business"
- "Tutorial"
- "Opinion"

Or create your own! New categories automatically appear in the filter.

## Pro Tips

1. **Use descriptive tags** - they're searchable
2. **Keep excerpts under 150 characters** for best card display
3. **Include code examples** - they get syntax highlighting
4. **Use proper markdown headers** for good structure

## Example Categories by Content Type

- **Technical Deep Dives**: "ML Engineering", "Research"
- **Tutorials**: "Tutorial", "How-To"
- **Business Content**: "AI & Business", "Entrepreneurship"
- **Web Development**: "Frontend Development", "React"
- **Opinion Pieces**: "Opinion", "Industry Analysis"

That's it! Super simple content management. 🎉