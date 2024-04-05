import { twMerge } from 'tailwind-merge'

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function tw(...classes) {
  return twMerge(classes);
}

export function truncateTextWithEllipsis(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

export function getTextExcerpt(portableText) {
  let excerpt = '';

  portableText.forEach(block => {
    if (block._type === 'block' && block.children) {
      block.children.forEach(child => {
        if (child._type === 'span' && child.text) {
          excerpt += child.text;
        }
      });
    }
  });

  return truncateTextWithEllipsis(excerpt, 160);
}