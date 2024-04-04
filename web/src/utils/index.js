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
